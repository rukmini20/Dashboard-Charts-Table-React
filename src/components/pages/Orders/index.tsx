import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import SearchTextField from "../../widgets/SearchTextField";
import OrdersTable from "./widgets/OrdersTable";

import { OrderI } from "../../../interfaces";
import { getordersAPI } from "../../../networks/apis/ordersAPI";
const Orders = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [orders, setOrders] = useState<Array<OrderI>>([]);
  const fetch = async (pageReceived: number) => {
    try {
      const { status, body } = await getordersAPI(
        `?page=${pageReceived}&q=${searchTerm}`
      );
      if (status === 200) {
        setOrders(body.orders as Array<OrderI>);
        console.log("~~~ orders: ", orders);
        if (total) {
          setTotal(body.total);
        }
        return body.orders.length;
      } else {
      }
    } catch (error) {}
    return false;
  };
  useEffect(() => {
    handleChangePage(null, 1);

    // eslint-disable-next-line
  }, []);
  const onKeyPress = (value: string) => {
    setSearchTerm(value);
  };
  const handleChangePage = async (event: any, newPage: any) => {
    if (await fetch(newPage)) {
      if (newPage > page) {
        setPage((prev) => ++prev);
      } else if (newPage < page) {
        setPage((prev) => --prev);
      }
    }
  };
  return (
    <div className={`${styles.background}`}>
      <div className={`d-flex justify-content-between`}>
        <div>
          <h3>Orders</h3>
        </div>
        <div>
          <SearchTextField
            placeholder="Search..."
            name="search_text"
            type="text"
            onKeyPress={onKeyPress}
          />
        </div>
      </div>
      <div>
        <OrdersTable
          orders={orders}
          page={page}
          total={total}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Orders;
