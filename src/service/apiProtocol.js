export const ENVIRONMENT_MAP = {
  ZY_PROD: {
    REQUEST_PATH: process.env.REACT_APP_ZY_PROD_REQUEST_PATH,
    PROXY_PATH: process.env.REACT_APP_ZY_PROD_PROXY_PATH,
  },
  ZY_QA: {
    REQUEST_PATH: process.env.REACT_APP_ZY_QA_REQUEST_PATH,
    PROXY_PATH: process.env.REACT_APP_ZY_QA_PROXY_PATH,
  },
  ZY_DEV: {
    REQUEST_PATH: process.env.REACT_APP_ZY_DEV_REQUEST_PATH,
    PROXY_PATH: process.env.REACT_APP_ZY_DEV_PROXY_PATH,
  },
}
