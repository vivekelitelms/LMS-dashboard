import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { Card } from "../components/Card";
import { FaClipboardList, FaFileAlt, FaClock, FaTimesCircle,FaExclamationCircle} from "react-icons/fa";
import ActiveList from "../Tables/ActiveList";
import { Pie } from "react-chartjs-2";


export default function SuperAdminDashboard() {

  const analyticsData = {
    labels: ["Completed", "Pending", "In Progress"],
    datasets: [
      {
        label: "Course Progress",
        data: [10, 5, 15], // Example data
        backgroundColor: ["#4CAF50", "#FFCE56", "#36A2EB"],
        hoverBackgroundColor: ["#45A049", "#FFCE56", "#36A2EB"],
      },
    ],
  };


  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <div className="grid grid-cols-1 ml-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card for Total Requirements */}
        <Card
          logo={<FaClipboardList size={30} />}
          count="32"
          text="Total Requirements"
          bgColor="bg-gradient-to-br from-orange-300 to-teal-950"
        />
        
        {/* Card for Total Transcripts */}
        <Card
          logo={<FaFileAlt size={30} />}
          count="91"
          text="Total Transcripts"
          bgColor="bg-gradient-to-br from-cyan-950 to-green-300"
        />

        {/* Card for Overdue Courses */}
        <Card
          logo={<FaClock size={30} />}
          count="10"
          text="Overdue Courses"
          bgColor="bg-gradient-to-br from-yellow-700 to-amber-2000"
        />

        {/* Card for Expired Courses */}
        <Card
          logo={<FaExclamationCircle size={30} />}
          count="4"
          text="Course Expired"
          bgColor="bg-gradient-to-br from-red-700 to-rose-300"
        />
      </div>
      <div className="lg:col-span-12 pt-4">
          <ActiveList/>
        <div className="p-6   shadow-md rounded-xl w-auto mt-6">
          <h3 className="font-semibold text-lg mb-4">Analytics</h3>
          <div className="w-auto h-64">
            <Pie data={analyticsData} />
          </div>
        </div>
      </div>
      
    </BaseLayout>
  );
}
