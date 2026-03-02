import { Mail, Book, MapPin, Award } from "lucide-react";
import Link from "next/link";

export default function ProfileCard({ studentData }) {
    const {
        name = 'Divya Raj',
        title = 'Computer Science Undergraduate',
        university = 'IIT ROORKEE',
        cgpa = 'CGPA: 8.4/10'
    } = studentData || {};

    return (
        <div className="bg-white rounded-3xl p-4 md:p-5 shadow-sm border border-[#D1E4F8] h-full flex flex-col relative overflow-hidden transition-all hover:shadow-md">
            {/* <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#A5C9ED] opacity-20 rounded-bl-full pointer-events-none"></div> */}

            {/* <h2 className="text-lg md:text-xl font-black text-gray-800 mb-2 md:mb-3 relative z-10 flex-shrink-0 ">Profile Card</h2> */}

            <div className="flex-1 flex flex-col items-center justify-center pt-1 pb-2 md:pb-3 relative z-10 min-h-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-[#D1E4F8] p-1 mb-2 md:mb-3 shadow-sm flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=33" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                <h3 className="text-xl md:text-xl font-bold text-gray-900 text-center flex-shrink-0">{name}</h3>
                <p className="text-[#5D5FEF] font-semibold text-xs mb-3 md:mb-4 text-center line-clamp-1 flex-shrink-0">{title}</p>

                <div className="w-full space-y-3 p-1">
                    <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600 bg-gray-50 p-2 md:p-3 rounded-2xl border border-gray-100">
                        <div className="bg-white p-1.5 md:p-2 rounded-xl shadow-sm shrink-0"><Book size={16} className="text-[#A5C9ED]" /></div>
                        <span className="font-medium truncate border-transparent hover:text-clip">{university}</span>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600 bg-gray-50 p-2 md:p-3 rounded-2xl border border-gray-100">
                        <div className="bg-white p-1.5 md:p-2 rounded-xl shadow-sm shrink-0"><Award size={16} className="text-[#D1E4F8]" /></div>
                        <span className="font-medium">{cgpa}</span>
                    </div>
                </div>
            </div>

            <Link href="/" className="w-full text-center bg-[#5D5FEF] hover:bg-[#4b4cd1] text-white py-2.5 md:py-3 rounded-2xl text-sm md:text-base font-bold shadow-md shadow-[#5D5FEF]/30 transition-all active:scale-[0.98] mt-2 flex-shrink-0 block">
                Edit Profile
            </Link>
        </div>
    );
}
