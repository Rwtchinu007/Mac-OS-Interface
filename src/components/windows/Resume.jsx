import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Use a local worker bundle so PDF rendering works in Vite without relying on external CDN access.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState("");

  return (
    <MacWindow>
      <div className="resume-window">
        <Document
          file="/resume.pdf"
          loading={<p>Loading PDF...</p>}
          onLoadError={(error) =>
            setPdfError(error?.message || "Failed to load PDF")
          }
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from({ length: numPages ?? 0 }, (_, i) => (
            <Page key={i + 1} pageNumber={i + 1} width={600} />
          ))}
        </Document>
        {pdfError ? <p>{pdfError}</p> : null}
      </div>
    </MacWindow>
  );
};

export default Resume;
