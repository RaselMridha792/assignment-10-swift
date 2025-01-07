import React, { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext";
import slider2 from "../assets/slider2.jpg";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user, handleUpdateUser } = useContext(UserContext);
  const [updateBtn, setUpdateBtn] = useState(false);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    handleUpdateUser({ displayName: name, photoURL: photo })
      .then(() => {
        alert("profile updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Profile | Swift</title>
      </Helmet>
      <div className="w-10/12 mx-auto font-Roboto my-20 py-10 bg-white  flex flex-col items-center">
        <div className="avatar flex justify-center items-center md:justify-start">
          <div className="ring-primary ring-offset-base-100 w-32 rounded-full">
            {user && (
              <>
                <img src={user.photoURL} />
              </>
            )}
          </div>
        </div>
        <div className="bg-base-100">
          <div className="mx-auto py-5 space-y-2 font-Roboto">
            <h1 className="text-center text-3xl ">
              {user && user.displayName}
            </h1>
            <h1 className="text-gray-500">{user && user.email}</h1>
          </div>
        </div>
        <div className="md:w-8/12 mx-auto flex items-center justify-center">
          <button
            onClick={() => setUpdateBtn(!updateBtn)}
            className="btn btn-warning"
          >
            update information
          </button>
        </div>
        <form
          className={`${updateBtn ? "block" : "hidden"}`}
          onSubmit={handleUpdate}
        >
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Update your name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={user.displayName}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Update photo</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              defaultValue={user.photoURL}
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn w-full my-5 btn-warning">Update Now</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
