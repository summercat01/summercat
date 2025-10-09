type LoginButtonProps = {
  onClick?: () => void;
  label?: string;
};

export default function LoginButton({ onClick, label = "Login" }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded bg-white/20 px-4 py-2 text-sm font-medium text-white shadow backdrop-blur transition hover:bg-white/30"
    >
      {label}
    </button>
  );
}

