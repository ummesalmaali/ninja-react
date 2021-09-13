import React, { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {isPending && <div> Loading...</div>}

      {blogs && <BlogLists blogs={blogs} title="All Blogs" />}
    </div>
  );
}
