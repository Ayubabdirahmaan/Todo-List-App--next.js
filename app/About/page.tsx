import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center text-red-500 text-2xl">
        hello everyone this is my website
        <Image className="" src={'https://images.unsplash.com/photo-1773332611528-566f16120979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'} width={200} height={200} alt="cover" />
      </h1>
    </div>
  );
};

export default AboutPage;
