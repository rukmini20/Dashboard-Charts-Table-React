import CustomerI from "./customer.interface";
import ProductI from "./product.interface";

interface OrderI  {
  created_at: string
  currency: string
  customer: CustomerI
  id: string
  product: ProductI
  status: string
  total: number
}

export default OrderI