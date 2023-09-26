import React, { useState, useRef, useEffect, useReducer } from "react";

function Blogreducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.blog, ...state];
    case "DELETE":
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
}

export default function Blog() {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [blogs, dispatch] = useReducer(Blogreducer, []);
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();// It is use to bring the focous to title at intital rendering 
  }, []);

  useEffect(() => {
    if (blogs.length && blogs[0].title) {
      document.title = blogs[0].title;
    } else {
      document.title = "My Blogs!!";
    }
  }, [blogs]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD", blog: { title, blog } });
    setBlog("");
    setTitle("");
    titleRef.current.focus();// each time we add the new blog the the focus came back to title
  }

  function handelDel(index) {
    dispatch({ type: "DELETE", index });
  }

  return (
    <>
      <h1><u>Write a Blog!</u></h1>

      <div className="section">
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              ref={titleRef}
              placeholder="Enter the Title of the Blog here.."
            />
          </Row>

          <Row label="Content">
            <textarea
              className="input content"
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
              required
              placeholder="Content of the Blog goes here.."
            />
          </Row>

          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      <h2><u>Blogs</u>  </h2>
      {blogs.map((blog, index) => (
        <div className="blog" key={index}>
          <h3>{blog.title}</h3>
          <p>{blog.blog}</p>

          <div className="blog-btn">
            <button className="remove" onClick={() => handelDel(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>{label}<br /></label>
      {props.children}
      <hr />
    </>
  );
}
