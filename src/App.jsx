import React from "react";
import Navbar from "./components/NavBar";
import PipeImg from "./assets/pipe.png";
import ShowcaseSection from "./components/ShowcaseSection";

function App() {
  return (
    <>
      <Navbar />
      <section
        className="h-screen pt-30"
        style={{ backgroundImage: `url(${PipeImg})` }}
      >
        <div>
          <h1 className="font-instrument text-7xl text-center">
            We are Makkar Traders
          </h1>
          <h3 className="font-normal text-2xl text-center mt-2">
            We provide complete bath fitting solutions
          </h3>
        </div>
        <div className="flex justify-center pt-5">
          <div className="pr-2.5">
            <button className="border-2 border-amber-900 p-3 text-white rounded-2xl bg-amber-950 hover:cursor-pointer">
              <a href="https://maps.app.goo.gl/eMFyuDnYjEdFLdPo9?g_st=iw">
                Get our location
              </a>
            </button>
          </div>
          <div>
            <button className="border-2 border-amber-700 p-3 text-white rounded-2xl bg-amber-800 hover:cursor-pointer">
              <a href="tel:+919910056151">Contact Us</a>
            </button>
          </div>
        </div>
      </section>
      {/* Products */}
      <section>
          <ShowcaseSection />
      </section>
    </>
  );
}

export default App;
