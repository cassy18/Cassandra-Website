// components/Resume.tsx
const Resume = () => {
  return (
    <div className="resume-container" style={{ width: '70%', height: '600px', position: 'relative' }}>
      <iframe
        src="https://docs.google.com/document/d/1qc8xxqMuSxmmQRZrUnJzQU7jpZMHZrAF2zFTuoLYduQ/preview"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="My Resume"
      />
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
