import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { Card, CourseCard} from "../components/Card";
import { FaClipboardList, FaFileAlt, FaClock, FaTimesCircle } from "react-icons/fa";
import CourseList from "../Tables/CourseList";
import LottieIcon from '../assets/LottieIcon';
import bookAnimation from '../assets/book-animation.json';
import clockAnimation from '../assets/clock-animation.json';
import errorAnimation from '../assets/error-animation.json';


export default function StudentDashboard() {
  return (
    <BaseLayout>
    <>
      <h1 className="text-2xl font-bold ml-4 mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 ml-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card for Total Requirements */}
        <Card
          logo={<LottieIcon className="w-15 h-15 " animation={bookAnimation}/>}
          count="32"
          text="Total Requirements"
          bgColor="bg-blue-500/50"
        />
        
        {/* Card for Total Transcripts */}
        <Card
          logo={<FaFileAlt size={24} />}
          count="18"
          text="Total Transcripts"
          bgColor="bg-green-500/50"
        />

        {/* Card for Overdue Courses */}
        <Card
          logo={<LottieIcon className="w-20 h-20 " animation={clockAnimation}/>}
          count="7"
          text="Overdue Courses"
          bgColor="bg-yellow-500/50"
        />

        {/* Card for Expired Courses */}
        <Card
          logo={<LottieIcon className="w-20 h-20 " animation={errorAnimation}/>}
          count="4"
          text="Course Expired"
          bgColor="bg-red-500/50"
        />
      </div>
      <h2 className="text-xl font-bold mt-8 ml-4 mb-4">Courses</h2>
        <div className="grid grid-cols-1 ml-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {/* New Course Cards */}
          <CourseCard
            courseName="Course 1"
            modulesCount="10"
            coursesCount="5"
            completedCount="3"
            pendingCount="2"
            progress={60}
          />
          <CourseCard
            courseName="Course 2"
            modulesCount="8"
            coursesCount="4"
            completedCount="2"
            pendingCount="2"
            progress={50}
          />
          <CourseCard
            courseName="Course 3"
            modulesCount="12"
            coursesCount="6"
            completedCount="4"
            pendingCount="2"
            progress={70}
          />
        </div>
<div className="">
  <CourseList/>
</div>
    </>
    </BaseLayout>
  );
}
