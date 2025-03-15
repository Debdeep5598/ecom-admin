import Analytics from "@/components/dashboard/Analytics";
import Profile from "@/components/dashboard/Profile";
import Activity from "@/components/dashboard/Activity";
import Stats from "@/components/dashboard/Stats";
import Transactions from "@/components/dashboard/Transactions";
import Messages from "@/components/dashboard/Messages";
import Tasks from "@/components/dashboard/Tasks";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <Stats />

      <div className="grid grid-cols-3 gap-6">
        {/* Left Section: Sales Overview */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <Analytics />
        </div>

        {/* Right Section: Profile */}
        <div className="col-span-1">
          <Profile />
        </div>

        {/* Transactions & Messages Section */}
        <div className="col-span-2">
          <Transactions />
        </div>

        <div className="col-span-1">
          <Messages />
        </div>

        {/* Full-Width Activity & Tasks Section */}
        <div className="col-span-2">
          <Activity />
        </div>

        <div className="col-span-1">
          <Tasks />
        </div>
      </div>
    </div>
  );
}
