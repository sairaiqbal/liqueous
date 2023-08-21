'use client'
import React from 'react';
interface BlogProps {
  params: string;
}


const Blog:React.FC<BlogProps> = ({params}) => {
  return (
    <div>
      Hello I am blog {params}
    </div>
    
  );
}

export default Blog;
