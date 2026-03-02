import { Home, BookOpen, Calendar, PieChart, Bell, Settings, LogOut } from "lucide-react";
import clsx from "clsx";

const SidebarItem = ({ icon: Icon, active, className }) => {
    return (
        <div
            className={clsx(
                "p-3 rounded-2xl cursor-pointer transition-all duration-300",
                active
                    ? "bg-[#5D5FEF] text-white shadow-md"
                    : "text-gray-400 hover:bg-[#D1E4F8] hover:text-[#5D5FEF]",
                className
            )}
        >
            <Icon size={20} strokeWidth={active ? 2.5 : 2} />
        </div>
    );
};

export default function Sidebar() {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="w-20 bg-white h-full fixed left-0 top-0 hidden md:flex flex-col items-center py-8 shadow-sm border-r border-[#D1E4F8] z-50 rounded-tr-3xl rounded-br-3xl">
                <div className="mb-10 text-center">
                    <div className="w-10 h-10 mx-auto bg-[#A5C9ED] rounded-xl flex items-center justify-center text-white text-lg font-black shadow-inner shadow-white/50 mb-1">
                        S
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-6 w-full items-center mt-4">
                    <SidebarItem icon={Home} active />
                    <SidebarItem icon={BookOpen} />
                    <SidebarItem icon={PieChart} />
                    <SidebarItem icon={Calendar} />

                    <div className="w-8 h-[2px] bg-[#D1E4F8] rounded-full my-2"></div>

                    <SidebarItem icon={Bell} className="relative" />
                    <SidebarItem icon={Settings} />
                </div>

                <div className="mt-auto pt-6 flex flex-col gap-6 items-center">
                    <SidebarItem icon={LogOut} className="rotate-180 text-red-400 hover:bg-red-50 hover:text-red-500" />
                    <div className="w-10 h-10 rounded-full border-2 border-[#A5C9ED] p-0.5 shadow-sm">
                        <img
                            src="https://i.pravatar.cc/150?img=33"
                            alt="User Profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>
            </aside>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-[#D1E4F8] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 md:hidden px-6 py-3 flex justify-between items-center rounded-tl-3xl rounded-tr-3xl">
                <SidebarItem icon={Home} active className="p-2" />
                <SidebarItem icon={BookOpen} className="p-2" />
                <SidebarItem icon={Calendar} className="p-2" />
                <SidebarItem icon={Bell} className="p-2" />
                <div className="w-8 h-8 rounded-full border-2 border-[#A5C9ED] p-0.5 shadow-sm">
                    <img
                        src="https://i.pravatar.cc/150?img=33"
                        alt="User Profile"
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
            </nav>
        </>
    );
}
