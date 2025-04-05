import React from 'react';
import './HomePageProductCard.css';
import { useNavigate } from "react-router-dom";

const productData = [
  {
    id: 1,
    image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
    title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
    desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
    price: 150,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
    title: 'Kaushalam kalash Copper Pot',
    desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
    price: 120,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
    title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
    desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
    price: 130,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
    title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
    desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
    price: 120,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  // Duplicate entries as per your original data
  {
    id: 1,
    image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
    title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
    desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
    price: 150,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
    title: 'Kaushalam kalash Copper Pot',
    desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
    price: 120,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
    title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
    desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
    price: 130,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
    title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
    desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
    price: 120,
    trendingProductName: 'Featured',
    quantity: 1,
  }
];

const HomePageProductCard = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <h1 className="heading">Bestselling Products</h1>
      <div className="card-container">
        {productData.map((item, index) => (
          <div key={index} className="card">
            <img onClick={()=> navigate('/productinfo')} className="card-image" src={item.image} alt={item.title} />
            <div className="card-body">
              <h2 className="card-category">StyleWish</h2>
              <h1 className="card-title">{item.title.substring(0, 25)}</h1>
              <h1 className="card-price">₹{item.price}</h1>
              <button className="card-button">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageProductCard;
