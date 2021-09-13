import React, { useState } from "react";
import BlogLists from "./BlogLists";

export default function Demo() {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
      body: "this is my new website",
      author: "umme",
      id: 1,
    },
    {
      title: "my second website",
      body: "this is my second website",
      author: "salma",
      id: 2,
    },
    {
      title: "my third website",
      body: "this is my third website",
      author: "umme",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = setBlogs(blogs.filter((blog) => blog.id !== id));
    setBlogs(newBlogs);
  };
  return (
    <div>
      <BlogLists blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
