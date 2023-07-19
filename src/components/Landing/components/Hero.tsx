import { herocv } from "../../../assets";
import { GetStarted } from "../components";

export function Hero() {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
            Easy Create <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Your CV and Get Your</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Job Now.
        </h1>
        <p className="font-poppins font-normal text-slate-300 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias, possimus officiis numquam tempore cumque voluptatum aut
          consectetur autem eligendi, iusto enim. Ipsa veritatis optio omnis
          aperiam ad delectus earum?
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <img
          src={herocv}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className="ss:hidden flex justify-center items-center">
        <GetStarted />
      </div>
    </section>
  );
}
