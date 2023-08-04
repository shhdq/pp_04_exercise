import React from "react";

function Top() {
  return (
    <nav className="flex  w-full justify-end px-5 py-2 gap-5 items-center text-sm">
      <a href="" className="hover:underline">
        Gmail
      </a>
      <a href="" className="hover:underline">
        Images
      </a>
      <a href="" className="hover:bg-stone-700 rounded-full p-2">
        <svg focusable="false" viewBox="0 0 24 24" className="w-7 h-7">
          <path
            fill="white"
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
          ></path>
        </svg>
      </a>
      <a
        href=""
        className="bg-[#8ab4f8] w-24 h-9 flex items-center justify-center rounded-lg text-[#202124]"
      >
        Sign In
      </a>
    </nav>
  );
}

export default Top;
