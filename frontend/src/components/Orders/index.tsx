import { useEffect, useState } from 'react'
import { Order } from '../../@types/Order'
import { api } from '../../utils/api'
import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'
import socketIo from 'socket.io-client'

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    })

    socket.on('orders@new', (order) => {
      setOrders((state) => [...state, order])
    })
  }, [])

  useEffect(() => {
    async function fetchOrders() {
      try {
        const { data } = await api.get<Order[]>('/orders')
        setOrders(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOrders()
  }, [])

  const waiting = orders.filter((order) => order.status === 'WAITING')
  const inProduction = orders.filter(
    (order) => order.status === 'IN_PRODUCTION',
  )
  const done = orders.filter((order) => order.status === 'DONE')

  function handleCancelOrder(orderId: string) {
    setOrders((state) => state.filter((order) => order._id !== orderId))
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((state) =>
      state.map((order) =>
        order._id === orderId ? { ...order, status } : order,
      ),
    )
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em produção"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  )
}
