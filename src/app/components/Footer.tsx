import Link from "next/link";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full flex flex-col bg-transparent">

            <div className="absolute bottom-[2.5rem] tag-font">
                        &lt;/body&gt;
            </div>

            <div className="h-[2.5rem] border-t text-sm text-gray-500 flex justify-between items-center  px-6">
                <span>© 2025 Daniel Jung. All rights reserved.</span>
                <span className="absolute left-[46%]">
                    <Link
                        href="https://github.com/dann0316"
                        target="_blank"
                        className="hover:text-white transition-all duration-300 text-lg"
                    >
                        GitHub
                    </Link>
                </span>
            </div>

        </footer>
    );
}
