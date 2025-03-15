"use client";

const messages = [
  { sender: "John (Customer)", text: "Hi, is the Laptop still available?" },
  { sender: "System", text: "Your payout of $1,250 has been processed!" },
  { sender: "Support", text: "Reminder: Respond to Order #5678 inquiry" },
];

const Messages = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Latest Messages</h2>
      <ul className="space-y-3">
        {messages.map((msg, index) => (
          <li key={index} className="border-b p-2 text-gray-700">
            <span className="font-semibold">{msg.sender}: </span>
            {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
