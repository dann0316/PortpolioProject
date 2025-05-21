'use client';

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();
    return (
        <button onClick={() => router.back()} className="cursor-pointer flex flex-row justify-center items-center text-xl font-bold border border-transparent transition-all duration-300 hover:border hover:border-[#ededed] rounded-4xl py-3 px-4">
            ← 뒤로가기
        </button>
    );
}