import Image from "next/image";
import { projectData2 } from "../../../../utils/projectData2";
import BackButton from "../../components/BackButton";

export default async function Detail({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const resolvedParams = await params;
    const name = projectData2[resolvedParams.name as keyof typeof projectData2];

    const info = ["기간", "주요 기능", "주요 기술", "기여도", "URL"];

    return (
        <div className="flex flex-col justify-center items-start gap-10 p-10 py-15">
            <BackButton />

            <div className="text-3xl font-bold uppercase whitespace-pre">
                {name?.title}
            </div>

            <div className="w-full bg-[#24334d] rounded-3xl p-5 text-lg font-normal whitespace-pre-line leading-11 text-gray-400">
                {name?.description}
            </div>

            <div className="text-2xl font-bold">주요 정보 및 링크 정보</div>

            <div className="bg-[#2e3f5d] rounded-3xl w-full p-5 text-gray-300">
                <div className="w-full flex flex-col gap-4">
                    {info.map((label, index) => (
                        <div
                            key={index}
                            className="flex flex-row justify-center items-center"
                        >
                            <div className="w-1/10 text-xl font-semibold whitespace-pre">
                                {label}
                            </div>
                            <div className="w-9/10 text-lg font-normal pt-2">
                                {index === 0
                                    ? name.date
                                    : index === 1
                                    ? name.function
                                    : index === 2
                                    ? name.skill
                                    : index === 3
                                    ? name.contribution
                                    : index === 4
                                    ? name.url
                                    : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-2xl font-bold">시연 영상</div>

            <div className="w-1/2 bg-[#24334d] rounded-3xl p-5 text-lg font-normal whitespace-pre-line leading-11 text-gray-400">
                {name?.sample ? (
                    name.sample.endsWith(".mp4") ? (
                        <video
                            src={name.sample}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full rounded-xl"
                        />
                    ) : (
                        <Image
                            src={name.sample}
                            alt="시연 이미지"
                            width={800}
                            height={450}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    )
                ) : (
                    "시연 영상이 없습니다."
                )}
            </div>
        </div>
    );
}

// ✅ 여기는 string으로 처리 (Next.js의 타입 시스템에 맞춤)
export async function generateStaticParams(): Promise<{ name: string }[]> {
    return Object.keys(projectData2).map((key) => ({ name: key }));
}
