import type { NextApiRequest, NextApiResponse } from 'next';
import { getRelease, githubMirror } from '@/utils';

type Data = {
  win32: string;
  darwin: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blob>
) {
  const { assets } = await getRelease()

  const data: Data = {
    win32: assets.find((asset) => asset.name.endsWith('.exe'))!
      .browser_download_url,
    darwin: assets.find((asset) => asset.name.endsWith('.dmg'))!
      .browser_download_url,
  };
  const platform = req.query.platform as keyof Data;

  res.redirect(302, githubMirror(data[platform]));
}
