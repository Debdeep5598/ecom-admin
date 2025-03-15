"use client";
import Image from "next/image";
import { useState } from "react";

const Profile = () => {
  // Dummy User Data (Can be replaced with API fetch)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    profilePic: "/admin.jpg", // Image in `public/` folder
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-3xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Your Profile</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-lg transition duration-300">
            Edit Profile
          </button>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
            <Image
              src={user.profilePic}
              alt="Profile Picture"
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-6">
          <div className="flex justify-between">
            <p className="text-lg font-medium text-gray-600">Name:</p>
            <p className="text-lg text-gray-700">{user.name}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium text-gray-600">Email:</p>
            <p className="text-lg text-gray-700">{user.email}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium text-gray-600">Role:</p>
            <p className="text-lg text-gray-700">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
