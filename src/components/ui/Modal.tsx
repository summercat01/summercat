import { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <header className="mb-4 flex items-center justify-between">
          {title ? <h2 className="text-lg font-semibold text-gray-900">{title}</h2> : null}
          <button
            onClick={onClose}
            className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600 transition hover:bg-gray-200"
          >
            Close
          </button>
        </header>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
}

