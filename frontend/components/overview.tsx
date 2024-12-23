import { motion } from "framer-motion";
import Link from "next/link";

import { MessageIcon, VercelIcon } from "./icons";
import Image from "next/image";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-4 leading-relaxed max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <Image
            alt="Planspiegel logo"
            src="/images/ps_logo.svg"
            width={200}
            height={100}
          />
        </p>
        <h3 className="font-semibold text-center">Welcome to Planspiegel!</h3>
        <p>
          Hi there! 👋 I&apos;m here to help you assess and improve your
          website&apos;s security with ease. Whether you&apos;re looking to
          identify vulnerabilities, ensure compliance, or generate a detailed
          security report, I&apos;ve got you covered.
        </p>
        <div className="text-left">
          Let’s get started! What would you like to do today?
          <ul>
            <li>1️⃣ Run a quick security check</li>
            <li>2️⃣ Explore compliance guidance</li>
            <li>3️⃣Learn more about the platform</li>
          </ul>
          Just type your choice, and we’ll begin! 🚀
        </div>
      </div>
    </motion.div>
  );
};
