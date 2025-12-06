"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import styles from "./StateAnimations.module.css"; // ← Import module styles
import MaskedNav from "./MaskedNav";

export default function StateAnimations() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);
    const [rotateX, setRotateX] = useState(0);

    return (
        <>
            <div className={`${styles.container} flex flex-col`}> {/* ← Replaced #example with .container */}
                <div className="flex justify-center">
                    <motion.div
                        className={styles.box}
                        animate={{ x, y, rotate, rotateX }}
                        transition={{ type: "spring" }}
                    />
                    <div className={styles.inputs}>
                        <Input value={x} set={setX} label="x" />
                        <Input value={y} set={setY} label="y" />
                        <Input value={rotate} set={setRotate} min={-180} max={180} label="rotate" />
                        <Input value={rotateX} set={setRotateX} min={-180} max={180} label="rotateX" />
                    </div>
                </div>
                <motion.button
                    initial={{ filter: "blur(10px)" }}
                    animate={{ filter: "blur(0px)" }}
                    transition={{ type: 'spring',duration: 1 }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 transition-all duration-300 cursor-none"
                    onClick={() => {
                        setX(0)
                        setY(0)
                        setRotate(0)
                        setRotateX(0)
                    }}
                >
                    Reset
                </motion.button>

            </div>
        </>
    );
}

function Input({ value, label, set, min = -200, max = 200 }) {
    return (
        <label className={styles.label}>
            <code className={styles.code}>{label}</code>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => set(parseFloat(e.target.value))}
                className={styles.rangeInput} // ← Scoped class
            />
            <input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value) || 0)}
                className={styles.numberInput} // ← Scoped class
            />
        </label>
    );
}