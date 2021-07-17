import { DASHBOARD_FETCH_FAILURE, DASHBOARD_FETCH_SUCCESS } from "../constants";
import { getdashboardAPI } from "../../networks/apis/dashboardAPI";
const fetch = async () => {
  try {
    const { status, body } = await getdashboardAPI();
    if (status === 200) {
      return { payload: body, type: DASHBOARD_FETCH_SUCCESS };
    } else {
      return {
        payload: null,
        type: DASHBOARD_FETCH_FAILURE,
      };
    }
  } catch (error) {
    return { payload: null, type: DASHBOARD_FETCH_FAILURE };
  }
};
const dashboardService = { fetch };
export default dashboardService;
