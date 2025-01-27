import BaseLayout from "../layouts/BaseLayout";
import ProgressList from "../Tables/ProgressList";


export default function AdminDashboard() {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div><ProgressList/></div>
    </BaseLayout>
  );
}
