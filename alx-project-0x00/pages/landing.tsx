import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card"
const Landing: React.FC =  () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Landing Page</h1>

      <Card />

      {/* Button Variations */}
      <div className="flex flex-wrap gap-4 mt-6">
        {/* Small Buttons */}
        <Button title="Small Rounded-sm" styles="px-3 py-1 text-sm rounded-sm" />
        <Button title="Small Rounded-md" styles="px-3 py-1 text-sm rounded-md" />
        <Button title="Small Rounded-full" styles="px-3 py-1 text-sm rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded-sm" styles="px-4 py-2 text-base rounded-sm" />
        <Button title="Medium Rounded-md" styles="px-4 py-2 text-base rounded-md" />
        <Button title="Medium Rounded-full" styles="px-4 py-2 text-base rounded-full" />

        {/* Large Buttons */}
        <Button title="Large Rounded-sm" styles="px-6 py-3 text-lg rounded-sm" />
        <Button title="Large Rounded-md" styles="px-6 py-3 text-lg rounded-md" />
        <Button title="Large Rounded-full" styles="px-6 py-3 text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;