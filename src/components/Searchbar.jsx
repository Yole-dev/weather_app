import searchIcon from "../assets/icons/icon-search.svg";

function Searchbar() {
  return (
    <div className=" w-full flex flex-col items-center gap-[1rem] font-sans-medium font-[500] text-[20px] text-neutral-200 leading-[120%] ">
      <div className="w-full h-[56px] flex justify-center items-center gap-[1.5rem] rounded-12 bg-neutral-800 ">
        <img src={searchIcon} alt="search icon" />

        <input
          type="text"
          placeholder="Search for a place..."
          className=" w-[70%] focus:outline-0 "
          value={""}
          onChange={""}
        />
      </div>

      <button className=" w-full h-[56px] bg-blue-500 rounded-12 ">
        Search
      </button>
    </div>
  );
}

export default Searchbar;
