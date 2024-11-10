import Link from "next/link";
import React from "react";

const food = [
  {
    isFavouriteProduct: true,
    productImage:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", // Cake
    itemDisplayTag: "Nepali Cake",
    name: "Nepali Butter Cake",
    price: 500,
    productDescription: "A traditional Nepali butter cake, soft and delicious.",
    productId: "NBK001",
  },
  {
    isFavouriteProduct: false,
    productImage:
      "https://images.pexels.com/photos/616683/pexels-photo-616683.jpeg", // Bread
    itemDisplayTag: "Nepali Bread",
    name: "Nepali Milk Bread",
    price: 120,
    productDescription: "Freshly baked milk bread with a soft, fluffy texture.",
    productId: "NBK002",
  },
  {
    isFavouriteProduct: true,
    productImage:
      "https://images.pexels.com/photos/1756327/pexels-photo-1756327.jpeg", // Cookies
    itemDisplayTag: "Nepali Cookies",
    name: "Gurasa Cookies",
    price: 250,
    productDescription:
      "Crispy, crunchy Nepali cookies made with a hint of cinnamon.",
    productId: "NBK003",
  },
  {
    isFavouriteProduct: false,
    productImage:
      "https://images.pexels.com/photos/1705542/pexels-photo-1705542.jpeg", // Pastry
    itemDisplayTag: "Nepali Pastry",
    name: "Mitho Cream Pastry",
    price: 350,
    productDescription:
      "A soft and creamy Nepali pastry, perfect for any occasion.",
    productId: "NBK004",
  },
  {
    isFavouriteProduct: true,
    productImage:
      "https://images.pexels.com/photos/45202/pexels-photo-45202.jpeg", // Donut
    itemDisplayTag: "Nepali Donut",
    name: "Sel Roti Donut",
    price: 200,
    productDescription: "A fusion of traditional Sel Roti and a modern donut.",
    productId: "NBK005",
  },
];

const Home = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      {food.map((item) => {
        return (
          <Link href={"/userend/" + item.productId}>
            {" "}
            <img src={item.productImage} width={100} height={100} />
            {item.name} {item.price}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
