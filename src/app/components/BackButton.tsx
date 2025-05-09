'use client';

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();
    return (
        <button onClick={() => router.back()} className="cursor-pointer flex flex-row justify-center items-center text-xl font-bold">
            ← 뒤로가기
        </button>
    );
}