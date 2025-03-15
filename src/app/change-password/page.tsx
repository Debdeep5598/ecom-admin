"use client";
import { useState } from "react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    setLoading(true);
    // Simulate API call with a timeout
    setTimeout(() => {
      alert("Password changed successfully!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-teal-50 to-blue-50 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Change Password</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-lg font-medium text-gray-600">Current Password</label>
            <input
              type="password"
              className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-lg font-medium text-gray-600">New Password</label>
            <input
              type="password"
              className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-lg font-medium text-gray-600">Confirm New Password</label>
            <input
              type="password"
              className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300 ease-in-out font-semibold"
            disabled={loading}
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
