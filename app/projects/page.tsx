"use client";
import Header from "../header";
import { motion, useScroll } from "motion/react";
import { useState } from "react";
import { useEffect } from "react";

export default function Projects() {
  const { scrollYProgress } = useScroll();

    return (
        <>
            <Header />
            <motion.div
                id="scroll-indicator"
                style={{ 
                    scaleY: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "10px",
                    originX: 0,
                    backgroundColor: "var(--primary)",
                }}
            />
            <Content />
        </>
    )
}

function Content() {
    const webDevProjects = [
    { title: "Budgeting App", description: "[IPR] A budgeting app built with React and Tailwind CSS to help users manage their finances.", img: "/project-photos/web-dev/BudgetApp.png", GitHub:"https://github.com/cassy18/BudgetApp"
     },
  ];
  const gameDevProjects = [{ title: "To Be Added", description: "IPR", img: "/comingsoon.png", GitHub: "https://github.com/GameRepo"}];
  const courseProjects = [
    { title: "Calypso", description: "CSCC01 Introduction to Software Engineering: Built an e-commerce and social media platform using a MERN stack.", img: "/project-photos/courses/Calypso.png", GitHub:"https://github.com/CSCC012023/final-project-s23-calypso"
    },
    { title: "InvestEase", description: "CSCC43 Intro to Databases: Created a stock portfolio website using React and Tailwind CSS to showcase my data analytics and SQL skills.", img: "/project-photos/courses/InvestEase.png", GitHub:"https://github.com/CSCC43-Project/InvestEase"
    },
    { title: "OfCourse", description: "CSCB07 Software Design: Developed an android course planner application.", img: "/project-photos/courses/OfCourse.png", GitHub:"https://github.com/itsBao/B07-Group1"},
    ];
  const otherProjects = [
    { title: "MyWeekend", description: "An AI-powered trip planning app that helps users plan their weekend getaways. Built during the 2023 Hack The Valley Competition, placed 32 out of over 100 groups.", img: "/project-photos/misc/MyWeekend.png", GitHub:"https://github.com/MyWeekend-HTV2023/MyWeekend"
    },
    { title: "Brainstorm", description: "A web application that uses AI to generate trivia questions for users. Built during the 2024 Hack The Valley Competition.", img: "/project-photos/misc/BrainStorm.png", GitHub:"https://github.com/brainstorm-hack-the-valley/brainstorm"
    },
  ];
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
            <p className="text-center text-foreground/70">Here are some of my projects!</p>
            <div className="mt-8 space-y-6">
                {project_card("Web Development", "A collection of web applications I've built using React, Next.js, and other modern web technologies.", webDevProjects)}
                {project_card("Game Development", "A showcase of video games I've developed using Unity and Unreal Engine, ranging from 2D platformers to 3D adventures.", gameDevProjects)}
                {project_card("Course Projects", "A collection of projects completed as part of my coursework, demonstrating my skills and knowledge in various subjects.", courseProjects)}
                {project_card("Other Projects", "Miscellaneous projects that don't fit into the other categories, showcasing my diverse interests and skills.", otherProjects)}
            </div>
        </div>
    );
}
function project_card(
    title: string,
    description: string,
    projects: Array<{ title: string, description: string, img: string, GitHub: string }>
) {
    return (
        <div className="border border-[var(--tertiary)] rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-4xl mx-auto">
            <h2 className="text-shadow-lg text-2xl font-semibold mb-2 border border-[var(--tertiary)] rounded-lg p-2 bg-[var(--secondary)]">{title}</h2>
            <p className="text-center p-2">{description}</p>
            <Carousel projects={projects} />
        </div>
    );
}

function Carousel({
    projects,
}: {
    projects: Array<{ title: string; description: string; img: string; GitHub: string }>;
}) {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);

    const prev = () => {
        setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
        setProgress(0);
    };
    const next = () => {
        setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
        setProgress(0);
    };

    useEffect(() => {
        if (projects.length <= 1) return;
        setProgress(0);
        let progressValue = 0;
        const progressInterval = setInterval(() => {
            progressValue += 2;
            setProgress(progressValue);
            if (progressValue >= 100) {
                clearInterval(progressInterval);
                setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
            }
        }, 100); // 100ms * 50 = 5000ms

        return () => {
            clearInterval(progressInterval);
        };
    }, [current, projects.length]);

    const project = projects[current];

    return (
        <div className="flex flex-col items-center py-6">
            <div className="border border-foreground/50 dark:bg-background rounded-xl shadow-lg p-6 w-full max-w-md">
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg mb-4 border border-foreground/10"
                />
                <p className="text-foreground/70 mb-3 text-center">{project.description}</p>
                <a
                    href={project.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[var(--primary)] text-white rounded hover:bg-primary/80 transition-colors text-center"
                >
                    GitHub Repo
                </a>
                {projects.length > 1 && (
                    <div>
                        <div className="flex justify-between mt-4">
                            <button onClick={prev} className="px-3 py-1 bg-foreground/10 rounded hover:bg-foreground/20 transition-colors">
                                Prev
                            </button>
                            <span className="mx-2 text-sm text-foreground/70">
                                {current + 1} / {projects.length}
                            </span>
                            <button onClick={next} className="px-3 py-1 bg-foreground/10 rounded hover:bg-foreground/20 transition-colors">
                                Next
                            </button>
                        </div>
                        <div className="w-full h-2 bg-foreground/10 rounded mt-4 overflow-hidden">
                            <div
                                className="h-full bg-[var(--primary)] transition-[width] duration-100 ease-linear"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="text-center mt-1 text-foreground/70 italic">Auto-advances every 5 seconds</div>
                    </div>
                )}
            </div>
        </div>
    );
}