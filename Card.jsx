import React  from "react";
import { useState} from "react";
import kahmenei from "./assets/Image/khamenei.webp"
function Card(){
const handleclick = (e)=>e.target.style.backgroundColor="white";
const handleClick2 = (name)=>console.log(`${name} stop clicking`)
    return(
        <div className="w-full h-40 flex justify-between gap-2 border-2 border-white p-2">
            <div className="bg-amber-700 h-full w-1/4 grid grid-cols-1 gap-2 p-1.5 rounded-xl">
                <div className="flex justify-between gap-4 h-10">
                    <div className="flex justify-start items-start h-full basis-1/4 ">
                        <img src={kahmenei} className="h-full w-full rounded-sm" alt=""/>
                    </div>
                    <a href="#" className="hover:underline hover:text-white">
                        <div className="text-xs basis-3/5 font-bold text-white overflow-hidden line-clamp-2 min-w-auto">
                            <p className="font-bold text-white line-clamp-2 ">Khamenei out as Supreme Leader of Iran by January 31?</p>
                        </div>
                    </a>
                    <div className="basis-1/5">
                        <svg width="120" height="60" viewBox="0 0 120 60" className="h-full w-full">
                            <path
                                d="M10 50 A50 50 0 0 1 110 50"
                                fill="none"
                                stroke="#d1d5db"
                                strokeWidth="6"
                            />

                            <path
                                d="M10 50 A50 50 0 0 1 110 50"
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="157"
                                strokeDashoffset="60"
                            />
                        </svg>

                    </div>
                </div>
                <div className="flex justify-between gap-2">
                    <button className="h-auto w-full text-white text-sm font-bold cursor-pointer bg-yellow-900 hover:bg-yellow-400 rounded-sm">Yes</button>
                    <button className="h-auto w-full text-slate-200 text-sm font-bold cursor-pointer bg-red-900 hover:bg-red-500 rounded-sm">No</button>
                </div>
                {/*Yarın devam edecağm*/}
                <div className="flex justify-between items-center">
                    <div className="flex justify-between item">
                        <div className="text-[10px] text-slate-300 font-medium flex justify-center items-center">$25mil Vol.</div>
                        <div className="flex justify-between item">
                            <span className="material-symbols-outlined small-icon text-slate-300 text-[8px] scale-60">repeat</span>

                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="material-symbols-outlined text-slate-300 text-[8px] scale-60 hover:cursor-pointer" onClick={()=>handleClick2("Mye")}>bookmark</span>

                    </div>
                </div>
            </div>
            <div className="bg-white h-full w-1/4">2</div>
            <div className="bg-green-300 h-full w-1/4">3</div>
            <div className="bg-yellow-500 h-full w-1/4">4</div>
        </div>
    )
}
export default Card;