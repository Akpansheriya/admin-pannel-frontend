import axios from "axios";
import React from "react";
import "./User.css";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

function User() {
  const [video, setVideo] = useState("");
  
  let userId = localStorage.getItem("userId");

  const unlikepost = (id) => {
  
    axios
      .delete(`http://localhost:5000/api/unlike/${id}`, {
        likes: userId,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  
  const likepost = (id) => {
    
    axios
      .put(`http://localhost:5000/api/like/${id}`, {
        likes: userId,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  function isLiked(likes) {
    let match = likes.includes(userId);
    return match
    
  }

  console.log("isLiked", isLiked);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allcontent")
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 max-auto">
            <div className="row justify-content-center gy-3 px-5">
              <div className="content mb-5" align="center">
                <h1>contents</h1>
              </div>
              {video
                ? video.map((val, _id) => (
                    <div
                      key={_id}
                      className="card my-3 mx-5"
                      style={{ width: "18rem" }}
                    >
                      <video key={_id} className="mt-2" controls>
                        <source src={val.profile} />
                      </video>
                      <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">{val.discription}</p>

                        {isLiked(val.likes) ? (
                          <i onClick={() => unlikepost(val._id)} className="material-icons mx-2">thumb_up</i>
                        ) : (
                          <i
                            onClick={() => likepost(val._id)}
                            className="material-icons"
                            id="liked"
                          >
                            thumb_up
                          </i>
                        )}

                        <h6>likes {val.likes.length}</h6>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
