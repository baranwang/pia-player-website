import fetch from 'node-fetch';
import * as https from 'https';
import type { Release } from '@octokit/webhooks-types';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getRelease = async (tag = 'latest') => {
  let url = 'https://api.github.com/repos/pia-player/pia-player/releases'
  if (tag === 'latest') {
    url += '/latest'
  } else {
    url += `/tags/v${tag}`
  }
  return await fetch(url).then((res) => res.json() as Promise<Release>);
}

export const githubMirror = (url: string) => {
  const mirrorURL = new URL(url)
  mirrorURL.hostname = 'github.com.cnpmjs.org'
  console.log(mirrorURL);
  return mirrorURL.href
}

export const APIGateway = async (req: NextApiRequest, res: NextApiResponse, url: string) => {
  https
    .request(url, {
      headers: req.headers,
      method: req.method,
      rejectUnauthorized: false,
    }, (response) => {
      res.writeHead(response.statusCode!, response.headers);
      response.on('data', (chunk) => {
        res.write(chunk);
      });
      response.on('end', () => {
        res.end();
      });
    })
    .on('error', (e) => {
      res.writeHead(500);
      res.end(e.message);
    })
    .end();
}
