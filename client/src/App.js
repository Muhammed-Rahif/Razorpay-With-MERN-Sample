import React, { useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "react-ui-cards";
import { getProducts, directCheckout } from "./helpers/helper";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      let products = await getProducts();
      setProducts(products);
    }
    fetchProduct();
  }, []);

  const handleCheckout = product => {
    directCheckout(product).then(response => {
      console.log({ response });
      checkoutRazorpay(response);
    });
  };

  const checkoutRazorpay = data => {
    var options = {
      key: "rzp_test_1EOPkPto7Fxrni", // Enter the Key ID generated from the Dashboard
      amount: data.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Muhammed Rahif",
      description: "Test Transaction with Razorpay payment gateway",
      image: "https://avatars.githubusercontent.com/u/73386156",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
        alert("Payment success!");
      },
      // prefill: {
      //   name: "Gaurav Kumar",
      //   email: "gaurav.kumar@example.com",
      //   contact: "9999999999",
      // },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };
    let rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      alert(response.error.description);
    });
    rzp1.open();
  };

  return (
    <div className="App">
      {/* <div className="checkoutBtnWrapper">
        <button className="checkoutBtn">Checkout</button>
      </div> */}
      {products.map((product, key) => (
        <ProductCard
          {...product}
          price={`Rs.${product.price}`}
          key={key}
          onClick={e => {
            if (e.target.tagName !== "A") return;
            handleCheckout(product);
          }}
        />
      ))}
    </div>
  );
}

export default App;
