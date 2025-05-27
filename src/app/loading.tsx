import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex items-center justify-center">
            
                <Image src="/home.png" fill alt="home" className="w-[5rem] h-[5rem] object-cover object-center block animate-spin transition-transform duration-5000"/>
            
        </div>
    );
}