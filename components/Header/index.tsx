import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  buttonValue?: {
    value?: string;
    responsiveValue?: string;
  };
  picture?: DecoImage;
}

const Header = ({
  buttonValue = {
    value: "VER OFERTAS",
    responsiveValue: "OFERTAS",
  },
  picture = "/thealfredlogo.png",
}: Props) => {
  return (
    <header className="bg-transparent z-10 top-0 h-24 w-full flex justify-between items-center px-[8vw]">
      <img src={picture} alt="" width="80px" />
      <button className="rounded-3xl py-1 px-6 text-white bg-white bg-opacity-50">
        <span className="inline-flex sm:hidden">
          {buttonValue?.responsiveValue?.length
            ? buttonValue?.responsiveValue
            : buttonValue.value}
        </span>
        <span className="hidden sm:inline-flex">
          {buttonValue.value}
        </span>
      </button>
    </header>
  );
};

export default Header;
