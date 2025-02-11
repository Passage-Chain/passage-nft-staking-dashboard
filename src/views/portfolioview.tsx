import { useState } from "react";
import { Shell } from "../components/ui/shell";
import { NFTCard } from "../components/nft-card";
import OverviewCard from "../components/cards/overviewcard";
import { TbCopy } from "react-icons/tb";

const PortfolioView = () => {
  const initialCards = [
    {
      image: "/assets/nft1.svg",
      status: "Matured",
      name: "Strange Clan",
      id: "1",
      price: "3100",
    },
    {
      image: "/assets/nft1.svg",
      status: "14 days left",
      name: "Strange Clan",
      id: "2",
      price: "3100",
    },
    {
      image: "/assets/nft1.svg",
      status: "14 days left",
      name: "Strange Clan",
      id: "3",
      price: "3100",
    },
    {
      image: "/assets/nft1.svg",
      status: "Matured",
      name: "Strange Clan",
      id: "4",
      price: "3100",
    },
  ];

  const [cardState, setcardState] = useState("Staked NFT");
  const handleCardState = (value: string) => setcardState(value);
  return (
    <Shell variant="default">
      {/* Desktop View */}
      <div className="space-y-8">
        <div className="flex justify-between md:items-center flex-col md:flex-row md:gap-0 gap-10">
          <div className="flex items-start gap-4">
            <img src="/passagelogo.svg" alt="passgaelogo" />
            <div>
              <p className="flex gap-2 items-center">
                pasg1pu9fvcaun374gf4m8wj0n7fmlcsj0tky8cfpc2{" "}
                <span className="cursor-pointer">
                  <TbCopy />
                </span>
              </p>
              <p>
                Portfolio balance{" "}
                <span className="font-bold text-[20px]">567,325.23 PASG</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <OverviewCard title="Total value locked" amount="1000,0000 PSG" />
          <OverviewCard title="Staking duration" amount="120 days" />
          <OverviewCard title="Reward" amount="1000,0000 PSG" />
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <div className="my-6">
            <div className="flex justify-between">
              <div className="bg-[#222223] rounded-full flex items-center">
                <p
                  className={`px-6 py-1 rounded-full sm:cursor-pointer ${
                    cardState === "Staked NFT" ? "bg-[#3f3e40]" : ""
                  }`}
                  onClick={() => handleCardState("Staked NFT")}
                >
                  Staked NFT
                </p>
                <p
                  className={`px-4 py-1 rounded-full sm:cursor-pointer ${
                    cardState === "My NFTs" ? "bg-[#3f3e40]" : ""
                  }`}
                  onClick={() => handleCardState("My NFTs")}
                >
                  My NFTs
                </p>
              </div>
              <div>Duration</div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {initialCards.map((card) => (
              <NFTCard
                key={card.id}
                {...card}
                // isSelected={selectedCards.includes(card.id)}
                // onSelect={() => toggleSelect(card.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default PortfolioView;
