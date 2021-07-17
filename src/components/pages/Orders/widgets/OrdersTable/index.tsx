
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper';
import { OrderI } from '../../../../../interfaces'
import styles from './index.module.scss'
interface Props {
  total: number
  page: number
  orders: Array<OrderI>
  handleChangePage: any
}
const Orders = ({ total,page, orders, handleChangePage }: Props) => {

  const columns: Array<string> = ['Name', 'Email', 'Address', 'Product',]
  return (
    <div className={`${styles.table}`}>
       <Paper>
    <TableContainer>
      <Table stickyHeader={true} aria-label="simple table">
        <TableHead>
          <TableRow className={styles.tableCell}>
            {columns.map((item) => <TableCell key={item}>{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((item: OrderI) => (
            <TableRow key={item.id}>
              <TableCell>{item.customer.name} {item.customer.surname}</TableCell>
              <TableCell>{item.customer.email}</TableCell>
              <TableCell>{item.customer.address.street}, {item.customer.address.city}-{item.customer.address.zipcode}</TableCell>
               <TableCell>{item.product.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
        <TablePagination
          count={total}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={10}
      />
      </Paper>
    </div>
  )
}

export default Orders
