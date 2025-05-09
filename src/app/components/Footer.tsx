import Link from "next/link";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full h-[2rem] flex justify-between items-center px-6 bg-transparent border-t text-sm text-gray-500">
            <span>© 2025 Daniel Jung. All rights reserved.</span>
            <span className="flex gap-4">
                <Link
                    href="https://github.com/dann0316"
                    target="_blank"
                    className="hover:underline"
                >
                    GitHub
                </Link>
            </span>
        </footer>
    );
}
