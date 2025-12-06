"use client";

import { createContext, useContext, useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// 🎯 Context for cursor state
const CursorContext = createContext();

/**
 * ==============   Cursor Provider   ================
 * Wrap your app with this to enable magnetic cursor
 */
export function MagneticCursorProvider({ children }) {
    const [cursorSize, setCursorSize] = useState({ width: 20, height: 20 });
    const [cursorRadius, setCursorRadius] = useState(10);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isHovered) {
                mouseX.set(e.clientX - cursorSize.width / 2);
                mouseY.set(e.clientY - cursorSize.height / 2);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cursorSize, isHovered, mouseX, mouseY]);

    // Snap to element
    const snapToElement = (element, borderRadius = 12) => {
  if (!element) return;
  
  const rect = element.getBoundingClientRect();
  const padding = 6;

  // Calculate new size (element + padding)
  const newWidth = rect.width + padding * 2;
  const newHeight = rect.height + padding * 2;

  setCursorSize({
    width: newWidth,
    height: newHeight,
  });
  setCursorRadius(borderRadius + 4);

  // Position cursor to WRAP around the element (top-left corner minus padding)
  mouseX.set(rect.left - padding);
  mouseY.set(rect.top - padding);
  
  setIsHovered(true);
};

    // Reset cursor
    const resetCursor = () => {
        setCursorSize({ width: 20, height: 20 });
        setCursorRadius(10);
        setIsHovered(false);
    };

    return (
        <CursorContext.Provider value={{ snapToElement, resetCursor }}>
            {/* 🎯 The Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: smoothX, y: smoothY }}
                animate={{
                    width: cursorSize.width,
                    height: cursorSize.height,
                    borderRadius: cursorRadius,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <motion.div
                    className="w-full h-full"
                    animate={{
                        backgroundColor: isHovered
                            ? "rgba(255, 255, 255, 0.15)"
                            : "rgba(255, 255, 255, 0.9)",
                        borderRadius: cursorRadius,
                    }}
                    transition={{ duration: 0.15 }}
                />
            </motion.div>

            {/* Content */}
            <div className="cursor-none">{children}</div>
        </CursorContext.Provider>
    );
}

/**
 * ==============   Magnetic Element Wrapper   ================
 * Wrap any element to make it magnetic
 */
export function Magnetic({ children, borderRadius = 12 }) {
    const ref = useRef(null);
    const context = useContext(CursorContext);

    if (!context) {
        console.warn("Magnetic must be used within MagneticCursorProvider");
        return children;
    }

    const { snapToElement, resetCursor } = context;

    return (
        <div
            ref={ref}
            onMouseEnter={() => snapToElement(ref.current, borderRadius)}
            onMouseLeave={resetCursor}
        >
            {children}
        </div>
    );
}