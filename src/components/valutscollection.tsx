import { vaults } from "../lib/data";
import { IDesktopStakingCard, IMobileStakingCard } from "../lib/types";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";

const DesktopStakingCard = ({
  id,
  title,
  tokenId,
  image,
  amount,
  duration,
  reward,
  percentage,
}: IDesktopStakingCard) => (
  <div
    className="border-t border-b border-gray-800 py-4 cursor-pointer"
    onClick={() => window.open(`/vault/${id}`)}
  >
    <div className="flex items-center gap-4">
      <span className="text-gray-400">{id}</span>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded overflow-hidden">
            <img src={image} alt={title} className="" />
          </div>
          <div>
            <h3 className="text-white font-bold">{title}</h3>
            <p className="text-sm text-gray-400">#{tokenId}</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-white">{amount} PASG</div>
          <div className="text-white">{duration} days</div>
          <div className="flex flex-col items-end">
            <span className="text-white">{reward}</span>
            <span className="text-green-500 text-sm">+{percentage}%</span>
          </div>

          <Button>Earn</Button>
        </div>
      </div>
    </div>
  </div>
);

const MobileStakingCard = ({
  id,
  title,
  tokenId,
  image,
  amount,
  reward,
  percentage,
}: IMobileStakingCard) => (
  <div
    className="flex items-center gap-4 p-4 border-b border-blue-900/30 hover:bg-blue-900/20 transition-colors cursor-pointer"
    onClick={() => window.open(`/vault/${id}`)}
  >
    <span className="text-gray-400 min-w-[20px]">{id}</span>
    <div className="flex flex-1 items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
      <div className="flex items-center gap-3 min-w-[200px]">
        <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm">{title}</span>
          <span className="text-gray-400 text-xs">#{tokenId}</span>
          <span className="text-gray-400 text-xs mt-1">
            Price: {amount} PASG
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <span className="text-white">{reward}</span>
        <span className="text-green-500 text-sm">+{percentage}%</span>
      </div>
    </div>
  </div>
);

const ValutsCollection = () => {
  const midPoint = Math.ceil(vaults.length / 2);
  const firstHalf = vaults.slice(0, midPoint);
  const secondHalf = vaults.slice(midPoint);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  if (isTabletOrMobile) {
    return (
      <div className="bg-black/90 rounded-lg overflow-hidden">
        <div className="flex justify-between px-4 py-3 bg-black/50 text-sm text-gray-400">
          <span>#Collections / Price</span>
          <span>Reward</span>
        </div>

        <div className="divide-y divide-blue-900/30">
          {vaults.map((item) => (
            <MobileStakingCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              tokenId={item.tokenId}
              amount={item.amount}
              reward={item.reward}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-8 bg-black">
      {[firstHalf, secondHalf].map((columnItems, gridIndex) => (
        <div key={gridIndex} className=" rounded-lg p-4">
          <div className="flex justify-between text-sm text-white mb-4 font-bold">
            <span>#Collections</span>
            <div className="flex gap-8">
              <span>Value locked</span>
              <span>Duration</span>
              <span>Rewards</span>
            </div>
          </div>

          {columnItems.map((item, index) => (
            <DesktopStakingCard
              key={`${gridIndex}-${index}`}
              id={item.id}
              title={item.title}
              image={item.image}
              tokenId={item.tokenId}
              amount={item.amount}
              duration={item.duration}
              reward={item.reward}
              percentage={item.percentage}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ValutsCollection;
