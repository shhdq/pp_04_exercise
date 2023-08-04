import React from "react";

function Bottom() {
  return (
    <footer className="bg-black w-full text-sm">
      <div className="h-12 flex items-center">
        <p className="mx-10">Latvia</p>
      </div>
      <div className="flex w-full justify-between h-12  items-center border-t-[1px] border-stone-700 px-10">
        <div className="flex gap-7">
          <a href="" className="hover:underline">
            About
          </a>
          <a href="" className="hover:underline">
            Advertising
          </a>
          <a href="" className="hover:underline">
            Business
          </a>
          <a href="" className="hover:underline">
            {" "}
            How Search works
          </a>
        </div>

        <div className="flex gap-7">
          <a href="" className="hover:underline">
            Privacy
          </a>
          <a href="" className="hover:underline">
            Terms
          </a>
          <a href="" className="hover:underline">
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Bottom;
