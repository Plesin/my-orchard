import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'lib/dbConnect'
import OrchardModel from 'models/Orchard'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const orchards = await OrchardModel.find({})
        res.status(200).json({ success: true, orchards: orchards })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const orchard = await OrchardModel.create(req.body)
        res.status(201).json({ success: true, orchard: orchard })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
