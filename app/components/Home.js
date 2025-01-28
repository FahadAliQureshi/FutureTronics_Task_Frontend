'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter();
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/login');
    } else {
      setIsTokenChecked(true);
    }
  }, [router]);

  const logout = () => {
    Cookies.remove('token');
    localStorage.removeItem('access_token');
    router.push('/login');
  };

  if (!isTokenChecked) {
    return null;
  }

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">Welcome to the Home Page</h1>
        <p className="text-center text-gray-600 mb-6">You are successfully logged in!</p>
        <button
          onClick={logout}
          className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
