"use client";

import { motion } from "framer-motion";

console.log(motion);

export default function Home() {
  const words = ["Clean UI", "Friendly UX", "Growing SKills", "Steady Effort"];
  // const text: string = "I'm Dainel";

  return (
    <div className="w-full h-auto px-50">
      <main className="w-full h-auto">

        {/* section 1 */}
        <section className="section-shared">
          {words.map((a, i) => {
            return (
              <div
                key={i}
                className={`text-9xl font-bold border px-20 py-5 flex uppercase whitespace-pre justify-items-center items-center ${
                  i % 2 === 0 ? "self-start" : "self-end"
                }`}
              >
                {a.split("").map((char, j) => (
                  <motion.div
                    key={j}
                    initial={{ scaleY: 0.7 }}
                    animate={{ scaleY: 1 }}
                    whileHover={{
                      scaleY: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.div>
                ))}
              </div>
            );
          })}
        </section>

        {/* section 2 */}
        <section className="section-shared">
          <div className="border-2 text-9xl font-bold">
            HELLO WORLD!
            <br />
            IM DANIEL JUNG
          </div>
        </section>

        {/* section 3 */}
        <section className="section-shared">
          <div className="w-full h-1/5 flex flex-row justify-center items-center border text-9xl font-medium">
            overview
          </div>
          <div className="w-full h-1/3 flex flex-row justify-center items-center border">
            <div className="w-1/5 ">
              사진
            </div>
            <div className="w-4/5 flex flex-col justify-center text-xl">
              Project 페이지에는 개인 및 프로젝트와 외주를 했을 때 진행한 프로젝트의 결과가 담겨있습니다. 이 과정에서 고민했던 점, 해결 방법,
              관련 공부 기록, 그리고 구현한 기능들을 통해 저의 기술 스택과 문제 해결 능력을 깊이 있게 확인하실 수 있습니다.
              <br />
              <br />
              About 페이지에서는 제 경험과 가치관, 그리고 앞으로 개발자로서 나아가고 싶은 방향을 간략히 소개하고 있습니다.
            </div>
          </div>
          <div className="w-full h-1/3 gap-70 flex flex-row justify-center items-center border">
            <div className="btn-shared">
              Project
            </div>
            <div className="btn-shared">
              About
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
