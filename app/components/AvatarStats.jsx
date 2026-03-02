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

            {/* Right: Daily Tasks Stats */}
            <div className="flex-1 w-full flex justify-center items-center z-10 py-6 md:py-0">

                <div className="relative w-64 h-64 scale-95 md:scale-75 lg:scale-90 xl:scale-110 origin-center md:-ml-8 lg:ml-0 xl:mr-8 xl:mt-4">

                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-[5px] border-[#5D5FEF] bg-white shadow-[0_0_25px_rgba(93,95,239,0.4)] flex flex-col items-center justify-center z-30 transition-transform hover:scale-105 cursor-pointer">
                        <span className="text-3xl font-black text-[#5D5FEF]">4.5<span className="text-xl">h</span></span>
                        <span className="text-[10px] font-extrabold text-[#7e8499] uppercase tracking-widest mt-1">Study</span>
                    </div>

                    <div className="absolute bottom-2 left-[-1rem] w-[115px] h-[115px] rounded-full border-[5px] border-[#A5C9ED] bg-white shadow-[0_0_20px_rgba(165,201,237,0.5)] flex flex-col items-center justify-center z-20 transition-transform hover:scale-105 cursor-pointer">
                        <span className="text-2xl font-black text-[#112F4E]">7.2<span className="text-lg">h</span></span>
                        <span className="text-[10px] font-extrabold text-[#7e8499] uppercase tracking-widest mt-1">Sleep</span>
                    </div>

                    <div className="absolute bottom-2 right-[-1rem] w-[115px] h-[115px] rounded-full border-[5px] border-[#D1E4F8] bg-white shadow-[0_0_20px_rgba(209,228,248,0.6)] flex flex-col items-center justify-center z-20 transition-transform hover:scale-105 cursor-pointer">
                        <span className="text-2xl font-black text-[#112F4E]">42</span>
                        <span className="text-[10px] font-extrabold text-[#7e8499] uppercase tracking-widest mt-1">Solved</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
