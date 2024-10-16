

const knex = openDBConnection();


 async function getProducts() {
  console.log("in getProducts");
  let results = [];
  try {
    // Retrieve Products
    // let transaction = Sentry.getCurrentHub().getScope().getTransaction();
    // let span = transaction.startChild({
    //   op: "getproducts",
    //   description: "db.query",
    // });
    // backorder_inventory is a "sleepy view", run the following query to get current sleep duration:
    // SELECT pg_get_viewdef('backorder_inventory', true)
    const productsQuery = `SELECT * FROM products limit 1`;
    // const subspan = span.startChild({
    //   op: "fetch products",
    //   description: productsQuery,
    // });

    const products = await knex.raw(productsQuery).catch((err) => {
      console.log("There was an error", err);
      throw err;
    });
    // Sentry.setTag("totalProducts", products.rows.length);
    // span.setData("Products", products.rows);
    // subspan.finish();
    // span.finish();

    // Retrieve Reviews
    // span = transaction.startChild({
    //   op: "getproducts.reviews",
    //   description: "db.query",
    // });
    // let formattedProducts = [];
    // for (product of products.rows) {
    //   // weekly_promotions is a "sleepy view", run the following query to get current sleep duration:
    //   // SELECT pg_get_viewdef('weekly_promotions', true)
    //   const reviewsQuery = `SELECT * FROM reviews, weekly_promotions WHERE productId = ${product.id}`;
    //   // const subspan = span.startChild({
    //   //   op: "fetch review",
    //   //   description: reviewsQuery,
    //   // });
    //   const retrievedReviews = await knex.raw(reviewsQuery);
    //   let productWithReviews = product;
    //   productWithReviews["reviews"] = retrievedReviews.rows;
    //   formattedProducts.push(productWithReviews);
    //   // subspan.setData("Reviews", retrievedReviews.rows);
    //   // subspan.finish();
    // }
    // span.setData("Products With Reviews", formattedProducts);
    // span.finish();

    return products;
  } catch (error) {
    // Sentry.captureException(error);
    console.log(error);
    throw error;
  }
};

function openDBConnection() {
  let host;

  // The cloud sql instance connection
  // name doesn't work locally, but the
  // public IP of the instance does.
  host = process.env.DB_HOST;

  // host = "/cloudsql/" + process.env.DB_CLOUD_SQL_CONNECTION_NAME;
  // }
  console.log("process ", process.env);
  const db = require("knex")({
    client: "pg",
    connection: {
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: host,
      port: 8088
    },
    pool: {
      min: 2,
      max: 10,
      idleTimeoutMillis: 30000, // 30 seconds
      acquireTimeoutMillis: 60000, // 60 seconds
    },
    debug: true,
  });
  return db;
}

module.exports = { getProducts };
