

import BaseLayout from "../layouts/BaseLayout";
import React, { useState } from "react";
import StatCard from "../components/StatCard";
import QuickAction from "../components/QuickAction";
import { FaUsers, FaTasks, FaBook } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TranscriptReport from "../Tables/TranscriptReport";
import LearningPlanReport from "../Tables/LearningPlanReport";
import ComplianceReport from "../Tables/ComplianceReport";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AdminDashboard() {
  const [date, setDate] = useState(dayjs());

  const data = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        label: "Tasks",
        data: [75, 25], // Example data
        backgroundColor: ["#4CAF50", "#F4641C"],
        hoverBackgroundColor: ["#45A049", "#D9531A"],
      },
    ],
  };

   // Data for User Course Distribution
   const userCourseData = {
    labels: ["User 1", "User 2", "User 3", "User 4"],
    datasets: [
      {
        label: "Number of Courses",
        data: [5, 1, 2, 3],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  // Data for Learning Plan Progress
  const learningPlanData = {
    labels: ["MY", "Video Editing"],
    datasets: [
      {
        label: "Progress Percentage",
        data: [0, 5],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  // Shared Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true, max: 100, ticks: { stepSize: 50, callback: (value) => `${value}%` } },
    },
  };

  const transcriptOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true, ticks: { stepSize: 1, precision: 0 } },
    },
  };

  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Main Grid Layout */}
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        {/* Stats Section */}
        <div className="grid gap-6 lg:col-span-3">
          <StatCard
            title="Active Users"
            value="4"
            icon={<FaUsers />}
            bgColor="bg-blue-500"
            textColor="text-blue-500"
          />
          <StatCard
            title="Assigned"
            value="46"
            icon={<FaTasks />}
            bgColor="bg-red-500"
            textColor="text-red-500"
          />
          <StatCard
            title="Courses"
            value="8"
            icon={<FaBook />}
            bgColor="bg-green-500"
            textColor="text-green-500"
          />
        </div>

        {/* Chart and Calendar */}
        <div className="grid gap-6 lg:col-span-6 lg:grid-cols-2">
          {/* Chart Section */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Company Overview</h3>
            <div className="w-full h-64">
            <Pie data={data} />
          </div>
          </div>
          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold mb-4">Calendar</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={date}
                onChange={(newValue) => setDate(newValue)}
                className="max-w-full"
              />
            </LocalizationProvider>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="col-span-3">
          <div className="p-6 bg-white shadow-md h-full rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
            <div className="grid gap-4 grid-cols-1 py-6">
              <QuickAction label="Add User" onClick={() => alert("Add User")} />
              <QuickAction
                label="Assign Task"
                onClick={() => alert("Assign Task")}
              />
              <QuickAction
                label="Run Report"
                onClick={() => alert("Run Report")}
              />
              <QuickAction
                label="View Users"
                onClick={() => alert("View Users")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
      <div className="w-1/2">

        <TranscriptReport/>
      </div>
      <div className="w-1/2"><LearningPlanReport/></div>
      </div>
      <div><ComplianceReport/></div>
    </BaseLayout>
  );
}
