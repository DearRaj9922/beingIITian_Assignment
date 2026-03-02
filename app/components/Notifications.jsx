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
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#D1E4F8] h-full flex flex-col transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <Bell size={20} className="text-gray-800" />
                    <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
                </div>
                <div className="bg-[#5D5FEF] text-white text-xs font-bold px-2 py-1 rounded-full">
                    2 New
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
                {notifications.map((n) => (
                    <div key={n.id} className="flex gap-4 p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors cursor-pointer group">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110 ${n.bg}`}>
                            {n.icon}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-gray-800">{n.title}</h4>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{n.desc}</p>
                            <span className="text-[10px] font-semibold text-gray-400 mt-1 block">{n.time}</span>
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
