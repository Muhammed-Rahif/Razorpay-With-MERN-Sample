const express = require("express");
const router = express.Router();

const products = [
  {
    id: "7eea1c27-bf10-446d-b12e-124085ed77d1",
    photos: [
      "https://i.imgur.com/IpEsYSH.jpeg",
      "https://i.imgur.com/raPe27t.jpg",
      "https://i.imgur.com/jRVDeI8.jpg",
    ],
    price: 1399,
    productName: "Headphone",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni quis perferendis incidunt nemo magnam.`,
    buttonText: "Buy this",
  },
  {
    id: "1c493c17-3f28-4c08-b37b-6fc55af0cf8b",
    photos: [
      "https://static.rfstat.com/mockup-maker/mockups/87/71b47af284fcac79a4236ba7b1f18f1d.jpeg",
      "https://storage.googleapis.com/lmo/2020/10/91633fdc-iphone-mockup-with-earphones-on-coloured-paper-showcase.jpg",
      "https://mockupsfreebies.com/wp-content/uploads/2020/02/Free-iPhone-11-Pro-Mockup-PSD-by-Globe-Group-001.jpg",
    ],
    price: 59999,
    productName: "I Phone",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni quis perferendis incidunt nemo magnam.`,
    buttonText: "Buy this",
  },
  {
    id: "a11aff93-5c9f-4c2c-8478-d1ef1d59c959",
    photos: [
      "https://goodmockups.com/wp-content/uploads/2017/06/Free-Apple-MacBook-Mockup-PSD-Gold.jpg",
      "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1462.jpg",
      "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1483.jpg",
    ],
    price: 78000,
    productName: "Laptop",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni quis perferendis incidunt nemo magnam.`,
    buttonText: "Buy this",
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
