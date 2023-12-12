export type ProductType = {
  _id: string
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: {
    name: string
    icon: string
    _id: string
  }[]
  category: string
}
