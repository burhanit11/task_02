import React from "react";
import "./home.css";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className=" home ">
      <div className=" pb-10 mx-10">
        <div className="hero">
          <Header />
          <div className="mt-10">
            <h1 className="text-white text-[90px] font-normal leading-[108px] pt-[6rem] ">
              Generate with AI, <br /> Scan, Mint, Sell <br /> & Trade
            </h1>
            <p className="text-white font-normal text-[24.58px]  leading-[29.75px]">
              Explore 3dotlink, where Web3 meets cultural legacy, and <br />
              AI breathes life into NFTs
            </p>
            <button class="inline-flex items-center bg-primary border-0 py-2 text-2xl font-normal  px-10 focus:outline-none rounded text-white mt-10 ">
              Buy NFT's
            </button>
          </div>

          {/* <img src={heroImg} alt="heroImg" className="pt-40" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
