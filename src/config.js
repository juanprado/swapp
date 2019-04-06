/* global process */

const mlAuth = process.env.ML_AUTH;
const mlEndpoint = process.env.ML_ENDPOINT;
const mlUserKey = process.env.ML_USER_KEY;
const isProd = process.env.NODE_ENV === 'production';
const header = { Authorization: mlAuth };
const keyQuery = `user_key=${mlUserKey}`;

export const skuAPI = {
  url: `${mlEndpoint}/query/skus`,
  header
};

export const ordersAPI = {
  url: `${mlEndpoint}/query/orders_by_location?${keyQuery}&product_id=`,
  header
};

export const revenueAPI = {
  url: `${mlEndpoint}/query/product-rolling-revenue?${keyQuery}&product_id=`,
  header
};

export const productsByMaterialAPI = {
  url: `${mlEndpoint}/query/products-by-material?${keyQuery}&material=`,
  header
};

export const elasticSearch = {
  url: isProd ? `${window.location.protocol}//${window.location.host}/api` : 'http://localhost:9200',
  productIndex: isProd ? 'wepwa_products_staging' : 'wepwa_products',
  skuIndex: isProd ? 'wepwa_skus_staging' : 'wepwa_skus'
};
