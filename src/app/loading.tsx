import Image from "next/image";

export default function Loading() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[3rem] h-[3rem] animate-spin-slow">
                <Image
                    src="/home.png"
                    alt="home"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-center block"
                />
            </div>
        </div>
    );
}
