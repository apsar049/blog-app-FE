import React from 'react';
import './blog.css';
export default function Blog({ blog }) {
  return (
    <div className="blog-container">
      <div className="blog">
        <h3>
          {blog.title}
        </h3>
        <p>
          {blog.description}
        </p>
      </div>
    </div>
  );
}
