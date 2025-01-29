"use client";

import Image from "next/image";
import Link from "next/link";
import pp1 from "../public/pp4.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin , FaTwitter} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import image1 from "../public/1.png";
import image2 from "../public/2.png";
import image3 from "../public/3.png";


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">

        <motion.header 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        
        className="flex items-center justify-between mb-12">
          <div className="w-40 h-70  overflow-hidden">
            <Image
              src={pp1}
              alt="profile picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            />
          </div>
          <ThemeToggle />
        </motion.header>


        <main className="space-y-10">
          <section className="space-y-10">
          <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-1">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Kesara Rathnasiri</h1>
            <p className="text-grey-600 dark:text-gray-400">Data engineering & Cloud Solutions Expert</p>
            <p className="text-grey-600 dark:text-gray-400">Data Science @ BI</p>
          </motion.div>


          <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-3"
          >
            <h2 className="text-lg font-semibold">Building Scalable Solutions for Tomorrow</h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Expert in cloud architecture with {" "}
              <span className="text-black dark:text-white">AWS</span> and {" "}
              <span className="text-black dark:text-white">Azure</span>. I
              specalize in designing and implementing large scalable distributed systems. With expertise in{" "}
              <span className="text-black dark:text-white">Python, Kubernetes and microservices architecture</span>.
            </p>

            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Beyond technical architecture, Im passionate about Devops practises and building resilient systems that can scale effectively while maintaining high availability and performance
            </p>
          </motion.div>



          <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex items-center gap-5">

            <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover: scale-105 cursor-pointer"> Resume</Button>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:white transition-colors transition-transform duration-10000 hover:scale-105 cursor-pointer">
                <FaLinkedin className=" w-6 h-6" /> 
            </Link>

            <Link href="/page1" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:white transition-colors transition-transform duration-10000 hover:scale-105 cursor-pointer">
                <FaGithub className=" w-6 h-6" /> 
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:white transition-colors transition-transform duration-10000 hover:scale-105 cursor-pointer">
              <FaTwitter className=" w-6 h-6" />
              </Link>

          </motion.div>

          </section>


          <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aug,2023 - Present</p>
                  <p className="font-medium">Bachelor of Data Science for Business</p>
                  <p className="text-blue-600 dark:text-blue-400">BI Norwegian Business School</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                I am a second year student at the BI Norwegian Business School, pursuing a Bachelor&apos;s degree in Data Science. My academic journey has been marked by a deep passion for data analysis and a commitment to leveraging data-driven insights to drive meaningful change.
                </p>
             </div>   
          </motion.section>

          <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image1} alt="Project 1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js, MySQL, Drizzler</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image2} alt="Project 1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 2</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js, MySQL, Drizzler</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image3} alt="Project 1" className="rounded-lg mb-4" />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Project 3</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js, MySQL, Drizzler</p>
                    </div>

                    <Button variant="ghost" size="icon">→</Button>
                  </div>
                </CardContent>
              </Card>


            </div>
          
          </motion.section>






          <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
          
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">July,2024 - Present</p>
                  <p className="font-medium">Junior Analyst</p>
                  <p className="text-blue-600 dark:text-blue-400">BISO Invest Capital Management</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                ●	Conducting in-depth research and financial analysis of companies, assessing market position, financial health, and growth potential to support investment decisions. 
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
              ●	Collaborating with a team of 3 other Junior Analysts and a Senior Analyst to compile comprehensive investment reports and develop persuasive investment pitches. 
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
              ●	Presenting recommendations for company inclusion in the fund&apos;s portfolio to aid strategic investment decisions
              </p>

            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">July,2024 - Present</p>
                  <p className="font-medium">Financial Manager</p>
                  <p className="text-blue-600 dark:text-blue-400">Data Science for Business Academic Association</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                I am Kesara Rathnasiri, a passionate and experienced System Engineer with a strong background in the field. With a solid foundation in system administration, I have honed my skills in managing and optimizing complex IT infrastructures. My expertise lies in designing and implementing robust systems that ensure optimal performance and reliability.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">July,2024 - Present</p>
                  <p className="font-medium">Logistics Manager</p>
                  <p className="text-blue-600 dark:text-blue-400">BISO Charity</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                I am Kesara Rathnasiri, a passionate and experienced System Engineer with a strong background in the field. With a solid foundation in system administration, I have honed my skills in managing and optimizing complex IT infrastructures. My expertise lies in designing and implementing robust systems that ensure optimal performance and reliability.
              </p>
            </div>



            <p className="text-grey-500">© 2025 Kesara Rathnasiri</p>


           </motion.section>
        
        </main>
      </div>
    </div>
  );
}

