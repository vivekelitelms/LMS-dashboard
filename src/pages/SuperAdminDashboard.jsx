import BaseLayout from "../layouts/BaseLayout";
import { Card } from "../components/Card";
import { FaClipboardList, FaFileAlt, FaClock, FaTimesCircle } from "react-icons/fa";

export default function SuperAdminDashboard() {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <div className="grid grid-cols-1 ml-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card for Total Requirements */}
        <Card
          logo={<FaClipboardList size={24} />}
          count="32"
          text="Total Requirements"
          bgColor="bg-blue-500/50"
        />
        
        {/* Card for Total Transcripts */}
        <Card
          logo={<FaFileAlt size={24} />}
          count="91"
          text="Total Transcripts"
          bgColor="bg-green-500/50"
        />

        {/* Card for Overdue Courses */}
        <Card
          logo={<FaClock size={24} />}
          count="10"
          text="Overdue Courses"
          bgColor="bg-yellow-500/50"
        />

        {/* Card for Expired Courses */}
        <Card
          logo={<FaTimesCircle size={24} />}
          count="4"
          text="Course Expired"
          bgColor="bg-red-500/50"
        />
      </div>
    </BaseLayout>
  );
}
