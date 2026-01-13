import {useState} from "react";


function Nav(){

    const navEls = [
        "Trending",
        "Breaking",
        "New",
        "Politics",
        "Sports",
        "Crypto",
        "Finance",
        "Geopolitics",
        "Earnings",
        "Culture",
        "World",
        "Economy",
        "Climate & Science",
        "Elections",
        "Mentions",
        "More"]
    const [navEl, _setNav] = useState(navEls)
    console.log(navEl)
    return(

    <div className=" h-4 w-full">
        <ul
            className="flex justify-between gap-2 overflow-hidden text-slate-400 text-xs font-medium border-x-2  border-b-2 border-x-stone-500 border-b-stone-500">
            { navEl.map((elem, index) => (
                <a href="#">
                    <li key={index} className={`hover:text-slate-300 ${index===1? "border-e-2 pr-1": " "} whitespace-nowrap`}>{elem}</li>
                </a>

            ))}

        </ul>
    </div>
    )
}
export default Nav;