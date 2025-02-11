type IOverViewProps = {
  title: string;
  amount: string;
};

const OverviewCard = ({ title, amount }: IOverViewProps) => {
  return (
    <div className="bg-[#232325] rounded-md p-4 h-[152px]">
      <p className="text-[#fff] text-[20px] mb-2 text-center font-bold">
        {title}
      </p>
      <div className="bg-[#3F3F41] text-center rounded-full py-4 font-bold">
        {amount}
      </div>
    </div>
  );
};

export default OverviewCard;
