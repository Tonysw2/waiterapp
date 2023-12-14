import { useState } from 'react'
import { Order } from '../../@types/Order'
import { OrderModal } from '../OrderModal'
import { Board, OrdersContainer } from './styles'
import { api } from '../../utils/api'
import { toast } from 'react-toastify'

interface Props {
  icon: string
  title: string
  orders: Order[]
  onCancelOrder: (orderId: string) => void
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: Props) {
  const [isLoading, setIsLoading] = useState(false)
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

  async function handleChangeOrderStatus() {
    try {
      setIsLoading(true)

      const status =
        selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'

      await api.patch(`/orders/${selectedOrder?._id}`, { status })

      toast.success(
        `O pedido da mesa ${selectedOrder?.table} foi alterado com sucesso.`,
      )

      onChangeOrderStatus(selectedOrder!._id, status)
    } catch (error) {
      console.log(error)
      toast.error(
        'Ocorreu um erro ao tentar alterar o status, tente novamente mais tarde.',
      )
    } finally {
      setIsLoading(false)
      setIsModalVisible(false)
    }
  }

  async function handleCancelOrder() {
    try {
      setIsLoading(true)
      await api.delete(`/orders/${selectedOrder?._id}`)
      onCancelOrder(selectedOrder!._id)
      toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado`)
    } catch (error) {
      console.log(error)
      toast.error('Houve um erro ao cancelar o pedido. Tente mais tarde.')
    } finally {
      setIsLoading(false)
      setIsModalVisible(false)
    }
  }

  return (
    <Board>
      {isModalVisible && (
        <OrderModal
          isLoading={isLoading}
          order={selectedOrder}
          visible={isModalVisible}
          onClose={handleCloseModal}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleChangeOrderStatus}
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
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} items</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}
