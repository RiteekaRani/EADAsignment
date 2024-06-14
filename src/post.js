import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const posts = {
    1: 'Kyoto, the ancient capital of Japan, is renowned for its stunning temples, serene gardens, and traditional tea houses. But beyond the popular tourist spots lies a world of hidden gems waiting to be discovered. Join us as we venture off the beaten path and uncover the secrets of Kyoto that only the locals know.',
    2: 'Embarking on a solo adventure through Europe can be one of the most liberating and enriching experiences of your life. Whether you are a seasoned solo traveler or taking your first trip alone, this guide is packed with tips and destination ideas to ensure you have a safe, enjoyable, and unforgettable journey.',
    3: 'Bangkok, the bustling capital of Thailand, is a paradise for food lovers. With its vibrant street food scene, diverse culinary offerings, and rich flavors, the city promises a gastronomic adventure like no other. Follow our guide to discover the best places to eat and the must-try dishes that define Bangkoks culinary landscape.',
  };

  return (
    <div>
      <h1>Post {id}</h1>
      <p>{posts[id]}</p>
    </div>
  );
};

export default Post;
