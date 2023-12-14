import { Actions, ModalBody, OrderDetails, Overlay } from './styles'

import CloseSVG from '../../assets/images/close-icon.svg'

import { Order } from '../../@types/Order'

import { formatCurrency } from '../../utils/formatCurrency'
import { useEffect } from 'react'

type Props = {
  visible: boolean
  isLoading: boolean
  order: Order | null
  onClose: () => void
  onCancelOrder: () => Promise<void>
  onChangeOrderStatus: () => Promise<void>
}

export function OrderModal({
  order,
  visible,
  isLoading,
  onClose,
  onCancelOrder,
  onChangeOrderStatus,
}: Props) {
  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [onClose])

  if (!visible || !order) {
    return null
  }

  const total = order.products.reduce(
    (total, { product, quantity }) => total + quantity * product.price,
    0,
  )

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={CloseSVG} alt="Close icon" />
          </button>
        </header>

        <div className="order-status">
          <small>Status do pedido</small>

          <div>
            <span>
              {order.status === 'WAITING' && '🕐'}
              {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'File de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Items</strong>

          <div className="order-content">
            <ul className="product-list">
              {order.products.map(({ _id, product, quantity }) => (
                <li key={_id} className="product-item">
                  <img
                    className="product-image"
                    alt={product.name}
                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                    height={28.51}
                    width={56}
                  />

                  <div>
                    <span className="product-quantity">{quantity}x</span>

                    <div className="product-info">
                      <strong>{product.name}</strong>
                      <span>{formatCurrency(product.price)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="total-section">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type="button"
              className="btn-confirm"
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>{order.status === 'WAITING' && '🧑‍🍳'}</span>
              <span>{order.status === 'IN_PRODUCTION' && '✅'}</span>
              <strong>
                {order.status === 'WAITING' && 'Iniciar produção'}
              </strong>
              <strong>
                {order.status === 'IN_PRODUCTION' && 'Concluir pedido'}
              </strong>
            </button>
          )}

          <button
            type="button"
            disabled={isLoading}
            className="btn-cancel"
            onClick={onCancelOrder}
          >
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}
