import { Hero } from "./components";
import { Navbar } from "./components/Navbar";

export function Landing() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className="flex justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>
    </div>
  );
}
