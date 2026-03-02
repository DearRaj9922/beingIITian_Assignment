import { Calendar } from "lucide-react";

export default function StreakCalendar() {
    const weeks = 52;
    const daysInWeek = 7;

    const generateActivityLevel = () => {
        const rand = Math.random();
        if (rand > 0.85) return "bg-[#5D5FEF]";
        if (rand > 0.6) return "bg-[#A5C9ED]";
        if (rand > 0.3) return "bg-[#D1E4F8]";
        return "bg-gray-100";
    };

    const heatmapData = Array.from({ length: daysInWeek }).map(() =>
        Array.from({ length: weeks }).map(generateActivityLevel)
    );

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#D1E4F8] h-full flex flex-col transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#D1E4F8] rounded-xl text-[#5D5FEF]">
                        <Calendar size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">Streak Calendar</h2>
                </div>
                <div className="text-right">
                    <span className="block text-2xl font-black text-[#5D5FEF]">124 Days</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Current Streak</span>
                </div>
            </div>

            {/* Heatmap Container */}
            <div className="flex-1 w-full overflow-x-auto pb-4 scrollbar-hide">
                <div className="min-w-[800px] flex flex-col gap-1">
                    <div className="flex text-xs font-bold text-gray-400 mb-2 pl-6">
                        {months.map((m, i) => (
                            <div key={i} className="flex-1 min-w-[60px]">{m}</div>
                        ))}
                    </div>

                    <div className="flex gap-1">
                        {/* Day Labels */}
                        <div className="flex flex-col gap-1 pr-2 text-[10px] font-bold text-gray-400 mt-1">
                            <div className="h-3 flex items-center">Mon</div>
                            <div className="h-3 flex items-center"></div>
                            <div className="h-3 flex items-center">Wed</div>
                            <div className="h-3 flex items-center"></div>
                            <div className="h-3 flex items-center">Fri</div>
                            <div className="h-3 flex items-center"></div>
                            <div className="h-3 flex items-center">Sun</div>
                        </div>

                        {/* Squares */}
                        <div className="flex flex-col gap-1 flex-1">
                            {heatmapData.map((dayRow, i) => (
                                <div key={`row-${i}`} className="flex gap-1 w-full">
                                    {dayRow.map((colorClass, j) => (
                                        <div
                                            key={`cell-${i}-${j}`}
                                            className={`w-3 h-3 rounded-sm ${colorClass} hover:ring-2 hover:ring-[#A5C9ED] hover:scale-125 transition-transform cursor-pointer`}
                                            title="Activity level"
                                        ></div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 text-xs font-semibold text-gray-500">
                <span>Less</span>
                <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
                <div className="w-3 h-3 rounded-sm bg-[#D1E4F8]"></div>
                <div className="w-3 h-3 rounded-sm bg-[#A5C9ED]"></div>
                <div className="w-3 h-3 rounded-sm bg-[#5D5FEF]"></div>
                <span>More</span>
            </div>
        </div>
    );
}
