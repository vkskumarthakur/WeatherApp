import React from "react";

const CityNameDegree = () => {
  return (
    <div>
      <div className="city-name-degree mx-7 flex gap-3 justify-between items-center p-3">
        <div className="flex items-center gap-3">
          <div className="city-name text-white text-4xl">Delhi</div>
          <div className="city-heat text-white text-lg">
            45 <sup>o </sup> C
          </div>
        </div>
        <div className="user-avatar">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="https://img.freepik.com/premium-vector/vector-creative-flat-design-profile-icons-collection_891917-2295.jpg?w=740" />
          </div>
        </div>
      </div>
      <div className="current-date mx-7 text-white px-3">
        Monday, 20.05.2024
      </div>
      <div
        className="mx-7 rounded-2xl p-2 mt-5"
        style={{ backgroundColor: "rgba(242, 239, 239, 0.1)" }}
      >
        <div className="weather-img ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={120}
            height={120}
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
      </div>
    </div>
  );
};

export default CityNameDegree;
