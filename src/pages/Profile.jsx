import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import slider2 from "../assets/slider2.jpg";

const Profile = () => {
  const { user, handleUpdateUser } = useContext(UserContext);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    handleUpdateUser({ displayName: name, photoURL: photo })
      .then(() => {
        alert('profile updated successfully')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${slider2})`,
        }}
      >
        <div className="hero-overlay bg-opacity-30 md:py-40 py-20"></div>
        <div className="hero-content flex-col text-neutral-content text-center">
          <div className="text-white">
            {user && (
              <h1 className="mb-2 text-5xl font-bold font-Bebas">
                Hello {user.displayName}
              </h1>
            )}
          </div>
          <p className="text-xl">welcome to your profile.</p>
        </div>
      </div>
      <div className="w-10/12 mx-auto font-Roboto py-10">
        <div className="avatar md:-mt-32 flex justify-center items-center md:justify-start">
          <div className="ring-primary ring-offset-base-100 w-24 md:w-52 rounded-full ring ring-offset-2">
            {user && (
              <>
                <img src={user.photoURL} />
              </>
            )}
          </div>
        </div>
        <div className="bg-base-100">
          <h1 className="text-3xl font-bold text-center py-5">
            Your profile information
          </h1>
          <hr />
          <div className="md:w-8/12 mx-auto py-5 *:text-xl space-y-2">
            <h1>User Name: {user && user.displayName}</h1>
            <hr />
            <h1>Email: {user && user.email}</h1>
            <hr />
          </div>
        </div>
        <div className="md:w-8/12 mx-auto">
          <h1 className="text-3xl font-bold text-center py-5">
            update information
          </h1>
          <form onSubmit={handleUpdate}>
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
      </div>
    </>
  );
};

export default Profile;
