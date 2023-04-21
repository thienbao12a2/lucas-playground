import React from "react";
import Header from "./header";
import "../Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "Exploring Python: A Versatile Programming Language",
      date: "April 20, 2023",
      content:
        "Python is a versatile, high-level programming language known for its readability and ease of use. With its robust standard library and numerous third-party libraries, Python is well-suited for tasks ranging from web development and data analysis to artificial intelligence and machine learning. This post will provide an overview of Python and its wide range of applications in computer science.",
    },
    {
      title: "Understanding Computer Networks: The OSI Model",
      date: "April 21, 2023",
      content:
        "Computer networks allow devices to communicate and share resources over a network connection. One of the most widely used models for understanding and troubleshooting networks is the Open Systems Interconnection (OSI) model. This model breaks down network communication into seven distinct layers, each with its own responsibilities and functions. This blog post will provide an overview of the OSI model and how it helps us understand the inner workings of computer networks.",
    },
    {
      title: "Diving into Data Structures: Linked Lists",
      date: "April 22, 2023",
      content:
        "Data structures are a fundamental concept in computer science, providing efficient ways to organize and store data. Linked lists are a popular dynamic data structure that can store elements of varying sizes. Unlike arrays, linked lists have a flexible size, allowing elements to be easily inserted or removed without the need to resize or reorganize the entire structure. In this post, we will explore the benefits and drawbacks of linked lists, as well as their implementation and common use cases.",
    },
  ];

  return (
    <div>
      <Header />

      <div className="blog">
        <h1>Blog</h1>
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <div className="foot container-fluid footer">
        2022 copyright &copy; All Rights Reserved
      </div>
    </div>
  );
};

export default Blog;
