"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="mx-auto mt-20 w-[480px] h-[60vh] max-h-[360px] rounded-xl bg-white overflow-hidden shadow-lg flex flex-col">
      {/* Nav Tabs */}
      <nav className="bg-[#fdfdfd] p-1 pb-0 rounded-t-xl border-b border-gray-200 h-11">
        <ul className="flex list-none p-0 m-0 font-medium text-sm">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#eee" : "transparent",
              }}
              className="relative flex-1 min-w-0 flex justify-between items-center py-2.5 px-4 cursor-pointer select-none text-gray-900 rounded-t-md"
              onClick={() => setSelectedTab(item)}
            >
              <span>{`${item.icon} ${item.label}`}</span>
              {item === selectedTab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-indigo-500"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Animated Content Area */}
      <main className="flex-1 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[128px]"
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/**
 * ==============   Data   ================
 */

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];