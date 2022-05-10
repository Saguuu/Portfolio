import React from 'react';
import Amazon from "../assets/amazon.png";
import Xenpass from "../assets/xenpass.png";
import Testinvest from "../assets/testinvest.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                    Projects
                </p>
                <p className="py-6">// Check out some of my applications!</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div style={{backgroundImage: `url(${Amazon})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Amazon Remake
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://clone-b2af4.firebaseapp.com/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:border-pink-600">Demo</button>
                            </a>
                            <a href="https://github.com/Saguuu/amazon-clone">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:border-pink-600">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Testinvest})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Testinvest
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://testinvestguru.herokuapp.com/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:border-pink-600">Demo</button>
                            </a>
                            <a href="https://github.com/Saguuu/finance">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:border-pink-600">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Xenpass})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Xenpass
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://xenpass.herokuapp.com/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:border-pink-600">Demo</button>
                            </a>
                            <a href="https://github.com/Saguuu/password-manager">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:border-pink-600">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work