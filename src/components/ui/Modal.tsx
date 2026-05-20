import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {children}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white rounded py-2 hover:bg-red-600"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
