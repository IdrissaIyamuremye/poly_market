
function Menu() {
    return (
        <div className="flex justify-end items-center border-e text-xs text-white border-2 border-slate-300 h-12 ">
            <div className="w-3/4 flex items-center justify-between gap-1">
                <div className="basis-4 flex justify-center items-center px-10">Portfolio</div>
                <div className="w-3/4">
                    <input
                        type="text"
                        placeholder="Search Portfolio"
                        className="w-3/4 h-6 outline-none p-2 text-slate-200 font-medium bg-transparent border-slate-300 border-2"
                    />

                </div>
            </div>
            <div className="w-1/4">
                <div className="flex items-center justify-between text-xs">
                    <div className="basis-3/4 flex items-center justify-between">
                        <div className="flex-col items-center border-2 border-white rounded-sm hover:opacity-50">
                            <div className="text-slate-300 px-1 text-xs">Portfolio</div>
                            <div className="text-center text-green-600 font-bold text-[10px]">$0.000</div>
                        </div>
                        <div>
                            <div>Cash</div>
                            <div>$000.00</div>
                        </div>
                        <div>
                            <div>Deposit</div>
                            <div>$000.00</div>
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