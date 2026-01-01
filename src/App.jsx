import React from "react";
import Navbar from "./components/NavBar";
import PipeImg from "./assets/pipe.png";
import ShowcaseSection from "./components/ShowcaseSection";

function App() {
  return (
    <>
      <Navbar />
      <section
        className="h-screen pt-30 "
        style={{ backgroundImage: `url(${PipeImg})` }}
        id="home"
      >
        <div>
          <h1 className="font-instrument text-7xl text-center">
            We are Makkar Traders
          </h1>
          <h3 className="font-inter text-2xl text-center mt-2">
            We provide complete bath fitting solutions
          </h3>
        </div>
        <div className="flex justify-center pt-5">
          <div className="pr-2.5">
            <button className="border-2 border-amber-900 p-3 text-white font-inter rounded-2xl bg-amber-950 hover:cursor-pointer">
              <a href="https://maps.app.goo.gl/eMFyuDnYjEdFLdPo9?g_st=iw">
                Get our location
              </a>
            </button>
          </div>
          <div>
            <button className="border-2 border-amber-700 font-inter p-3 text-white rounded-2xl bg-amber-800 hover:cursor-pointer">
              <a href="tel:+919910056151">Contact Us</a>
            </button>
          </div>
        </div>
      </section>
      <section id="products">
        <ShowcaseSection />
      </section>
      <section
        id="about"
        className="p-24 bg-linear-to-b from-orange-50 to-orange-300"
      >
        <h1 className="font-instrument text-6xl text-center mb-2">
          Contact Us
        </h1>
        <div className="flex justify-center">
          <div>
            <button className="bg-amber-800 text-white border-amber-900 border-4 rounded-3xl p-3 text-2xl m-2 font-inter">
              <a href="mailto:makkartraders07@gmail.com">Mail us</a>
            </button>
          </div>
          <div>
            <button className="bg-amber-800 text-white border-amber-900 border-4 rounded-3xl p-3 text-2xl m-2 font-inter">
              <a href="tel:+919910056151">Call us</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
