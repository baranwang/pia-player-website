import type { NextApiRequest, NextApiResponse } from 'next';
import { getRelease, githubMirror } from '@/utils';
import semver from 'semver';
import { URL } from 'url'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blob>
) {
  const { filename } = req.query
  const semVer = semver.coerce(filename as string)
  const { assets } = await getRelease(semVer ? semVer.version : 'latest')
  const asset = assets.find(item => item.name === filename)
  if (!asset) {
    return res.status(404).end()
  }
  res.redirect(302, githubMirror(asset.browser_download_url))
}
