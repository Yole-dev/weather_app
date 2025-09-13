import Searchbar from "./Searchbar";

function HeroSection() {
  return (
    <div className=" w-full flex flex-col items-center gap-[3rem] ">
      <p className=" w-[90%] font-bricolage font-bold leading-[120%] text-[52px] text-center ">
        How's the sky looking today?
      </p>

      <Searchbar />
    </div>
  );
}

export default HeroSection;
