import React from 'react'
import styles from './index.module.scss'
import { DashboardI } from '../../../interfaces'

import { shortenNumber } from '../../../methods'
interface Props   {
  dashboard: DashboardI
}

const Dashboard = ({dashboard}: Props) => {
  return (
    <div className={styles.background}>
      <div>{dashboard?.title}</div>
      <h6>${shortenNumber(dashboard?.price)} / {shortenNumber(dashboard?.orders)} orders</h6>
    </div>
  )
}

export default Dashboard
