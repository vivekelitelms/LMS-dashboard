export default function ProgressList() {
  return (
   <div>
    <div className="max-w-5xl mx-auto mt-10 relative h-screen">
  <h2 className="text-xl font-semibold mb-5">Student Progress</h2>
  <ul className="space-y-4">
    {/* Progress List Item */}
    <li className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
          S1 {/* Student Initial */}
        </div>
        <span className="font-medium">Student 1</span>
      </div>
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: '70%' }}></div>
      </div>
      <span className="text-sm font-medium">70%</span>
    </li>

    {/* Another Progress List Item */}
    <li className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
          S2 {/* Student Initial */}
        </div>
        <span className="font-medium">Student 2</span>
      </div>
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: '85%' }}></div>
      </div>
      <span className="text-sm font-medium">85%</span>
    </li>

    {/* Another Progress List Item */}
    <li className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
          S3 {/* Student Initial */}
        </div>
        <span className="font-medium">Student 3</span>
      </div>
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: '50%' }}></div>
      </div>
      <span className="text-sm font-medium">50%</span>
    </li>
  </ul>
</div>

   </div>
      
    
  );
}
