import { useState, ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 ${
              active === i ? "border-b-2 border-blue-500 font-bold" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[active].content}</div>
    </div>
  );
}
