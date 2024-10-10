import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ErrorComponent = () => {
  const [shake, setShake] = useState(false);

  // Trigger shake effect on component mount
  useEffect(() => {
    setShake(true);
    const timer = setTimeout(() => setShake(false), 500); // Remove shake after animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ ...styles.container, animation: "fadeIn 2s" }}>
      <div style={{ ...styles.errorBox, animation: shake ? "shake 0.5s" : "none" }}>
        <h1 style={styles.errorText}>Oops! Something went wrong.</h1>
        <p style={styles.errorMessage}>We couldn't process your request.</p>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8d7da",
    opacity: 1,
    animationFillMode: "forwards",
  },
  errorBox: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    opacity: 1,
    animationFillMode: "forwards",
  },
  errorText: {
    color: "#721c24",
    fontSize: "24px",
    marginBottom: "10px",
  },
  errorMessage: {
    color: "#6c757d",
    marginBottom: "20px",
  },
  retryButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f5c6cb",
    color: "#721c24",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

// Inline keyframe animations
document.head.appendChild(
  document.createElement("style")
).textContent = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-10px); }
    40%, 80% { transform: translateX(10px); }
  }
`;

export default ErrorComponent;
