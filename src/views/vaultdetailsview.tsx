// import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Shell } from "../components/ui/shell";
import { FaArrowLeft } from "react-icons/fa6";
import { NFTCard } from "../components/nft-card";
import { Button } from "../components/ui/button";
import OverviewCard from "../components/cards/overviewcard";

const VaultDetails = () => {
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

  const { id } = useParams();
  console.log(id, "IDDDD");

  // const [selectedCards, setSelectedCards] = useState<string[]>([]);

  // const toggleSelect = (id: string) => {
  //   setSelectedCards((prev) =>
  //     prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
  //   );
  // };

  return (
    <Shell variant="default">
      <Link
        to="/"
        className="inline-flex items-center text-[#ffff] hover:text-white mb-4"
      >
        <FaArrowLeft className="mr-2 h-4 w-4" />
        Back to vaults
      </Link>
      {/* Desktop View */}
      <div className="md:flex gap-10 hidden">
        <img src="/assets/heronft.svg" alt="Strange Clan NFT" />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-normal text-white flex gap-4 mb-4">
                Strange Clan: Kira
                <span className="bg-[#3F3F41] rounded-[100px] px-4 py-2 text-sm">
                  #4540
                </span>
              </h1>
              <p className="text-[#fff] text-sm  mb-5">
                Owned by: pasg1pu9fvcaun374gf4m8wj0n7fmlcsj0tky8cfpc2
              </p>
            </div>
            <Button className="font-normal">Stake NFT</Button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <OverviewCard title="Total value locked" amount="1000,0000 PSG" />
            <OverviewCard title="Staking duration" amount="120 days" />
            <OverviewCard title="Reward" amount="1000,0000 PSG" />
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-[30px] font-bold text-white mb-4">
            Staked Collection
          </h2>
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

export default VaultDetails;
