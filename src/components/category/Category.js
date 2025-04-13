import React from 'react';
import './Category.css';
import { useNavigate } from "react-router";

// Category data containing image URLs and names
const categories = [
  { image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png', name: 'fashion' },
  { image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png', name: 'shirt' },
  { image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png', name: 'jacket' },
  { image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png', name: 'mobile' },
  { image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png', name: 'laptop' },
  { image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png', name: 'shoes' },
  { image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png', name: 'home' },
  { image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png', name: 'books' }
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      {/* Scrollable category list */}
      <div className="category-list">
        {categories.map((item, index) => (
          <div key={index} className="category-item">
            {/* Category image inside a circular background */}
            <div  onClick={() => navigate(`/category/${item.name}`)} className="category-image-wrapper">
              <img className="category-image" src={item.image} alt={item.name} />
            </div>
            {/* Category name below the image */}
            <h1 className="category-name">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
