"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Sử dụng từ 'next/navigation' cho app directory

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Chuyển hướng sang trang đăng nhập
    router.push('/dashboard');
  }, [router]);

  return null; // Không cần render gì cả
};

export default Page;
