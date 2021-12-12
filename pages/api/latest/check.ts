
import semver from 'semver'
import { getRelease } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const version = req.query.version as string | undefined;
  if (!version || !semver.valid(version)) {
    return res.status(400).end();
  }
  const { tag_name, body } = await getRelease()
  if (semver.gt(tag_name, version)) {
    return res.status(200).json({
      name: tag_name,
      notes: body,
    });
  } else {
    return res.status(404).end();
  }
}