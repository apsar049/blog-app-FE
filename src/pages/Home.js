import React, { useState } from 'react';
import Blog from '../components/Blog';
export default function Home() {
  const data = [
    { id: 0, title: 'Blog 1', description: 'this is a blog 1' },
    { id: 1, title: 'Blog 2', description: 'this is a blog 2' },
    { id: 2, title: 'Blog 3', description: 'this is a blog 3' },
    { id: 3, title: 'Blog 4', description: 'this is a blog 4' },
    { id: 4, title: 'Blog 5', description: 'this is a blog 5' }
  ];

  return (
    <div className="home-container">
      {data.map(data => <Blog key={data.id} blog={data} />)}
    </div>
  );
}
