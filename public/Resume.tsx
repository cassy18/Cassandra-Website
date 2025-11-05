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
        className="p-4 bg-[var(--primary)] text-white rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-[-2px] active:translate-y-[2px] hover:bg-[var(--tertiary)] transition-all duration-200 border-b-4 border-[var(--tertiary)]"
        style={{
          boxShadow: '4px 4px 14px rgba(54, 47, 47, 0.15), 0 1.5px 0 #333',
        }}
      >
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;
