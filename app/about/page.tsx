import Link from "next/link";
import React from "react";
import "../globals.css";

const About = () => {
  // throw new Error("Not today");
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About</h1>
      <Link href="/">Link to home page</Link>
    </div>
  );
};

export default About;
