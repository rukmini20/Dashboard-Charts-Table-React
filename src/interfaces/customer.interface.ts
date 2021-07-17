import { AddressI } from "./address.interface";

interface CustomerI  {
  avatar: string
  email: string
  id: string
  name: string
  surname: string
  address: AddressI
}

export default CustomerI