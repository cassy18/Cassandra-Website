'use client';
import * as motion from "motion/react-client"
import Header from "./header";
import Resume from "@/public/Resume";

export default function Home() {
  const box = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
  }
  const photoBG = {
    backgroundColor: "var(--primary)",
    padding: "5px",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }
  const textBox = {
    backgroundColor: "var(--tertiary)",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "rgba(255, 255, 255, .8)",
    maxWidth: "700px",
    margin: "0 20px",
  }
  return (
    <div className="">
      <Header />
      <main className="row-start-2 flex flex-col items-center justify-center gap-10 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.9, bounce: 0.4 },
            }}
            style={box}
        >
          Cassandra Dias
        </motion.div>
        <motion.img
            animate={{ scale: 1.3 }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring" }}
            src="/profile.jpg"
            alt="Cassandra Dias"
            className="w-32 h-32 rounded-full"
            style={photoBG}
        />
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={textBox}
          >
          <p className="max-w-[700px] text-left text-foreground/70">
            Hi, I&apos;m Cassandra Dias. I am a computer science student studying at the University of Toronto. I love developing web applications, video games and learning about new technologies. This is my personal website where I will be sharing my projects!
          </p>
        </motion.div>
      </main>
      <div className="text-foreground/70 p-6 flex flex-col items-center wrap-content">
          <h1 className="text-2xl font-bold mb-4">Resume</h1>
          <Resume />
      </div>
      <p>Check out my projects <a href="/projects" className="underline hover:text-foreground">here</a>!</p>
    </div>
  );
}
