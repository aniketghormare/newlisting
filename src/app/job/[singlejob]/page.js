"use client";
import JobDetails from "@/components/jobdetails.jsx";
const Singlejob = ({ params }) => {
  return (
    <div>
      <JobDetails params={params} />
    </div>
  );
};

export default Singlejob;
