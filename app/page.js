import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Onboarding() {
  const cookieStore = await cookies();
  if (cookieStore.get('studentData')) {
    redirect('/dashboard');
  }

  async function createProfile(formData) {
    'use server';
    const data = {
      name: formData.get('name') || '',
      title: formData.get('title') || '',
      university: formData.get('university') || '',
      cgpa: formData.get('cgpa') || '',
      location: formData.get('location') || ''
    };

    const cookieStore = await cookies();
    cookieStore.set('studentData', JSON.stringify(data), { secure: true });
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-[#F0F5FA] font-sans flex items-center justify-center p-4">
      <div className="bg-white rounded-[2rem] p-6 md:px-8 md:py-8 shadow-sm border border-[#D1E4F8] w-full max-w-md relative overflow-hidden">

        <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#A5C9ED] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#D1E4F8] opacity-30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black text-[#112F4E] tracking-tight mb-1">Welcome!</h1>
            <p className="text-gray-500 text-xs font-medium px-2">Let's set up your profile and personalize your dashboard.</p>
          </div>

          <form action={createProfile} className="space-y-3.5">
            <div>
              <label htmlFor="name" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Enter your name" className="w-full bg-[#FAFCFF] border border-[#D1E4F8] text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent transition-all placeholder:text-gray-400" />
            </div>

            <div>
              <label htmlFor="title" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">Degree Title</label>
              <input type="text" id="title" name="title" required placeholder="Enter your degree title" className="w-full bg-[#FAFCFF] border border-[#D1E4F8] text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent transition-all placeholder:text-gray-400" />
            </div>

            <div>
              <label htmlFor="university" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">University</label>
              <input type="text" id="university" name="university" required placeholder="Enter your university name" className="w-full bg-[#FAFCFF] border border-[#D1E4F8] text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent transition-all placeholder:text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="cgpa" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">CGPA / GPA</label>
                <input type="text" id="cgpa" name="cgpa" required placeholder="Enter your CGPA" className="w-full bg-[#FAFCFF] border border-[#D1E4F8] text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent transition-all placeholder:text-gray-400" />
              </div>

              <div>
                <label htmlFor="location" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">Location</label>
                <input type="text" id="location" name="location" required placeholder="Enter your location" className="w-full bg-[#FAFCFF] border border-[#D1E4F8] text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent transition-all placeholder:text-gray-400" />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#5D5FEF] hover:bg-[#4b4cd1] text-white py-3 rounded-2xl font-bold text-sm shadow-md shadow-[#5D5FEF]/30 transition-all active:scale-[0.98] mt-4">
              Go to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
