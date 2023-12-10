import { Request, Response } from 'express'
import { Order } from '../../models/Order'

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params
    const { status } = req.body

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      res.status(400).json({ message: 'Invalid Order Status' })
    }

    await Order.findByIdAndUpdate(orderId, { status })

    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}
