import React, { useRef, useState, useEffect } from 'react';
import './LazyLoad.css';

const LazyLoadContent = () => {
  const sections = ["Services", "Portfolio", "Contact"];
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  const checkVisibility = () => {
    sectionRefs.current.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setVisibleSections((prev) => {
          if (!prev.includes(index)) {
            return [...prev, index];
          }
          return prev;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        {sections.map((section, index) => (
          <a href={`#${section}`} key={section}>
            {section}
          </a>
        ))}
      </nav>

      <div className="content">
        {sections.map((section, index) => (
          <section
            key={section}
            id={section}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`section ${visibleSections.includes(index) ? 'visible' : ''}`}
          >
            <h2>{section}</h2>
            {visibleSections.includes(index) ? (
              <div className="section-content">
                <p>
                  This is the content for the {section} section. It is loaded dynamically when it comes into view.
                </p>
                <img src={`images/${section.toLowerCase()}.jpg`} alt={`${section} content`} />
              </div>
            ) : (
              <div className="loading">Loading...</div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default LazyLoadContent;
