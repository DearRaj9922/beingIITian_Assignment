export default function AvatarStats() {
    return (
        <div className="bg-gradient-to-br from-[#F4F9FF] to-[#E2EEFA] rounded-[2rem] p-4 md:p-6 shadow-sm border border-[#D1E4F8] h-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 md:gap-4 xl:gap-8 relative overflow-hidden transition-all hover:shadow-md">

            <div className="absolute -left-10 -top-10 w-64 h-64 bg-[#FFFFFF] opacity-60 rounded-full blur-3xl pointer-events-none"></div>
            {/* Avatar */}
            <div className="relative w-48 h-56 md:w-40 md:h-48 xl:w-52 xl:h-64 flex-shrink-0 z-10 flex flex-col items-center justify-center mt-4 md:mt-0 xl:ml-6 group">

                <div className="w-full h-full bg-gradient-to-b from-[#5AA4F3] via-[#6591EF] to-[#A09CED] rounded-[3rem] xl:rounded-[3.5rem] rounded-tl-[100px] xl:rounded-tl-[120px] rounded-br-[100px] xl:rounded-br-[120px] rounded-tr-3xl rounded-bl-3xl overflow-hidden flex items-end justify-center relative shadow-[0_10px_35px_rgba(90,164,243,0.3)] transition-all duration-500 ease-out group-hover:rounded-[3rem] group-hover:shadow-[0_15px_40px_rgba(90,164,243,0.5)] group-hover:-translate-y-2 cursor-pointer">
                    <img
                        src="https://i.pravatar.cc/250?img=12"
                        alt="Student Avatar"
                        className="w-[98%] h-[98%] object-cover object-top mix-blend-luminosity opacity-80 mb-[-10px] transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>

                <div className="absolute -bottom-4 bg-white px-5 md:px-4 xl:px-6 py-2 rounded-full shadow-lg text-xs xl:text-sm font-bold text-[#112F4E] z-20 border border-gray-50 transition-all duration-500 ease-out group-hover:-translate-y-2">
                    Level 12
                </div>
            </div>

            {/* Daily Tasks Stats */}
            <div className="flex-1 w-full flex justify-center items-center z-10 py-6 md:py-0">
                <div className="relative w-72 h-72 scale-90 md:scale-75 lg:scale-95 xl:scale-100 origin-center md:-ml-8 lg:-ml-4 xl:ml-0">

                    {/* Quesions Solved */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 group z-10 cursor-pointer">
                        <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#5e8da6]/60 to-[#F4F9FF]/30 backdrop-blur-sm flex flex-col items-center justify-center transition-transform duration-700 ease-in-out group-hover:-translate-y-3 group-hover:-translate-x-1 group-hover:scale-105 border border-white/40">
                            <span className="text-[2.5rem] font-black text-[#112F4E] leading-none mb-1">42Q</span>
                            <span className="text-[11px] font-extrabold text-[#7e8499] uppercase tracking-widest mt-1">Solved</span>
                        </div>
                    </div>

                    {/* Sleep Tracker */}
                    <div className="absolute left-2 bottom-6 group z-20 cursor-pointer">
                        <div className="absolute inset-0 bg-[#A5C9ED] rounded-full blur-xl opacity-80 group-hover:blur-2xl transition-all duration-700"></div>
                        <div className="relative w-[130px] h-[130px] rounded-full bg-gradient-to-br from-[#A5C9ED]/90 to-[#C0DDF5]/90 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-700 ease-in-out group-hover:-translate-y-3 group-hover:translate-x-1 group-hover:scale-105 border border-white/50 delay-75">
                            <span className="text-3xl font-black text-[#112F4E] leading-none mb-1">7.2<span className="text-xl">h</span></span>
                            <span className="text-[10px] font-extrabold text-[#112F4E]/60 uppercase tracking-widest mt-1">Sleep</span>
                        </div>
                    </div>

                    {/* Study Tracker */}
                    <div className="absolute left-8 top-10 group z-30 cursor-pointer">
                        <div className="absolute inset-0 bg-[#112F4E] rounded-full blur-lg opacity-60 group-hover:blur-xl transition-all duration-700"></div>
                        <div className="relative w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#112F4E] to-[#1E4369] shadow-inner flex flex-col items-center justify-center transition-transform duration-700 ease-in-out group-hover:-translate-y-4 group-hover:-translate-x-1 group-hover:scale-110 border border-white/20 delay-150">
                            <span className="text-xl font-black text-white leading-none mb-1">4.5<span className="text-sm">h</span></span>
                            <span className="text-[9px] font-extrabold text-white/60 uppercase tracking-widest mt-1">Study</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
