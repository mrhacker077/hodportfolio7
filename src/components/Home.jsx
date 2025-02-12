import React from "react";

import pic from "../pe.jpg";


function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div
            className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <span className="text-red-700 font-bold">Lecturer</span>
            </div>

            <br />
            <p className="text-sm md:text-xl text-justify">
            I am Santhos Kumar P, serving as the Head of the Polymer Technology Department at Karnataka Govt. Polytechnic. Committed to innovation and education, I focus on fostering a dynamic learning environment that empowers students with the knowledge and skills needed for success in polymer technology.
            </p>
          </div>
          <div
            className="md:w-1/3 md:ml-48 md:mt-30 mt-8 order-1"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={pic}
              className="rounded-full md:w-[350px] md:h-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
