import type { NextPage } from "next";
import MintBox from "../components/MintBox";
import Details from "../components/Details";
import Carousel from "../components/Carousel";
import Timeline from "../components/Timeline";

const Home: NextPage = () => {
  return (
    <div className=" bg-teal-400">
      <main>
        <div>
          <Carousel />
          <hr className=" mt-10" />
        </div>

        <div id="Timeline">
          <Timeline />
          <hr className=" mt-10" />
        </div>

        <div>
          <Details />
          <hr className=" mt-10" />
        </div>

        <div id="Mintbox">
          <MintBox />
        </div>
      </main>
    </div>
  );
};

export default Home;
