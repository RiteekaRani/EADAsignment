import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Discovering the Hidden Gems of Kyoto: A Journey Beyond the Tourist Trail' },
    { id: 2, title: 'The Ultimate Guide to Solo Travel in Europe: Tips and Destinations' },
    { id: 3, title: 'A Food Lovers Guide to Bangkok: Where to Eat and What to Try' },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
