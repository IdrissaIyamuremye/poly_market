
function Menu() {
    return (
        <div className="flex justify-end border-e text-xs text-white border-2 border-slate-300 h-12 ">
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
                <div className="">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div>profile pc</div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Menu;