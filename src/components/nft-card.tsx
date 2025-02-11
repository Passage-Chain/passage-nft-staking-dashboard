import cn from "classnames";

interface NFTCardProps {
  id: string;
  image: string;
  name: string;
  status: string;
  price: string;
  isSelected?: boolean;
  onSelect?: () => void;
  showCheckbox?: boolean;
  size?: "large" | "small";
}

export function NFTCard({
  image,
  id,
  name,
  status,
  price,
  isSelected = false,
  showCheckbox = false,
  onSelect,
}: // size = "small",
NFTCardProps) {
  //  border-[#3f3f41] border size === "large" ? "w-[280px]" : "w-full";
  const statusBgColor = status === "Matured" ? "bg-green-600" : "bg-[#3F3F41]";
  return (
    <div
      className={cn(
        "rounded-[20px] overflow-hidden bg-[#232325] px-2 py-3 w-full"
      )}
    >
      <div className="relative aspect-square">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name} #${id}`}
          className="object-cover w-full md:h-[380px] h-[250px] rounded-[7px]"
        />
        <div
          className={`absolute md:top-3 top-2 left-2 ${statusBgColor} md:px-2 md:py-2 px-[4px] py-[0.5px] rounded-full text-xs text-white`}
        >
          {status}
        </div>
        {showCheckbox && (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={onSelect}
            className="absolute md:top-3 top-2 right-2 md:w-5 md:h-5 w-3 h-4 cursor-pointer"
          />
        )}
      </div>
      <div className="p-3">
        <div className="text-[13px] text-[#ffff] mb-1">{name}</div>
        <div className="md:text-[16px] text-sm text-[#ffff] mb-1">{id}</div>
        <div className="text-[20px] font-extrabold text-white mb-1">
          {price} PASG
        </div>
      </div>
    </div>
  );
}
