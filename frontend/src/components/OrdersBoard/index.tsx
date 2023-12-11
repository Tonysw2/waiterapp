import { useState } from 'react'
import { Order } from '../../@types/Order'
import { OrderModal } from '../OrderModal'
import { Board, OrdersContainer } from './styles'

interface Props {
  icon: string
  title: string
  orders: Order[]
}

export function OrdersBoard({ icon, title, orders }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  function handleOpenModal(order: Order) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }

  function handleCloseModal() {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }

  return (
    <Board>
      {isModalVisible && (
        <OrderModal
          visible={isModalVisible}
          order={selectedOrder}
          onClose={handleCloseModal}
        />
      )}

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              key={order._id}
              type="button"
              onClick={() => {
                handleOpenModal(order)
              }}
            >
              <strong>{order.table}</strong>
              <span>{order.products.length} items</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}
