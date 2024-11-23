import React from "react";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <div className=" md:flex gap-8 text-xl">
        <a href="/login">Login</a>
        <a href="/Startups">after login</a>
      </div>
     
    </>
  );
}
