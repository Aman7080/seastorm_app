import React from "react";

function Timeline() {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-5xl mb-10 opacity-50 font-Freckle text-center">
        TIMELINE
      </h2>
      <div className="ml-10">
        <div className="text-left font-semibold">
          <div className="flex space-x-10 my-6">
            <h3> 0% </h3>
            <p>Private Release for exclusive Whitelited members</p>
          </div>
          <div className="flex space-x-10 my-6 ">
            <h3> 20% </h3>
            <p>Presale Release for Whitelited members</p>
          </div>
          <div className="flex space-x-10  my-6">
            <h3> 55% </h3>
            <p>Public Release</p>
          </div>
          <div className="flex space-x-10  my-6">
            <h3> 100% </h3>
            <p>Storm Space launch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
