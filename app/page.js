'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get('name') || '';
    const title = formData.get('title') || '';
    const university = formData.get('university') || '';
    const cgpa = formData.get('cgpa') || '';
    const location = formData.get('location') || '';

    // Only letters and spaces allowed
    const textOnlyRegex = /^[a-zA-Z\s]+$/;
    // Only numbers and one optional decimal allowed
    const numberOnlyRegex = /^\d+(\.\d+)?$/;

    if (!name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (!textOnlyRegex.test(name)) {
      newErrors.name = "Name must only contain letters and spaces";
    }

    if (!title.trim()) {
      newErrors.title = "Degree Title is required";
    } else if (!textOnlyRegex.test(title)) {
      newErrors.title = "Degree must only contain letters and spaces";
    }

    if (!university.trim()) {
      newErrors.university = "University is required";
    } else if (!textOnlyRegex.test(university)) {
      newErrors.university = "University must only contain letters and spaces";
    }

    if (!cgpa.trim()) {
      newErrors.cgpa = "CGPA is required";
    } else if (!numberOnlyRegex.test(cgpa)) {
      newErrors.cgpa = "CGPA must be a valid number (e.g., 8.4)";
    }

    if (!location.trim()) {
      newErrors.location = "Location is required";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Validate
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }


    setErrors({});

    const data = {
      name: formData.get('name'),
      title: formData.get('title'),
      university: formData.get('university'),
      cgpa: `CGPA: ${formData.get('cgpa')}/10`,
      location: formData.get('location')
    };

    document.cookie = `studentData=${encodeURIComponent(JSON.stringify(data))}; path=/; max-age=31536000; SameSite=Strict`;

    router.push('/dashboard');
  };

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


          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            <div>
              <label htmlFor="name" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">Full Name</label>
              <input type="text" id="name" name="name" onChange={handleInputChange} placeholder="Enter your name" className={`w-full bg-[#FAFCFF] border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-[#D1E4F8] focus:ring-[#5D5FEF]'} text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-gray-400`} />
              {errors.name && <p className="text-[10px] text-red-500 font-bold mt-1 ml-2">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="title" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">Degree Title</label>
              <input type="text" id="title" name="title" onChange={handleInputChange} placeholder="Enter your degree title" className={`w-full bg-[#FAFCFF] border ${errors.title ? 'border-red-400 focus:ring-red-400' : 'border-[#D1E4F8] focus:ring-[#5D5FEF]'} text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-gray-400`} />
              {errors.title && <p className="text-[10px] text-red-500 font-bold mt-1 ml-2">{errors.title}</p>}
            </div>

            <div>
              <label htmlFor="university" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">University</label>
              <input type="text" id="university" name="university" onChange={handleInputChange} placeholder="Enter your university name" className={`w-full bg-[#FAFCFF] border ${errors.university ? 'border-red-400 focus:ring-red-400' : 'border-[#D1E4F8] focus:ring-[#5D5FEF]'} text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-gray-400`} />
              {errors.university && <p className="text-[10px] text-red-500 font-bold mt-1 ml-2">{errors.university}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="cgpa" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">CGPA / GPA</label>
                <input type="text" id="cgpa" name="cgpa" onChange={handleInputChange} placeholder="e.g. 8.4" className={`w-full bg-[#FAFCFF] border ${errors.cgpa ? 'border-red-400 focus:ring-red-400' : 'border-[#D1E4F8] focus:ring-[#5D5FEF]'} text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-gray-400`} />
                {errors.cgpa && <p className="text-[10px] text-red-500 font-bold mt-1 ml-2">{errors.cgpa}</p>}
              </div>

              <div>
                <label htmlFor="location" className="block text-[11px] font-bold text-[#112F4E] uppercase tracking-wider mb-1 ml-1">Location</label>
                <input type="text" id="location" name="location" onChange={handleInputChange} placeholder="Enter your location" className={`w-full bg-[#FAFCFF] border ${errors.location ? 'border-red-400 focus:ring-red-400' : 'border-[#D1E4F8] focus:ring-[#5D5FEF]'} text-[#112F4E] font-medium text-sm rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-gray-400`} />
                {errors.location && <p className="text-[10px] text-red-500 font-bold mt-1 ml-2">{errors.location}</p>}
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
