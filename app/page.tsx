"use client";

import Image from "next/image";
import Link from "next/link";
import pp1 from "../public/pp4.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin , FaTwitter} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import image1 from "../public/10.png";
import image2 from "../public/11.png";
import { useState, useEffect } from "react";


export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const isBottom = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
      setShowScrollButton(isBottom);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Kesara Rathnasiri</h1>
            <p className="text-grey-600 dark:text-gray-400">Data Scientist & Cloud Solutions Expert</p>
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
                      <h3 className="font-medium">Healthcare Analytics Dashboard</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Power BI, DAX, M, Power Query, SQL Server, Excel</p>
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
                      <h3 className="font-medium">Sales Analytics Dashboard</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Power BI, DAX, Power Query, SQL Server, Excel</p>
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jan,2025 - Present</p>
                  <p className="font-medium">Research Assistant - Intern | Remote</p>
                  <p className="text-blue-600 dark:text-blue-400">DataSEARCH, University of Moratuwa</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                Collaborating with a supervisor at DataSEARCH to develop a research publication, addressing a real-world data science
                problem through comprehensive analysis of a selected dataset. Executing end-to-end data analysis processes, including data cleaning,preprocessing,feature engineering,and model building, leveraging advanced statistical and machine learning techniques. Interpreting and visualizing data-driven insights to identify actionable solutions, presenting results in a clear, structured
                manner for research dissemination and potential implementation.
              </p>
            </div>



            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sep,2024 - Present</p>
                  <p className="font-medium">Class Representative</p>
                  <p className="text-blue-600 dark:text-blue-400">Bachelor of Data Science for Business</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                I am Kesara Rathnasiri, a passionate and experienced System Engineer with a strong background in the field. With a solid foundation in system administration, I have honed my skills in managing and optimizing complex IT infrastructures. My expertise lies in designing and implementing robust systems that ensure optimal performance and reliability.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jul,2024 - Present</p>
                  <p className="font-medium">Junior Analyst</p>
                  <p className="text-blue-600 dark:text-blue-400">BISO Invest Capital Management</p>
                </div>
              </div>

                <div className="space-y-1">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Conducting in-depth research and financial analysis of companies, assessing market position, financial health, and growth potential to support investment decisions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Collaborating with a team of 3 other Junior Analysts and a Senior Analyst to compile comprehensive investment reports and develop persuasive investment pitches.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Presenting recommendations for company inclusion in the fund&apos;s portfolio to aid strategic investment decisions
                </p>
              </div>

            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jul,2024 - Aug,2024</p>
                  <p className="font-medium">Financial Manager</p>
                  <p className="text-blue-600 dark:text-blue-400">Data Science for Business Academic Association</p>
                </div>
              </div>
              
              <div className="space-y-1">
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                Managed the Financial operations of the Data Science for Business academic association, ensuring accurate and timely
                budgeting for 120+ students&apos; events activities. 
              </p>
              
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                Coordinated with five board members to plan and execute events within budget, including quiz and dinner mingle.
              </p>
              
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
                Promoted the association during recruitment and open days to inform students about its role and activities.
              </p>

              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aug,2024 - Dec,2024</p>
                  <p className="font-medium">Logistics Manager</p>
                  <p className="text-blue-600 dark:text-blue-400">BISO Charity</p>
                </div>
              </div>
              
              <div className="space-y-1">
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
              Coordinating with the Manger to ensure smooth execution of events, managing logistics from planning to implementation. 
              </p>
            
              <p className="text-gray-600 text-sm dark:text-gray-400 text-sm">
              Developing and maintaining relationships with vendors and venues, overseeing equipment setup and troubleshooting issues to enhance the overall experience for students.
              </p>
              </div>
            </div>

            <p className="text-grey-500">© 2025 Kesara Rathnasiri</p>


           </motion.section>

            {/* Scroll to Top Button */}
                {showScrollButton && (
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-4 right-4 p-3 pl-4 pr-5 rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition-transform z-50 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                aria-label="Scroll to top"
              >
                <span>↑</span>
                <span className="text-sm">Scroll to Top</span>
              </motion.button>
            )}
        
        </main>
      </div>
    </div>
  );
}

