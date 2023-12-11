import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="Fila de espera"
        orders={[
          {
            _id: 'ked',
            products: [
              {
                _id: 'ede',
                product: {
                  name: 'Lanche de frango',
                  imagePath: '1702236232731-marguerita.png',
                  price: 10,
                },
                quantity: 10,
              },
              {
                _id: 'qwsqw',
                product: {
                  name: 'Pizza Marguerita',
                  imagePath: '1702236232731-marguerita.png',
                  price: 10,
                },
                quantity: 10,
              },
            ],
            status: 'IN_PRODUCTION',
            table: '12',
          },
        ]}
      />
      <OrdersBoard icon="🧑‍🍳" title="Em produção" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]} />
    </Container>
  )
}
