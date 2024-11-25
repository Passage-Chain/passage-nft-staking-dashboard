import { Shell } from "../components/ui/shell";
import { useState } from "react";
import ValutsCollection from "../components/valutscollection";

const HomeView = () => {
  const [activetrendBar, setActiveTrendbar] = useState("top");
  const [activeTimeDifference, setActiveTimeDifference] = useState("24H");

  const handleTrendbar = (value: string) => setActiveTrendbar(value);
  const handleTimeDifference = (value: string) =>
    setActiveTimeDifference(value);
  return (
    <Shell variant="mobile">
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/heroimage.svg)",
            borderRadius: "10px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.2",
            zIndex: "-1",
          }}
        />
        <div className="flex justify-between items-center gap-8 md:flex-row flex-col py-4 md:h-[430px] h-full px-6">
          <div className="relative opacity-none">
            <h4 className="md:text-[42.93px] text-[30px] font-bold w-full md:w-[370px]">
              Lock in your NFTs, unlock endless rewards!
            </h4>
            <p className="text-[12px] w-full md:w-[330px]">
              Ready to maximize your NFT potential? Lock in your NFTs and unlock
              endless rewards today! Start staking now and watch your digital
              assets work for you.
            </p>
          </div>
          <img src="/heronftcard.svg" alt="" />
        </div>
      </div>
      <div className="my-6">
        <div className="flex justify-between">
          <div className="bg-[#222223] rounded-full flex items-center">
            <p
              className={`px-6 py-1 rounded-full sm:cursor-pointer ${
                activetrendBar === "top" ? "bg-[#3f3e40]" : ""
              }`}
              onClick={() => handleTrendbar("top")}
            >
              Top
            </p>
            <p
              className={`px-4 py-1 rounded-full sm:cursor-pointer ${
                activetrendBar === "trending" ? "bg-[#3f3e40]" : ""
              }`}
              onClick={() => handleTrendbar("trending")}
            >
              Trending
            </p>
          </div>
          <div className="bg-[#222223] rounded-full flex items-center">
            <p
              className={`px-6 py-1 rounded-full sm:cursor-pointer ${
                activeTimeDifference === "24H" ? "bg-[#3f3e40]" : ""
              }`}
              onClick={() => handleTimeDifference("24H")}
            >
              24H
            </p>
            <p
              className={`px-6 py-1 rounded-full sm:cursor-pointer ${
                activeTimeDifference === "7D" ? "bg-[#3f3e40]" : ""
              }`}
              onClick={() => handleTimeDifference("7D")}
            >
              7D
            </p>
            <p
              className={`px-6 py-1 rounded-full sm:cursor-pointer ${
                activeTimeDifference === "30D" ? "bg-[#3f3e40]" : ""
              }`}
              onClick={() => handleTimeDifference("30D")}
            >
              30D
            </p>
          </div>
        </div>
      </div>
      <ValutsCollection />
    </Shell>
  );
};

export default HomeView;
