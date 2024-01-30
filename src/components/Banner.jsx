import React from "react";

function Banner() {
  return (
    <header className="bg-[#F5F5F7] overflow-hidden text-center">
      <div className="my-10">
        <h1 className="text-[56px] font-bold">Ready, set ,submit.</h1>
        <h2 className="text-[27px]">
          Learn How to prepare and submit yourapps to the <br />
          Appstore for Apple Vision Pro.
        </h2>
        <div className="flex justify-center mt-[100px]">
          <img
            className="w-[750px]"
            src="https://developer.apple.com/home/images/tile-visionos-labs/vision-side_2x.webp"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Banner;
