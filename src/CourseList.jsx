export default function CourseList() {
    return (
        <div>
            <div className="max-w-full p-6 border-lg bg-silver shadow-md rounded-lg">
  
  <h2 className="text-2xl font-semibold mb-6">Your Progress Till Now</h2>
  
  <div className="space-y-6 ">
    {/* Course Item 1 */}
    <div className="flex items-center justify-between border-b pb-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-medium ml-4">HTML</div>
      </div>
      <div className="w-56 hover:scale-105 transform transition-all">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>75%</span>
        </div>
        <div className="h-2.5 mb-4 bg-gray-200 rounded-full">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: "75%" }}></div>
        </div>
      </div>
    </div>

    {/* Course Item 2 */}
    <div className="flex items-center justify-between border-b pb-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-medium ml-4">CSS</div>
      </div>
      <div className="w-56 hover:scale-105 transform transition-all">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>50%</span>
        </div>
        <div className="h-2.5 mb-4 bg-gray-200 rounded-full">
          <div
            className="h-full bg-yellow-500 rounded-full"
            style={{ width: "50%" }}></div>
        </div>
      </div>
    </div>

    {/* Course Item 3 */}
    <div className="flex items-center justify-between border-b pb-4rounded-lg shadow-md hover:shadow-xl transition-shadow" >
      <div className="flex items-center space-x-4">
        <div className="text-lg font-medium ml-4">JAVA</div>
      </div>
      <div className="w-56 hover:scale-105 transform transition-all">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>30%</span>
        </div>
        <div className="h-2.5 mb-4 bg-gray-200 rounded-full">
          <div
            className="h-full bg-red-500 rounded-full"
            style={{ width: "30%" }}></div>
        </div>
      </div>
    </div>

    {/* Course Item 4 */}
    <div className="flex items-center justify-between border-b pb-4  rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-medium ml-4">JAVASCRIPT</div>
      </div>
      <div className="w-56 hover:scale-105 transform transition-all">
        <div className="flex justify-between text-sm mb-2 ">
          <span>Progress</span>
          <span>90%</span>
        </div>
        <div className="h-2.5 mb-4 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: "90%" }}></div>
        </div>
      </div>
    </div>

  </div>
</div>

        </div>
    )
};