import { useState, useEffect } from "react";
import { Loader2, Download } from "lucide-react"; // Or use any icon

export default function ResumeViewer() {
  const [loading, setLoading] = useState(true);

  // Simulate loading until the iframe is loaded
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <section id="" className="w-full max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-4 text-primary">My Resume</h2>

      {loading && (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="animate-spin h-8 w-8 text-primary" />
          <span className="ml-2 text-primary">Loading resume...</span>
        </div>
      )}

      <iframe
        src="/assets/my-resume.pdf" // ✅ Place your PDF inside /public/assets/
        onLoad={handleLoad}
        className={`w-full h-[700px] border rounded-md shadow-lg transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />

      {!loading && (
        <div className="mt-4 text-center">
          <a
            href="/assets/my-resume.pdf"
            download="my-resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg transition-all"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      )}
    </section>
  );
}
