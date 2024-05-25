import React from "react";

const WeatherCardUi = () => {
  return (
    <div
      className="mx-7 rounded-2xl p-2 mt-5 flex-1 h-full"
      style={{ backgroundColor: "rgba(242, 239, 239, 0.1)" }}
    >
      <div className="weather-img flex justify-center border-b-[1px] py-2 border-opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={180}
          height={180}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffff00"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-cloud-sun"
        >
          <path d="M12 2v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="M20 12h2" />
          <path d="m19.07 4.93-1.41 1.41" />
          <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
          <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
        </svg>
      </div>
      <div className="mt-3">
        <h1 className="font-semibold text-5xl text-white text-center">Delhi</h1>
      </div>
      <div>
        <span className="text-white text-center block my-3">
          43 <sup>o</sup> C
        </span>
      </div>
      <div className="text-center text-white">
        <span>
          45 <sup>o</sup> C
        </span>
        &nbsp; / &nbsp;
        <span>
          32 <sup>o</sup> C
        </span>
      </div>
    </div>
  );
};

export default WeatherCardUi;
