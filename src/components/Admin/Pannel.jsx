import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Pannel.css";

function Pannel() {
  const [userdata, setUserData] = useState("");
  const [usercontent, setUserContent] = useState("");
  const [file, setFile] = useState("");

console.log("userdata",userdata)



  const submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    let user_id = localStorage.getItem("userId");
    console.log("file ", file);
    console.log("e.target.file.files[0] ", e.target.file.files[0]);
    formData.append("profile", e.target.file.files[0]);
    formData.append("userId", user_id);
    formData.append("title", e.target.title.value);
    formData.append("discription", e.target.discription.value);
    // const discription = e.target.discription.value;
    // const title = e.target.title.value;
    // const profile = file;
    // const videoInfo = {title,discription,profile}
    console.log(formData);
    axios
      .post("http://localhost:5000/api/content", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/alluser")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
    console.log(setUserData);

    axios
      .get("http://localhost:5000/api/allcontent")
      .then((res) => setUserContent(res.data))
      .catch((err) => console.log(err));
    console.log(setUserData);
  }, []);

  return (
    <>
      <div className="pannel">
        <div className="admin-header mb-5" align="center">
          <h1>Admin Pannel</h1>
        </div>
        <div className="records mb-2" align="center">
          <h3>user records</h3>
        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12 max-auto">
              <div className="row">
                <div className="user mx-5">
                  <div
                    class="card text-white bg-primary mb-3 text-align -center"
                    style={{ width: "12rem" }}
                  >
                    <div class="card-header" align="center">
                      Total users
                    </div>
                    <div class="card-body">
                      <h5 class="card-title" align="center">
                        {userdata.length}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="user mx-5">
                  <div
                    class="card text-white bg-primary mb-3"
                    style={{ width: "12rem" }}
                  >
                    <div class="card-header" align="center">
                      contents
                    </div>
                    <div class="card-body">
                      <h5 class="card-title" align="center">
                        {usercontent.length}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="user mx-5">
                  <div
                    class="card text-white bg-primary mb-3"
                    style={{ maxwidth: "18rem" }}
                  >
                    <div class="card-header"> users</div>
                    <div class="card-body">
                      <h5 class="card-title">
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="user mx-5">
                  <div
                    class="card text-white bg-primary mb-3"
                    style={{ maxwidth: "18rem" }}
                  >
                    <div class="card-header">Users</div>
                    <div class="card-body">
                      <h5 class="card-title">Primary card title</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formdata my-5" align="center">
        <form onSubmit={submit}>
          <div className="form-group my-3">
            <label for="exampleInputEmail1" align="left">
              title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="enter title"
            />
          </div>
          <div className="form-group my-3">
            <label for="exampleInputPassword1">discription</label>
            <input
              type="text"
              name="discription"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="discription"
            />
          </div>
          <div className="form-group my-3">
            <input
              type="file"
              name="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Pannel;
