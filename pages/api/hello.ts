// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const data = await fetch('https://medium.com/feed/@willynogs1');
  console.log(data)
  res.status(200).json({ name: 'John Doe' })
}

export default handler;
