import { Bell, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";

export default function Notifications() {
    const notifications = [
        {
            id: 1,
            title: "Assignment Graded",
            desc: "Data Structures Ex. 4 scored 95/100",
            time: "10m ago",
            icon: <CheckCircle2 size={18} className="text-white" />,
            bg: "bg-[#5D5FEF]"
        },
        {
            id: 2,
            title: "New Message",
            desc: "Prof. Smith replied to your query.",
            time: "2h ago",
            icon: <MessageSquare size={18} className="text-[#5D5FEF]" />,
            bg: "bg-[#D1E4F8]"
        },
        {
            id: 3,
            title: "System Update",
            desc: "Scheduled maintenance tomorrow.",
            time: "1d ago",
            icon: <AlertCircle size={18} className="text-[#5D5FEF]" />,
            bg: "bg-[#A5C9ED]"
        },
        {
            id: 4,
            title: "Course Unlocked",
            desc: "Advanced Algorithms is now open.",
            time: "2d ago",
            icon: <CheckCircle2 size={18} className="text-gray-500" />,
            bg: "bg-gray-100"
        }
    ];

    return (
        <div className="bg-white rounded-[2rem] p-6 md:p-4 xl:p-6 shadow-sm border border-[#D1E4F8] h-full flex flex-col transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-6 md:mb-3 lg:mb-4 xl:mb-6 gap-2">
                <div className="flex items-center gap-2 md:gap-1 lg:gap-2 min-w-0">
                    <Bell size={20} className="text-[#112F4E] md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 flex-shrink-0" />
                    <h2 className="text-xl md:text-[15px] lg:text-lg xl:text-xl font-black text-[#112F4E] tracking-tight truncate">Notifications</h2>
                </div>
                <div className="bg-[#5D5FEF] text-white text-xs md:text-[9px] lg:text-[10px] xl:text-xs font-bold px-3 py-1 md:px-1.5 md:py-0.5 lg:px-2 lg:py-0.5 xl:px-3 xl:py-1 rounded-full shadow-sm flex-shrink-0">
                    2 New
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 md:gap-2 xl:gap-4 overflow-y-auto pr-2 scrollbar-hide">
                {notifications.map((n) => (
                    <div key={n.id} className="flex gap-4 md:gap-2 xl:gap-4 p-3 md:p-2 xl:p-3 rounded-2xl hover:bg-[#FAFCFF] border border-transparent hover:border-[#D1E4F8]/50 transition-colors cursor-pointer group">
                        <div className={`w-12 h-12 md:w-8 md:h-8 xl:w-12 xl:h-12 rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform ${n.bg}`}>
                            {n.icon}
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <h4 className="text-sm md:text-xs xl:text-sm font-bold text-[#112F4E] leading-tight mb-0.5">{n.title}</h4>
                            <p className="text-xs md:text-[10px] xl:text-xs font-medium text-gray-400 mt-0.5 md:mt-0 xl:mt-0.5 line-clamp-1">{n.desc}</p>
                            <span className="text-[10px] md:text-[9px] xl:text-[10px] font-extrabold text-[#7e8499] uppercase tracking-wider mt-1.5 md:mt-1 xl:mt-1.5 block">{n.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-4 text-sm font-bold text-[#5D5FEF] hover:text-[#4b4cd1] transition-colors py-2 rounded-xl hover:bg-[#D1E4F8]/30">
                Mark all as read
            </button>
        </div>
    );
}
