import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-4xl font-bold mb-10 ">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {/* Personal Info Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Personal Information
          </h2>
          <p className="text-gray-700">
          Hello everyone, my name is Santhosh Kumar P, and I am the Head of the Polymer Technology Department at Karnataka Govt. Polytechnic.  

I have 11 years of experience in the field of polymer technology. My educational background includes a Bachelor of Engineering (B.E.) in Polymer Technology. Over the years, I have developed strong technical skills in this domain.  

One of my key achievements is organizing two national-level conferences focused on polymers and their emerging trends. These events have contributed to knowledge-sharing and advancements in the field.
          </p>
          
        </div>

      </div>
    </div>
  );
}

export default About;
