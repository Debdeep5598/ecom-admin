"use client";

const transactions = [
  { id: 1, customer: "Alice Johnson", item: "Wireless Headphones", amount: "$120.50", status: "Paid", date: "2025-03-15" },
  { id: 2, customer: "Bob Williams", item: "Smartphone Case", amount: "$25.99", status: "Pending", date: "2025-03-14" },
  { id: 3, customer: "Emma Brown", item: "Laptop Stand", amount: "$80.00", status: "Paid", date: "2025-03-13" },
];

const Transactions = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="text-left p-2">Customer</th>
            <th className="text-left p-2">Item</th>
            <th className="text-left p-2">Amount</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="p-2">{transaction.customer}</td>
              <td className="p-2">{transaction.item}</td>
              <td className="p-2">{transaction.amount}</td>
              <td className={`p-2 font-semibold ${transaction.status === "Paid" ? "text-green-600" : "text-red-500"}`}>
                {transaction.status}
              </td>
              <td className="p-2">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
