import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
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
    <button onClick={scrollToTop} style={styles.button}>
      ↑
    </button>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#ff5a3c",
    color: "white",
    border: "none",
    borderRadius: "8px",
    width: "50px",
    height: "50px",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};