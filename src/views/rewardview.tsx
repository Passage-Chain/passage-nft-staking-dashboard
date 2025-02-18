import { Shell } from "../components/ui/shell";
import { NFTCard } from "../components/nft-card";
import { Button } from "../components/ui/button";
import OverviewCard from "../components/cards/overviewcard";
import { TbCopy } from "react-icons/tb";

const RewardView = () => {
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
                Reward balance{" "}
                <span className="font-bold text-[20px]">567,325.23 PASG</span>
              </p>
            </div>
          </div>
          <Button className="font-medium" size="sm">
            Claim reward
          </Button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <OverviewCard title="Total value locked" amount="1000,0000 PSG" />
          <OverviewCard title="Staking duration" amount="120 days" />
          <OverviewCard title="Reward" amount="1000,0000 PSG" />
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-[30px] font-bold text-white mb-4">
              Staked Collection
            </h2>
            <div className="md:flex hidden gap-4">
              <Button variant="outline" size="sm" className="font-medium">
                Select
              </Button>
              <Button className="font-medium" size="sm">
                Untake all Nfts
              </Button>
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

export default RewardView;
