// components/Resume.tsx
const Resume = () => {
  return (
    <div className="resume-container w-full mx-auto p-4 flex flex-col items-center">
      <div className="w-full max-w-[800px] aspect-[8.5/11] border border-foreground/10 rounded-lg overflow-hidden mb-4">
        <iframe
          src="https://docs.google.com/document/d/1qc8xxqMuSxmmQRZrUnJzQU7jpZMHZrAF2zFTuoLYduQ/preview"
          className="w-full h-full"
          style={{ border: 'none' }}
          title="My Resume"
        />
      </div>
      <a
        href="https://docs.google.com/document/d/1qc8xxqMuSxmmQRZrUnJzQU7jpZMHZrAF2zFTuoLYduQ/export?gid=0&format=pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-button"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;
