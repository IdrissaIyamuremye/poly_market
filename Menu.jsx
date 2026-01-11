
function Menu() {
    return (
        <div className="flex justify-end items-center border-e text-xs text-white border-2 border-stone-500 h-12 ">
            <div className="w-3/4 flex items-center justify-between gap-1">
                <div className="basis-4 flex justify-center items-center px-10">Portfolio</div>
                <div className="w-3/4 relative">
                    <input
                        type="text"
                        placeholder="Search Portfolio"
                        className="w-3/4 h-8 outline-none text-xs pl-9 rounded-sm placeholder-slate-200 text-white bg-transparent border-stone-500 border-2 font-normal"
                    />
                    <div className="absolute left-0 top-0 bottom-100% w-8 h-8 flex items-center justify-center">
                        <span className="material-symbols-outlined cursor-pointer ">search</span>

                    </div>


                </div>
            </div>
            <div className="w-1/4">
                <div className="flex items-center justify-between text-xs">
                    <div className="basis-3/4 flex items-center justify-between">
                        <div className="flex-col items-center border-none rounded-sm hover:bg-stone-500 cursor-pointer">
                            <div className="text-slate-300 px-1 text-xs">Portfolio</div>
                            <div className="text-center text-green-600 font-bold text-[10px]">$0.000</div>
                        </div>
                        <div className="flex-col items-center border-none rounded-sm hover:bg-stone-500  cursor-pointer">
                            <div className="text-slate-300 px-2 text-xs">Cash</div>
                            <div className="text-center text-green-600 font-bold text-[10px]">$0.00</div>
                        </div>
                        <div className="flex-col items-center border-none rounded-sm hover:bg-stone-500  cursor-pointer">
                            <div className="text-slate-300 px-2 text-xs">Cash</div>
                            <div className="text-center text-green-600 font-bold text-[10px]">$0.00</div>
                        </div>

                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="bais-1/4">
                        <div>profile pc</div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Menu;