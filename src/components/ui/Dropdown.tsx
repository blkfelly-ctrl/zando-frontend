import { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

export function Dropdown({ label, options, onSelect }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {label}
      </button>
      {open && (
        <ul className="absolute mt-2 bg-white border rounded shadow-lg w-40">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
