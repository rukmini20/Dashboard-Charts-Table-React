import { useState, useEffect } from 'react'
import {Switch} from '@material-ui/core'
import { Bar } from 'react-chartjs-2';
import styles from './index.module.scss'
interface Props {
  sales_over_time_week: any
  sales_over_time_year: any
}
const SalesBarChart = ({sales_over_time_week, sales_over_time_year}:Props) => {
  const [salesOverTimeWeek, setSalesOverTimeWeek] = useState<any>([])
  const [salesOverTimeYear, setSalesOverTimeYear] = useState<any>([])
  const [displayWeek, setDisplayWeek] = useState<boolean>(false)
  const barColor:string='rgba(119, 58, 233)'
  useEffect(() => {
     if (sales_over_time_week) {
      let labels:Array<string>=[], salesOverTimeWeekData:Array<number>=[],backgroundColor:Array<string>=[]
       for (let i = 1; i < 8; i++) {
         backgroundColor.push(barColor)
        labels.push(i.toString())
        salesOverTimeWeekData.push(sales_over_time_week[i.toString()]?.orders)
      }
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Revenue (last 7 days)',
            data: salesOverTimeWeekData,
            borderWidth: 1,
             backgroundColor
          }
        ]
      }
      setSalesOverTimeWeek(data)
    }
  },[sales_over_time_week])
  useEffect(() => {
    if (sales_over_time_year) {
      let labels:Array<string>=[], salesOverTimeYearData:Array<number>=[],backgroundColor:Array<string>=[]
      for (let i = 1; i < 13; i++) {
        backgroundColor.push(barColor)
        labels.push(i.toString())
        salesOverTimeYearData.push(sales_over_time_year[i.toString()]?.orders)
      }
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Revenue (last 12 months)',
            data: salesOverTimeYearData,
            borderWidth: 1,
            backgroundColor,
          }
        ]
      }
      setSalesOverTimeYear(data)
    }
  },  [sales_over_time_year])
  return (
    <div className={styles.background}>
      <div className={`d-flex justify-content-between ${styles.title}`}>
        <div>
             <h3>{displayWeek?'Revenue (last 7 days)':'Revenue (last 12 months)'}</h3>
        </div>
        <div>
          <Switch checked={displayWeek} onChange={()=>setDisplayWeek(prev=>!prev)} />
        </div>
       </div>
      <div className={styles.bar}>
      <Bar
        data={displayWeek?salesOverTimeWeek:salesOverTimeYear}
        width={100}
        height={50}
        type='bar'
        />
        </div>
    </div>
  )
}

export default SalesBarChart
