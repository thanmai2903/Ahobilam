import React from "react";
function Footer() {
  return (
    <div>
      <div className="w-full  mt-5 bg-amber-950 cursor-pointer">
        <div className="flex flex-wrap text-white p-5">
          <div className="w-full sm:w-1/4 lg:w-1/6 p-4">
            <ul>
              About Ahobilam
              <li className="mt-5 text-slate-400">Nallamalla Hills</li>
              <li className="text-slate-400">Hills</li>
              <li className="text-slate-400">History</li>
              <li className="text-slate-400">Significance</li>
              <li className="text-slate-400">Ahobilam</li>
              <li className="text-slate-400">Math</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 lg:w-1/6 p-4">
            <ul>
              Nava Narasimha Temples
              <li className="mt-5 text-slate-400">Interactive</li>
              <li className="text-slate-400">Map</li>
              <li className="text-slate-400">Sthalapurana</li>
              <li className="text-slate-400">of all</li>
              <li className="text-slate-400">Temples</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 lg:w-1/6 p-4">
            <ul>
              Panchangam
              <li className="sm:mt-10 mt-5 text-slate-400">Monthly</li>
              <li className="text-slate-400">Calendar</li>
              <li className="text-slate-400">Detailed</li>
              <li className="text-slate-400">Panchangam</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 lg:w-1/6 p-4">
            <ul>
              Festivals
              <li className="sm:mt-10 mt-5 text-slate-400">Annual</li>
              <li className="text-slate-400">Festivals</li>
              <li className="text-slate-400">Monthly</li>
              <li className="text-slate-400">Festivals</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 lg:w-1/6 p-4">
            <ul>
              LIBRARY
              <li className="sm:mt-10 mt-5 text-slate-400">Photos</li>
              <li className="text-slate-400">Publications</li>
              <li className="text-slate-400">Audio</li>
              <li className="text-slate-400">Video</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 lg:w-1/6 p-4">
            <ul>
              Quick Links
              <li className="mt-5 text-slate-400">Contact Us</li>
              <li className="text-slate-400">Donations</li>
              <li className="text-slate-400">Book Seva</li>
              <li className="text-slate-400">FAQ’s</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          {" "}
          <img
            className="w-32 sm:w-40 lg:w-20"
            src="https://ahobilamtemple.com/ahobilam/assets/images/Path%2020768.png"
          />
        </div>
      </div>
    </div>
  );
}
export default Footer;
