'use client'

import Link from "next/link";

export default function Menu() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/">Project</Link>
            <Link href="/">About</Link>
        </div>
    )
}