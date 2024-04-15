/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, setReload, reload } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photoURL } = data;
    console.log(name, photoURL);

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("Profile Updated");
        toast.success("Profile Updated successfully");
        setReload(!reload);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Elite States | Update Profile</title>
      </Helmet>
      <div
        data-aos="flip-up"
        data-aos-duration="1500"
        className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto my-[30px] lg:my-[50px]"
      >
        <h1 className="text-2xl font-bold text-center">Update Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={user.displayName}
              {...register("name")}
              className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={user.email}
              disabled
              className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              defaultValue={user.photoURL}
              {...register("photoURL")}
              className="w-full px-4 py-3 rounded-md input input-bordered border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-primary">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
