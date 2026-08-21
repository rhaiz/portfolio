"use client";

import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { mainMotion } from "@/utils/animations";
import { SiCredly, SiHackerrank } from "react-icons/si";

export type AboutContent = {
  title: string;
  subtitle: string;
  description: string;
  resumeLabel: string;
};

type AboutSectionProps = {
  content: AboutContent;
};

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <motion.div
        {...mainMotion}
        transition={{ duration: 0.2 }}
        className="container max-w-6xl bg-white dark:bg-neutral-800 p-20 px-4 m-2"
      >
        <h2 className="text-4xl font-bold text-emerald-800 dark:text-emerald-300">
          {content.title}
        </h2>
        <h3 className="my-2 max-w-2xl text-neutral-500 font-semibold flex justif-center items-center">
          {content.subtitle}
        </h3>
        <p className="mb-8">{content.description}</p>
        <div className="flex justif-center space-x-4 mb-8">
          <Link
            href="https://www.linkedin.com/in/rhaissa-zeferino/"
            target="_blank"
            className="text-5xl hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/rhaiz"
            target="_blank"
            className="text-5xl hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.credly.com/users/rhaissazeferino"
            target="_blank"
            className="text-5xl hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300"
          >
            <SiCredly />
          </Link>
          <Link
            href="https://www.hackerrank.com/profile/rhaissazeferino"
            target="_blank"
            className="text-5xl hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300"
          >
            <SiHackerrank />
          </Link>
          <Link
            href="mailto:rhaissazeferino@gmail.com"
            target="_blank"
            className="text-5xl hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300"
          >
            <FaEnvelope />
          </Link>
        </div>
        <motion.a
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          href="/Resume_Rhaissa_Zeferino_En.pdf"
          target="_blank"
          className="flex items-center gap-2 hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300 font-semibold"
        >
          <span>{content.resumeLabel}</span>
          <FaArrowUpRightFromSquare />
        </motion.a>
      </motion.div>
    </section>
  );
}
