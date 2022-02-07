import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";

import "./Home.scss";

export default function Home() {
  let dispatch = useDispatch();
  const { posts } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(action.loadPosts());
  }, []);

  const handleDelete = (item) => {
    dispatch(action.deletePost(item));
  };

  return (
    <div className="container">
      {posts &&
        posts.map((elem, i) => {
          return (
            <div className="card">
              <div className="circle">
                <h2 className="card-user" key={i}>
                  {elem.title}
                </h2>
              </div>
              <div className="content">
                <p className="car-title"> {elem.body}</p>
                <p className="card-body">{elem.userId} </p>
                <button
                  className="card-button"
                  onClick={() => handleDelete(elem)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
