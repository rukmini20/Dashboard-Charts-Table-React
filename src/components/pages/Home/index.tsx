import {useEffect, useState} from "react";
import { connect } from 'react-redux'
import { BestsellerI, DashboardI } from '../../../interfaces'
import { fetch } from '../../../store/actions/dashboard.action'
import Dashboards from './widgets/Dashboards'
import BestSellers from './widgets/BestSellers'
import SalesBarChart from './widgets/SalesBarChart'
import styles from './index.module.scss'
const Home = (props: any) => {
  const [bestsellers, setBestsellers] = useState<Array<BestsellerI>>([])
    const [salesOverTimeWeek, setSalesOverTimeWeek] = useState<any>([])
  const [salesOverTimeYear, setSalesOverTimeYear] = useState<any>([])
  const [dashboards,setDashboards]=useState<Array<DashboardI>>([])
  useEffect(() => {
    props.fetch()
    // eslint-disable-next-line
  }, [])
  const setDashboard = (dashboard: any) => {
    setBestsellers(dashboard?.bestsellers as Array<BestsellerI>)
      setSalesOverTimeWeek(dashboard?.sales_over_time_week)
    setSalesOverTimeYear(dashboard?.sales_over_time_year)

    let day: number =new Date().getDay()

    setDashboards(prev => [...prev, {
      title: 'Today',
      orders: dashboard?.sales_over_time_week[day]['orders'],
      price: dashboard?.sales_over_time_week[day]['total'],
    } as DashboardI])

    let totalPriceOfLastWeek: number = 0, totalOrdersOfLastWeek: number = 0
    for (let i = 1; i < 8; i++) {
      totalPriceOfLastWeek+=dashboard?.sales_over_time_week[i]['total']
      totalOrdersOfLastWeek+=dashboard?.sales_over_time_week[i]['orders']
    }
  setDashboards(prev => [...prev, {
      title: 'Last Week',
      orders: totalOrdersOfLastWeek,
      price: totalPriceOfLastWeek,
  } as DashboardI])

    let lastMonth: number =new Date().getMonth()
    if (lastMonth === 0) {
      lastMonth=12
    }
    setDashboards(prev => [...prev, {
      title: 'Last Month',
      orders: dashboard?.sales_over_time_year[lastMonth]['orders'],
      price: dashboard?.sales_over_time_year[lastMonth]['total'],
    } as DashboardI])


  }
  useEffect(() => {
    if (props.dashboard?.dashboard) {
      setDashboard(props.dashboard?.dashboard)
    }
  }, [props.dashboard])


  return <div className={`${styles.background}`}>
    <Dashboards dashboards={dashboards} />
    <SalesBarChart sales_over_time_week={salesOverTimeWeek} sales_over_time_year={salesOverTimeYear}  />
    <BestSellers bestsellers={bestsellers}  />
  </div>;
};

const mapStateToProps = ({ dashboard }: any) => ({
  dashboard: dashboard?.dashboard,
});
export default connect(mapStateToProps, { fetch })(Home);