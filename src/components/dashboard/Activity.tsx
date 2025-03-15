"use client";

const Activity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-2 text-gray-700">
        <li>🛒 <strong>Order #1023</strong> placed for <strong>3 items</strong></li>
        <li>⭐ You received a <strong>5-star</strong> review on <strong>Wireless Headphones</strong></li>
        <li>📦 <strong>New stock</strong> added for <strong>Smartphone Cases</strong></li>
        <li>💰 Payment of <strong>$129.99</strong> received for Order #1018</li>
      </ul>
    </div>
  );
};

export default Activity;
