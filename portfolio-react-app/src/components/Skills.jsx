import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Sql from "../assets/sql.png"
import Git from "../assets/github.png"
import Python from "../assets/python.png"
import Django from "../assets/django.png"
import Flask from "../assets/flask.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">

        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                <p className="py-4">{"// Skills & Technologies I am comfortable with"}.</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={HTML} alt="YO" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={CSS} alt="YO" />
                    <p className="my-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={JavaScript} alt="YO" />
                    <p className="my-4">Javascript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={Python} alt="YO" />
                    <p className="my-4">Python</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={Django} alt="YO" />
                    <p className="my-4">Django</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={Flask} alt="YO" />
                    <p className="my-4">Flask</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={ReactImg} alt="YO" />
                    <p className="my-4">React</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={Git} alt="YO" />
                    <p className="my-4">Git</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto mt-4" src={Sql} alt="YO" />
                    <p className="my-4">SQL</p>
                </div>           
            </div>
        </div>
    </div>
  );
}

export default Skills