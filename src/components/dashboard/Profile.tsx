"use client";

const Profile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        src="/store-logo.jpg" // Change to store's logo/image
        alt="Store Logo"
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold">Dominic's Electronics</h3>
      <p className="text-gray-500">High-Quality Gadgets & Accessories</p>
      <p className="text-gray-600 mt-2">📍 New York, USA</p>
      <p className="text-gray-600">📧 contact@dominicelectronics.com</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
