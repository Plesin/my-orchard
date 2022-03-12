import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'lib/dbConnect'
import TreeModel from 'models/Tree'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  const { treeId } = req.query
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const trees = await TreeModel.findById(treeId)
        res.status(200).json({ success: true, trees: trees })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
