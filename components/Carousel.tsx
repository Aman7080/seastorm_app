import Image from "next/image";
import React from "react";

function Carousel() {
  return (
    <div className="md:flex mt-10 justify-evenly">
      <div className="m-10">
        {" "}
        <Image src="/7.jpg" width={512} height={512} />
      </div>
      <div className="m-10">
        {" "}
        <Image src="/9.jpg" width={512} height={512} />
      </div>
    </div>
  );
}

export default Carousel;
