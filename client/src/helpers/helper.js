import axios from "axios";

const directCheckout = product =>
  new Promise((resolve, reject) => {
    axios
      .post("/api/payment/direct-checkout", product)
      .then(response => resolve(response.data))
      .catch(err => console.error(err));
  });

const getProducts = () =>
  new Promise((resolve, reject) => {
    axios
      .get("/api/product")
      .then(response => resolve(response.data))
      .catch(err => console.error(err));
  });

export { directCheckout, getProducts };
