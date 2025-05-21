import { projectData } from "../../../../utils/projectData";
import BackButton from "../../components/BackButton";

export default async function Detail({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const resolvedParams = await params;
    const name = projectData[resolvedParams.name as keyof typeof projectData];

    const info = [
        "기간",
        "주요 기능",
        "주요 기술",
        "고민 및 문제",
        "해결 방법",
        "기여도",
        "URL",
    ];

    return (
        <div className="flex flex-col justify-center items-start gap-10 px-4 pt-15 pb-20 sm:px-8 md:px-12 lg:px-20 xl:px-40 max-w-screen-xl mx-auto">
            <BackButton />

            {/* 제목 */}
            <div className="text-2xl sm:text-3xl font-bold uppercase whitespace-pre flex flex-col gap-2">
                <div className="tag-font text-lg! text-gray-400!">&lt;h2&gt;</div>
                {name?.title}
                <div className="tag-font text-lg! text-gray-400!">&lt;/h2&gt;</div>
            </div>

            {/* 설명 */}
            <div className="w-full bg-[#24334d] rounded-3xl p-5 leading-7 sm:leading-9 text-gray-300 text-sm sm:text-lg font-normal col-span-4 whitespace-pre-line">
                <div className="tag-font">&lt;p&gt;</div>
                {name?.description}
                <div className="tag-font">&lt;/p&gt;</div>
            </div>

            {/* 정보 라벨 */}
            <div className="text-xl sm:text-2xl font-bold mt-4 flex flex-col gap-2">
                <div className="tag-font text-lg! text-gray-400!">&lt;h2&gt;</div>
                주요 정보 및 링크 정보
                <div className="tag-font text-lg! text-gray-400!">&lt;/h2&gt;</div>
            </div>

            <div className="bg-[#2e3f5d] rounded-3xl w-full p-5 text-gray-300">
                <div className="w-full flex flex-col gap-4.5">
                    {info.map((label, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-4 items-start"
                        >
                            <div className="text-base sm:text-xl font-semibold col-span-1">
                                {label}
                            </div>
                            <div className="text-sm sm:text-lg font-normal col-span-4 whitespace-pre-line">
                                {index === 0 ? (
                                    name.date
                                ) : index === 1 ? (
                                    name.function
                                ) : index === 2 ? (
                                    name.skill
                                ) : index === 3 ? (
                                    name.problem
                                ) : index === 4 ? (
                                    name.solve
                                ) : index === 5 ? (
                                    name.contribution
                                ) : index === 6 ? (
                                    <a
                                        href={name.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-300 underline break-all"
                                    >
                                        {name.url}
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams(): Promise<{ name: string }[]> {
    return Object.keys(projectData).map((key) => ({ name: key }));
}
