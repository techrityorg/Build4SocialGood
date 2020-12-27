import React, { useEffect, useRef } from "react";

const Modal = ({ children, close }) => {
  const wrapperRef = useRef();

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="modal">
      <div className="modal-content" ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
