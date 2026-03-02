import AvatarStats from "../components/AvatarStats";
import ProfileCard from "../components/ProfileCard";
import StreakCalendar from "../components/StreakCalendar";
import Notifications from "../components/Notifications";
import Sidebar from "../components/Sidebar";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
    const cookieStore = await cookies();
    const studentDataCookie = cookieStore.get('studentData');

    if (!studentDataCookie) {
        redirect('/');
    }

    return (
        <div className="min-h-screen bg-[#F0F5FA] font-sans flex pb-20 md:pb-0">
            <Sidebar />
            <div className="flex-1 p-4 md:p-8 md:ml-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-6">

                    <header className="mb-2">
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Student Dashboard</h1>
                        <p className="text-gray-500 font-medium mt-1 text-sm">Welcome back! Here's your academic progress overview.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Top Row */}
                        <div className="md:col-span-2 flex flex-col min-h-[400px] md:h-[400px]">
                            <AvatarStats />
                        </div>
                        <div className="md:col-span-1 flex flex-col min-h-[400px] md:h-[400px]">
                            <ProfileCard studentData={JSON.parse(studentDataCookie.value)} />
                        </div>

                        {/* Bottom Row */}
                        <div className="md:col-span-2 flex flex-col min-h-[400px] md:h-[400px]">
                            <StreakCalendar />
                        </div>
                        <div className="md:col-span-1 flex flex-col min-h-[400px] md:h-[400px]">
                            <Notifications />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
