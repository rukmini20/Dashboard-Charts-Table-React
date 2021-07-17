import dashboardService from "../services/dashboard.service";

const fetch = () => async (dispatch: Function) => {
  const result = await dashboardService.fetch();
  dispatch(result);
};

export { fetch };
