import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);

      const footer = document.querySelector(".footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight) {
        setBottomOffset(windowHeight - footerRect.top + 20);
      } else {
        setBottomOffset(20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        right: "20px",
        bottom: `${bottomOffset}px`,
        width: "50px",
        height: "50px",
        backgroundColor: "#ff5a3c",
        color: "white",
        border: "none",
        borderRadius: "12px",
        fontSize: "22px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
        transition: "all 0.3s ease",
        zIndex: 1000,
      }}
      onMouseOver={(e) => (e.target.style.transform = "translateY(-3px)")}
      onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
    >
      ↑
    </button>
  );
}