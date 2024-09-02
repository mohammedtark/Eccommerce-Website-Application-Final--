
export interface product {
  title: string
  price: number
  imageCover: string
  category: CategoryProduct
  ratingsAverage: number
  _id?:string
}

export interface CategoryProduct {
  name: string
}
