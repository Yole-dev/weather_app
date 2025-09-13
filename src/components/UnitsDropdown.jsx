import settingsIcon from "../assets/icons/icon-units.svg";
import dropdownIcon from "../assets/icons/icon-dropdown.svg";

function UnitsDropdown() {
  return (
    <div className=" w-[89px] h-[33px] flex justify-center items-center gap-1.5 bg-neutral-800 text-neutral-0 rounded-6 ">
      <img
        src={settingsIcon}
        alt="settings icon"
        className=" w-[14px] h-[14px] "
      />
      <p className=" text-[14px] leading-[120%] font-sans-medium ">Units</p>
      <img
        src={dropdownIcon}
        alt="dropdown icon"
        className=" w-[9px] h-[14px] "
      />
    </div>
  );
}

export default UnitsDropdown;
