import React, { useRef } from "react";
import "./modal.css";

const ModalExample = () => {
  const modalRef = useRef(null);
  const isVisible = useRef(false);

  const toggleModal = () => {
    isVisible.current = !isVisible.current;

    if (modalRef.current) {
      if (isVisible.current) {
        modalRef.current.style.display = "flex";
        modalRef.current.style.opacity = "0"; 
        modalRef.current.style.transform = "translateY(-20px)"; 
        setTimeout(() => {
          modalRef.current.style.opacity = "1"; 
          modalRef.current.style.transform = "translateY(0)"; 
          modalRef.current.style.transition = "opacity 0.3s ease, transform 0.3s ease"; 
        }, 10); 
      } else {
        modalRef.current.style.opacity = "0"; 
        modalRef.current.style.transform = "translateY(-20px)"; 
        modalRef.current.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        setTimeout(() => {
          modalRef.current.style.display = "none"; 
        }, 300); 
      }
    }
  };
  // this is random animation not mmy mind

  return (
    <div>
      <button className="styled-button" onClick={toggleModal}>
        Contact Us
      </button>

      <div className="modal" ref={modalRef} style={{ display: "none" }}>
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>
            &times;
          </span>
          <h2>Contact Us</h2>
          <form>
            <label>
              Name: <input type="text" placeholder="Your Name" />
            </label>
            <label>
              Email: <input type="email" placeholder="Your Email" />
            </label>
            <label>
              Message:
              <textarea placeholder="Your Message"></textarea>
            </label>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalExample;
