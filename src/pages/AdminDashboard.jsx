import React, { useState, useEffect } from "react";


import BaseLayout from "../layouts/BaseLayout";
import ProgressList from "../Tables/AdminTable";


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

  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div>
        <ProgressList/>
      </div>
    </BaseLayout>
  );
}
