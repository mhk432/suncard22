"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ProfilePage = () => {
  const { data: session, refetch } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");

  if (!user) {
    return <p className="text-center mt-10 text-2xl text-blue-800 bg-gray-200 
    
    py-40 px-20">Please login first....</p>;
  }

  const handleUpdate = async () => {
    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message);
    } else {
     toast.success("Profile updated!");
      refetch(); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-[400px] text-center space-y-4">

        <Image
          src={user.image || "/user.png"}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />

        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p>{user.email}</p>

        {/* Update form */}
        <input
          className="input w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Update name"
        />

        <input
          className="input w-full"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Update image URL"
        />

        <button
          onClick={handleUpdate}
          className="btn btn-primary w-full"
        >
          Update Profile
        </button>
          <ToastContainer />
      </div>
    </div>
  );
};

export default ProfilePage;