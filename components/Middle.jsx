"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Logo from "public/images/google-logo.png";

function Middle() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(" ");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <Image src={Logo} width={272} height={92} alt="Picture of the author" />
      </div>

      <div className="mt-5 flex flex-col justify-center items-center">
        <div className="relative flex justify-start items-center">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 absolute ml-5"
          >
            <path
              fill="#9aa0a6"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>
          <input
            type="text"
            className="bg-[#202124] border border-stone-600 rounded-3xl h-12 w-[30vw] pl-14"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>

        <div className="mt-10 flex gap-5">
          <button className="bg-stone-700 w-36 h-10">Google Search</button>
          <button className="bg-stone-700 w-36 h-10">I'm Feeling Lucky</button>
        </div>
      </div>

      <div className="mt-10">
        <p>Google offered in: latviešu lietuvių русский</p>
      </div>

      <div className="mt-10">
        <ul className="text-red-500">
          {filteredUsers.map((user, index) => {
            <li key={index}>
              {user.name} : {user.email}
            </li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Middle;
