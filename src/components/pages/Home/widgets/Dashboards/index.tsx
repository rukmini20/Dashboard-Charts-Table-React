import React from 'react'
import styles from './index.module.scss'
import Dashboard from '../../../../widgets/Dashboard'
import { DashboardI } from '../../../../../interfaces'
interface Props {
  dashboards: Array<DashboardI>
}
const Dashboards = ({dashboards}:Props) => {
  return (
    <div className={styles.background}>
      <h3 className={styles.title}>Dashboard</h3>
      <div className={`d-flex`}>
      {dashboards?.map((item,index)=><Dashboard key={index} dashboard={item}  />)}
      </div>
    </div>
  )
}

export default Dashboards
