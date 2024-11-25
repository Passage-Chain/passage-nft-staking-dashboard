import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Button } from "../ui/button";
import { PiWalletLight } from "react-icons/pi";
// import { ModalType } from "../modals/modal.type";
// import { Modal, WalletModal } from "../modals/";

const DesktopNavbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleClear = () => {
    setSearchValue("");
  };
  // const handleModal = (type: ModalType) => {
  //   setModalType(type);
  // };

  return (
    <>
      <div className="border-b-[1px] border-[#3f3f41] py-6 md:block hidden">
        <div className="container mx-auto md:px-0 px-4 flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <img src="/passagelogo.svg" alt="passgaelogo" />
            <h2 className="text-3xl font-extrabold">NFT Staking</h2>
            <p>Vaults</p>
            <p>Rewards</p>
            <p>Portfolio</p>
          </div>
          <div>
            <div className="relative w-full flex gap-2">
              <div className="relative flex items-center w-full h-10 rounded-full bg-[#3f3f41] overflow-hidden">
                <div className="grid place-items-center h-full w-12">
                  <CiSearch className="h-5 w-5 text-gray-300" />
                </div>
                <input
                  className="peer h-full w-full outline-none text-sm text-gray-200 pr-12 bg-transparent placeholder:text-gray-400"
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                  <button
                    onClick={handleClear}
                    className="absolute right-2 grid place-items-center h-8 w-8 rounded-full"
                  >
                    <IoMdClose className="h-4 w-4 text-gray-300" />
                  </button>
                )}
              </div>
              <Button variant="secondary">
                <PiWalletLight size={20}/>
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
