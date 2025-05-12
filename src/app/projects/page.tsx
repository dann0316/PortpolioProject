"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// // personal array
// const personal = [
//     "myplanner",
//     "shoes shop",
//     "write anyting",
//     "portpolio",
//     "youtube analyzer",
// ];

// // work array
// const work = ["raum", "yunli", "muaga", "teum", "mtsn"];

export default function Projects() {
    const [mainTab, setMainTab] = useState(0); // 왼쪽 PERSONAL/WORK 탭
    // const [filterTab, setFilterTab] = useState(0); // 오른쪽 Wordpress / Cafe24 탭
    // project
    const projects = "projects";

    const text = `Project 페이지에는 개인 프로젝트와 외주를 받아 진행한 프로젝트의 결과가 담겨 있습니다. 이 과정에서 구현한 기능들을 통해 저의 기술 스택과 문제 해결 능력을 깊이 있게 확인하실 수 있습니다. (고민했던 점, 해결 방법, 관련 공부 기록)`;

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 1.2 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1.0,
            transition: {
                type: "spring",
                stiffness: 1000,
                damping: 10,
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    // container variants
    const container2 = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.02,
            },
        },
    };

    const yOffsets = Array(text.length).fill(-40);

    // const yOffsets = useMemo(
    //     () => text.split("").map(() => -30 - Math.random() * 50),
    //     [text]
    // );
    
    // 각 문자 variants
    // const letter = {
    //     hidden: () => ({
    //         y: -30 - Math.random() * 50,
    //         opacity: 0,
    //     }),
    //     visible: {
    //         y: 0,
    //         opacity: 1,
    //         transition: {
    //             type: "spring",
    //             stiffness: 500,
    //             damping: 30,
    //         },
    //     },
    // };

    return (
        <div className="w-screen h-screen flex">
            {/* 소개 */}
            <div className="w-1/2 overflow-hidden flex flex-col justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-1/2 flex flex-col justify-center items-start gap-5">
                        <div className="tag-font">&lt;h2&gt;</div>
                        <div className="text-7xl font-extrabold uppercase">
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                className="inline-flex whitespace-nowrap"
                            >
                                {projects.split("").map((char, j) => (
                                    <motion.div
                                        key={j}
                                        variants={item}
                                        whileHover={{
                                            scaleY: 1.2,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                            },
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="tag-font">&lt;/h2&gt;</div>

                        <div className="tag-font">&lt;p&gt;</div>

                        <motion.div
                            variants={container2}
                            initial="hidden"
                            animate="visible"
                            className="leading-10 whitespace-pre-wrap"
                        >
                            {text.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: {
                                            y: yOffsets[index],
                                            opacity: 0,
                                        },
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                            },
                                        },
                                    }}
                                    className="inline-block"
                                    custom={index}
                                >
                                    {char === "\n" ? <br /> : char}
                                </motion.span>
                            ))}
                        </motion.div>

                        <div className="tag-font">&lt;/p&gt;</div>

                        {/* 탭 버튼 */}
                        <div className="flex gap-5">
                            {["PERSONAL", "WORK"].map((a, i) => (
                                <button
                                    key={i}
                                    onClick={() => setMainTab(i)}
                                    className={`cursor-pointer font-semibold px-4 py-3 border rounded transition-all duration-300
                                    ${
                                        mainTab === i
                                            ? "bg-[#FFF1D5] text-[#1E293B]"
                                            : "hover:bg-[#FFF1D5] hover:text-[#1E293B]"
                                    }
                                `}
                                >
                                    {a}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 탭 콘텐츠 */}
            <div className="w-1/2 h-auto overflow-y-auto flex flex-col justify-start items-center">
                <TabContent mainTab={mainTab} />
            </div>
        </div>
    );
}

function TabContent({ mainTab }: { mainTab: number }) {
    const [filterTab, setFilterTab] = useState(0);

    // work 필터용
    const wordpressItems = ["raum", "teum", "mtsn"];
    const cafe24Items = ["yunli", "muaga"];
    const workItems = filterTab === 0 ? wordpressItems : cafe24Items;

    // personal 필터용
    const reactItems = ["myplanner.mp4", "shoeshop.mp4", "youtubeanalyzer.png"];
    const nextItems = ["writeanything.mp4", "portpolio.png"];
    const personalItems = filterTab === 0 ? reactItems : nextItems;

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {/* personal */}
            {mainTab === 0 ? (
                <div>
                    {/* personal 필터 버튼 */}
                    <div className="flex flex-row items-center justify-center p-10 gap-5">
                        {["react", "next"].map((a, i) => (
                            <button
                                key={a}
                                onClick={() => setFilterTab(i)}
                                className={`transition-all duration-300 cursor-pointer font-semibold uppercase py-1 ${
                                    filterTab === i
                                        ? "border-b-2"
                                        : "hover:border-b"
                                }`}
                            >
                                {a}
                            </button>
                        ))}
                    </div>
                    {personalItems.map((name) => {
                        const isVideo = name.endsWith(".mp4");
                        const fileName = name.replace(/\.(png|mp4)$/, ""); // 확장자 제거

                        return (
                            <Link
                                key={name}
                                href={`/detail2/${fileName}`}
                                className="flex-cell group"
                            >
                                {isVideo ? (
                                    <video
                                        src={`/personal/${name}`}
                                        className="cell-img"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                ) : (
                                    <Image
                                        fill
                                        src={`/personal/${name}`}
                                        alt={fileName}
                                        className="cell-img"
                                    />
                                )}
                                <div className="cell-des">{fileName}</div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div>
                    {/* work 필터 버튼 */}
                    <div className="flex flex-row items-center justify-center p-10 gap-5">
                        {["wordpress", "cafe24"].map((a, i) => (
                            <button
                                key={a}
                                onClick={() => setFilterTab(i)}
                                className={`transition-all duration-300 cursor-pointer font-semibold uppercase py-1 ${
                                    filterTab === i
                                        ? "border-b-2"
                                        : "hover:border-b"
                                }`}
                            >
                                {a}
                            </button>
                        ))}
                    </div>
                    {workItems.map((name) => (
                        <Link
                            key={name}
                            href={`/detail/${name}`}
                            className="flex-cell group"
                        >
                            <Image
                                fill
                                src={`/company/${name}.png`}
                                alt={name}
                                className="cell-img"
                            />
                            <div className="cell-des">{name}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
