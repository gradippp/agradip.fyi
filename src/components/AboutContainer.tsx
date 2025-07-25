// components/AboutContainer.tsx
import React from "react";

interface AboutContainerProps {
  htmlContent: string;
}

const AboutContainer: React.FC<AboutContainerProps> = ({ htmlContent }) => {
  return (
    <section className="about-container">
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <style jsx>{`
        .about-container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 1.5rem;
          background-color: #fdfdfd;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .content :global(p) {
          line-height: 1.7;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .content :global(h1),
        .content :global(h2) {
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

export default AboutContainer;
