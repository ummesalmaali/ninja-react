import React, { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs && (
        <BlogLists
          blogs={blogs}
          title="All Blogs"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
