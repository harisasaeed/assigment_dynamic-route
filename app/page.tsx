import Nav from "./components/nav";
import React from "react";

export default function Home() {
  return (
    <div>
      <Nav/>
    <div className=" flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-5x1 p-6 px-9  mb-2 text-red-600 font-serif font-semibold ">
        {" "}
        Welcome to my Next.js</h1>

   
      <h1 className="text-yellow-500 text-2xl py-2 px-9  mb-2">Application with Dynamic Route</h1>
    </div>
    </div>
  );
}
