import { useEffect, useRef, useState } from "react";

export const useClickOutside = ({ action } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        action ? action() : setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [action, dropdownRef]);

  return {
    isOpen,
    setIsOpen,
    dropdownRef,
  };
};
