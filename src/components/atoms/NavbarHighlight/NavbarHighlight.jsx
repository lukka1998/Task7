import React, { useRef, useEffect, useState } from "react";
import ModalExample from "../ModalExample/ModalExample";
import "./navbar.css";

const HighlightActiveSection = () => {
  const sectionsRef = useRef([]); 
  const [activeSection, setActiveSection] = useState(null); 

  const sections = ["About", "Services", "Portfolio", "Contact"]; 

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();//abrunebs  posicias da zomas 
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) { //aq kide xdeba titoeuli poziciisvtis formulis shesruleba 
          setActiveSection(index); //rodesac avsqrolavt  activeSection icvleba da xdeba index rasac shemdeg vamowmebt
        }
      });
    };

    window.addEventListener("scroll", handleScroll); //to control scrool

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className="navbar">
        {sections.map((section, index) => (
          <a
            key={section}
            className={activeSection === index ? "active-link" : ""}
          >
            {section}
          </a>
        ))}
      </nav>

      <div className="content">
        {sections.map((section, index) => (
          <section
            key={section}
            ref={(el) => (sectionsRef.current[index] = el)} 
            className="section"
          >
           <div>
           <h2>{section}</h2>  
           <ModalExample/>
           </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HighlightActiveSection;
