import React from "react";
import image from "../beach-ball.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Beach Ball and Room"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-red-300 cursive leading-none lg:leading-snug home-name">Hello, I'm Nick</h1>
      </section>
    </main>
  );
}
