import React from "react";
import card1 from "../../assets/images/Property 1=Default.png";
import card2 from "../../assets/images/Property 1=Variant2.png";
import longTime from "../../assets/images/Property 1=Default (1).png";
import longTime1 from "../../assets/images/Property 1=Variant2 (1).png";
import digital from "../../assets/images/Property 1=Default.png";
import digital1 from "../../assets/images/Property 1=Variant2.png";
import empower from "../../assets/images/Property 1=Default (2).png";
import empower1 from "../../assets/images/Property 1=Variant2 (2).png";
import fostering from "../../assets/images/Property 1=Default (5).png";
import fostering1 from "../../assets/images/Property 1=Variant2 (5).png";
import perservation from "../../assets/images/Property 1=Default (4).png";
import perservation1 from "../../assets/images/Property 1=Variant2 (4).png";
import demo from "../../assets/images/Property 1=Default (3).png";
import demo1 from "../../assets/images/Property 1=Variant2 (3).png";

const Cards = () => {
  return (
    <div className="bg-black">
      <section class="text-gray-600 body-font">
        <div class="container md:px-20 mx-5 py-24 ">
          <div class="flex flex-wrap ">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full  object-center"
                  src={longTime}
                />
                <div class="px-8 py-40 relative z-10 w-full border-4 border-black bg-black opacity-0 hover:opacity-100">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full  object-center"
                    src={longTime1}
                  />
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full  object-center"
                  src={digital}
                />
                <div class="px-8 py-40 relative z-10 w-full border-4 border-black bg-black opacity-0 hover:opacity-100">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full  object-center"
                    src={digital1}
                  />
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full  object-center"
                  src={empower}
                />
                <div class="px-8 py-40 relative z-10 w-full border-4 border-black bg-black opacity-0 hover:opacity-100">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full  object-center"
                    src={empower1}
                  />
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full  object-center"
                  src={fostering}
                />
                <div class="px-8 py-40 relative z-10 w-full border-4 border-black bg-black opacity-0 hover:opacity-100">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full  object-center"
                    src={fostering1}
                  />
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full  object-center"
                  src={perservation}
                />
                <div class="px-8 py-40 relative z-10 w-full border-4 border-black bg-black opacity-0 hover:opacity-100">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full  object-center"
                    src={perservation1}
                  />
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full  object-center"
                  src={demo}
                />
                <div class="px-8 py-40 relative z-10 w-full border-4 border-black bg-black opacity-0 hover:opacity-100">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full  object-center"
                    src={demo1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
