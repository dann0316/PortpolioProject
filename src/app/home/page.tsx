"use client";

import { motion } from "framer-motion";
import {  useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Polyhedron() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        // 마우스 위치 비율 (-1 ~ 1)
        const x = (state.pointer.x * Math.PI) / 4;
        const y = (state.pointer.y * Math.PI) / 4;
        meshRef.current.rotation.x = y;
        meshRef.current.rotation.y = x;
    });

    return (
        <mesh ref={meshRef}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#ffaa00" wireframe />
        </mesh>
    );
}

export default function Home() {
    // const words = [
    //     "Clean UI",
    //     "Friendly UX",
    //     "Growing SKills",
    //     "Steady Effort",
    // ];

    // 처음 인사 string
    const home = "hello, world";

    //
    // const become1 = ["creative", "growing", "striving", "diligent"];
    // const become2 = ["programmer", "dreamer", "innovator", "builder"];
    // const [index, setIndex] = useState(0);

    const text =
        "안녕하세요. 프론트엔드 개발자 정다니엘입니다.\n저의 포트폴리오 홈페이지에 와주셔서 감사합니다.";

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

    // yoffest 미리 계산
    const yOffsets = Array(text.length).fill(-40);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIndex((prev) => (prev + 1) % become1.length);
    //     }, 2000); // 2초마다 변경

    //     return () => clearTimeout(timer);
    // }, [index, become1.length]);

    return (
        <div className="w-screen h-screen flex flex-col lg:flex-row">
            {/* 텍스트 영역 */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-10">
                <div className="w-full max-w-xl flex flex-col gap-5">
                    <div className="tag-font">&lt;h2&gt;</div>
                    <div className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex whitespace-nowrap"
                        >
                            {home.split("").map((char, j) => (
                                <motion.div
                                    key={j}
                                    variants={item}
                                    whileHover={{ scaleY: 1.2 }}
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
                        className="leading-8 sm:leading-10 whitespace-pre-wrap text-sm sm:text-base"
                    >
                        {text.split("\n").map((line, i) => (
                            <div key={i}>
                                {line.split("").map((char, j) => (
                                    <motion.span
                                        key={`${i}-${j}`}
                                        variants={{
                                            hidden: {
                                                y: yOffsets[i + j],
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
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                    <div className="tag-font">&lt;/p&gt;</div>
                </div>
            </div>

            {/* 소개2 */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-10">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <Polyhedron />
                    <OrbitControls enableZoom={false} />
                </Canvas>
                {/* <div className="font-bold text-3xl uppercase">
                    I&apos;m trying to become a...
                </div>
                <div className="w-20 h-1 bg-white"></div>
                <div className="w-full flex flex-row gap-5">
                    <div className="w-1/2 flex justify-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    rotateX: -90,
                                }}
                                animate={{ opacity: 1, rotateX: 0 }}
                                exit={{ opacity: 0, rotateX: 90 }}
                                transition={{ duration: 1 }}
                                className="absolute text-3xl font-bold uppercase origin-bottom"
                            >
                                {become1[index]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="w-1/2 flex justify-start">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={become2[index]}
                                initial={{
                                    opacity: 0,
                                    rotateX: -90,
                                }}
                                animate={{ opacity: 1, rotateX: 0 }}
                                exit={{ opacity: 0, rotateX: 90 }}
                                transition={{ duration: 2.3 }}
                                className="absolute text-4xl font-bold uppercase origin-bottom"
                            >
                                {become2[index]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
