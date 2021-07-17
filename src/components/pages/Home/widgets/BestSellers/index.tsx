import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BestsellerI } from '../../../../../interfaces'
import {shortenNumber} from '../../../../../methods'
import styles from './index.module.scss';
interface Props{
  bestsellers: Array<BestsellerI>
}

const BestSellers = ({ bestsellers }: Props) => {


  const columns: Array<string> = ['Product Name', 'Price', '# Units Sold', 'Revenue',]
  return (<div className={styles.background}>
    <h3 className={styles.title}>Bestsellers</h3>
    <div className={`${styles.table}`}>
    <TableContainer component={Paper}>
      <Table stickyHeader={true} aria-label="simple table">
        <TableHead>
          <TableRow className={styles.tableCell}>
            {columns.map((item) => <TableCell key={item}>{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {bestsellers?.map((item: BestsellerI) => (
            <TableRow key={item.product.id}>
              <TableCell>{item.product.name}</TableCell>
              <TableCell>$ {shortenNumber(item.units * item.revenue)}</TableCell>
              <TableCell>{shortenNumber(item.units)}</TableCell>
              <TableCell>{shortenNumber(item.revenue)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </div>
  )
}
export default BestSellers