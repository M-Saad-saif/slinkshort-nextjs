"use client";
import React, { useState } from "react";
import "../style.css";

export default function page() {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generate, setGenerate] = useState(false);


  return (
    <section className="generate-container justify-items-center mt-30">
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-2xl mb-5">Shorten your URLs</h1>
        <input
          className="input mb-5 "
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          value={url}
        />
        <input
          className="input"
          type="text"
          placeholder="Enter your short URL text"
          onChange={(e) => {
            setShorturl(e.target.value);
          }}
          value={shorturl}
        />

        <button className="px-9 z-30 py-2 bg-[#00916f] rounded-md text-white relative font-semibold  overflow-hidden  after:absolute after:h-1 after:w-1 after:bg-[#00d9a6] after:left-5 after:bottom-0  after:-z-20 after:translate-y-full after:rounded-md hover:after:scale-[300]  after:transition-all after:duration-700 hover:after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#00d9a6] hover:[text-shadow:3px_5px_2px_#00916f] text-[18px] mt-6  w-116">
          Generate
        </button>
      </div>
    </section>
  );
}
