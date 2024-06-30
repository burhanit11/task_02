import React from "react";
import img1 from "../../assets/images/d5 1.png";
import "./stepper.css";

const Stepper = () => {
  return (
    <div className=" bg-black ">
      <div className="sm:mx-60 mx-10 py-20">
        <h1 className="font-bold text-white text-center text-[50px] leading-[60px]">
          Road<span className="text-[#FD1640]">map</span>{" "}
        </h1>
        <p className="font-normal text-white text-center text-[25.29px] leading-[29px]">
          The most technologically advanced species will
        </p>
      </div>
      <div className="pt-10 md:mx-40 sm:mx-20 mx-10  py-20">
        <ol class="relative  border-s  border-[#FD1640] dark:border-gray-700 text-white">
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-[#FD1640] rounded-full -start-4 ring-4 ring-[#FD1640] dark:ring-gray-900 dark:bg-green-900">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full  -top-0  dark:ring-gray-900 dark:bg-green-900"></span>
            </span>
            <div class="font-medium leading-tight pl-5 py-3 lg:w-[400px] md:w-[200px]  bg-[#FD16404D]">
              Level 01 - CyberKongz VX Launch
            </div>
            <div class="flex justify-between bg-[#FD1640] mt-10">
              <div className="flex mx-10 text-[20px] font-normal items-center">
                <ol>
                  <li>Goal defining</li>
                  <li>Market Reseach</li>
                  <li>WhitePaper v1</li>
                  <li>Initial founding</li>
                </ol>
              </div>
              <div className="img1">
                <img
                  src={img1}
                  alt="img1"
                  className="lg:-mt-40 md:-mt-20 sm:-mt-10 -mt-5"
                />
              </div>
            </div>
          </li>
          <li class="mb-10 ms-6 mt-20">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-[#FD1640] rounded-full -start-4 ring-4 ring-[#FD1640] dark:ring-gray-900 dark:bg-green-900">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full  -top-0 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
            </span>
            <div class="font-medium leading-tight pl-5 md:ms-72 mx-10 py-3 lg:w-[400px] md:w-[250px] bg-[#FD16404D]">
              Level 01 - CyberKongz VX Launch
            </div>
            <div class="flex justify-between bg-[#FD1640] my-20">
              <div className="img1">
                <img
                  src={img1}
                  alt="img1"
                  className="lg:-mt-40 md:-mt-20 sm:-mt-10 -mt-5"
                />
              </div>
              <div className="flex mx-10 text-[20px] font-normal items-center">
                <ol>
                  <li>Goal defining</li>
                  <li>Market Reseach</li>
                  <li>WhitePaper v1</li>
                  <li>Initial founding</li>
                </ol>
              </div>
            </div>
          </li>
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-[#FD1640] rounded-full -start-4 ring-4 ring-[#FD1640] dark:ring-gray-900 dark:bg-green-900">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full  -top-0  dark:ring-gray-900 dark:bg-green-900"></span>
            </span>
            <div class="font-medium leading-tight pl-5 py-3 lg:w-[400px] md:w-[200px]  bg-[#FD16404D]">
              Level 01 - CyberKongz VX Launch
            </div>
            <div class="flex justify-between bg-[#FD1640] mt-10">
              <div className="flex mx-10 text-[20px] font-normal items-center">
                <ol>
                  <li>Goal defining</li>
                  <li>Market Reseach</li>
                  <li>WhitePaper v1</li>
                  <li>Initial founding</li>
                </ol>
              </div>
              <div className="img1">
                <img
                  src={img1}
                  alt="img1"
                  className="lg:-mt-40 md:-mt-20 sm:-mt-10 -mt-5"
                />
              </div>
            </div>
          </li>
          <li class="mb-10 ms-6 mt-20">
            <span class="absolute flex items-center justify-center w-8 h-8 bg-[#FD1640] rounded-full -start-4 ring-4 ring-[#FD1640] dark:ring-gray-900 dark:bg-green-900">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full  -top-0 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
            </span>
            <div class="font-medium leading-tight pl-5 md:ms-72 mx-10 py-3 lg:w-[400px] md:w-[250px] bg-[#FD16404D]">
              Level 01 - CyberKongz VX Launch
            </div>
            <div class="flex justify-between bg-[#FD1640] my-20">
              <div className="img1">
                <img
                  src={img1}
                  alt="img1"
                  className="lg:-mt-40 md:-mt-20 sm:-mt-10 -mt-5"
                />
              </div>
              <div className="flex mx-10 text-[20px] font-normal items-center">
                <ol>
                  <li>Goal defining</li>
                  <li>Market Reseach</li>
                  <li>WhitePaper v1</li>
                  <li>Initial founding</li>
                </ol>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Stepper;
