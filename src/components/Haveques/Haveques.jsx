import React from "react";
import "./haveques.css";
import sideImg from "../../assets/images/d 10 1.png";

const Haveques = () => {
  return (
    <div className="haveques px-10">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container  py-24  ">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 class=" title-font text-white text-[50px] leading-[60px] font-normal tracking-widest">
                Have any question?
              </h1>
              <h4 class="text-white  text-[18px] leading-[29.75px] title-font font-medium mb-4">
                Download the whitepaper and learn about ICO Token, the unique
                ICO Crypto approach and the team/advisors.
              </h4>
              <div class="flex mb-4">
                <a class="flex-grow text-white border-b-2 border-[#FD1640] py-2 text-lg px-1">
                  Description
                </a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </a>
              </div>
              <p class="leading-relaxed mb-4 p-3 text-white bg-[#FD1640]">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
              </p>
              <p class="leading-relaxed mb-4 p-3 text-white bg-[#FD1640]">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole
              </p>
              <p class="leading-relaxed mb-4 p-3 text-white bg-[#FD1640]">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
              </p>
              <p class="leading-relaxed mb-4 p-3 text-white bg-[#FD1640]">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps
              </p>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={sideImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Haveques;
