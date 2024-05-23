import React from "react";

const DayHighlights = () => {
  return (
    <div className="higlights-days mx-7 p-2 mt-5 flex items-center gap-3 flex-wrap">
      <div className="highlight-card bg-white rounded-xl flex flex-col flex-1 py-2 px-5 gap-2">
        <div className="highlight-card-title text-gray-500">Sunday</div>
        <div className="highlight-card-data text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
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
        <div className="highlight-card-status text-gray-600">Normal</div>
      </div>
      <div className="highlight-card bg-white rounded-xl flex flex-col flex-1 py-2 px-5 gap-2">
        <div className="highlight-card-title text-gray-500">Monday</div>
        <div className="highlight-card-data text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cloud-sun-rain"
          >
            <path d="M12 2v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="M20 12h2" />
            <path d="m19.07 4.93-1.41 1.41" />
            <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
            <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
            <path d="M11 20v2" />
            <path d="M7 19v2" />
          </svg>
        </div>
        <div className="highlight-card-status text-gray-600">Normal</div>
      </div>
      <div className="highlight-card bg-white rounded-xl flex flex-col flex-1 py-2 px-5 gap-2">
        <div className="highlight-card-title text-gray-500">Tuesday</div>
        <div className="highlight-card-data text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cloudy"
          >
            <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" />
          </svg>
        </div>
        <div className="highlight-card-status text-gray-600">Normal</div>
      </div>
      <div className="highlight-card bg-white rounded-xl flex flex-col flex-1 py-2 px-5 gap-2">
        <div className="highlight-card-title text-gray-500">Wednesday</div>
        <div className="highlight-card-data text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cloud-drizzle"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M8 19v1" />
            <path d="M8 14v1" />
            <path d="M16 19v1" />
            <path d="M16 14v1" />
            <path d="M12 21v1" />
            <path d="M12 16v1" />
          </svg>
        </div>
        <div className="highlight-card-status text-gray-600">Normal</div>
      </div>
      <div className="highlight-card bg-white rounded-xl flex flex-col flex-1 py-2 px-5 gap-2">
        <div className="highlight-card-title text-gray-500">Thursday</div>
        <div className="highlight-card-data text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sun"
          >
            <circle cx={12} cy={12} r={4} />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </div>
        <div className="highlight-card-status text-gray-600">Normal</div>
      </div>
      <div className="highlight-card bg-white rounded-xl flex flex-col flex-1 py-2 px-5 gap-2">
        <div className="highlight-card-title text-gray-500">Friday</div>
        <div className="highlight-card-data text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cloud-lightning"
          >
            <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
            <path d="m13 12-3 5h4l-3 5" />
          </svg>
        </div>
        <div className="highlight-card-status text-gray-600">Normal</div>
      </div>
      <div className="highlight-card bg-white rounded-xl flex flex-col flex-1 py-2 px-5 gap-2">
        <div className="highlight-card-title text-gray-500">Saturday</div>
        <div className="highlight-card-data text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cloud-fog"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M16 17H7" />
            <path d="M17 21H9" />
          </svg>
        </div>
        <div className="highlight-card-status text-gray-600">Normal</div>
      </div>
    </div>
  );
};

export default DayHighlights;
