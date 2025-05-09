import { projectData } from "../../../../utils/projectData";
import BackButton from "../../components/BackButton";

type DetailProps = {
    params: {
        name: keyof typeof projectData;
    };
};

export default async function Detail(props: DetailProps) {
    // 데이터와 url params 변수에 넣기
    const name = projectData[props?.params?.name];
    // 주요 정보 arr]
    const info = ["기간", "주요 기능", "주요 기술", "기여도", "URL"];
    // 라우터


    return (
        <div className="flex flex-col justify-center items-start gap-10 p-10 pt-15">
            
            <BackButton/>

            {/* 프로젝트 이름 */}
            <div className="text-3xl font-bold uppercase whitespace-pre">{name?.title}</div>

            {/* 프로젝트 설명 */}
            <div className="w-full bg-[#24334d] rounded-3xl p-5 text-lg font-normal whitespace-pre-line leading-11 text-gray-400">{name?.description}</div>

            <div className="text-2xl font-bold">주요 정보 및 링크 정보</div>

            {/* 프로젝트 정보 */}
            <div className="bg-[#2e3f5d] rounded-3xl w-full p-5 text-gray-300">
                <div className="w-full flex flex-col gap-4">
                    {info.map((a, i) => {
                        return (
                            <div key={i} className="flex flex-row justify-center items-center">
                                <div className="w-1/10 text-xl font-semibold whitespace-pre">
                                    {a}
                                </div>
                                <div className="w-9/10 text-lg font-normal pt-2">
                                    {i === 0
                                        ? name.date
                                        : i === 1
                                        ? name.function
                                        : i === 2
                                        ? name.skill
                                        : i === 3
                                        ? name.contribution
                                        : i === 4
                                        ? name.url
                                        : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
