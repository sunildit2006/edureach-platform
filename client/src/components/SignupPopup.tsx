import { useNavigate } from "react-router-dom";

interface SignupPopupProps {
  show: boolean;
  onClose: () => void;
}

export default function SignupPopup({
  show,
  onClose,
}: SignupPopupProps) {
  const navigate = useNavigate();

  if (!show) return null;

  const handleSignup = () => {
    onClose();
    navigate("/signup");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore More at EduReach
        </h2>

        <p className="mt-4 text-gray-600">
          Sign up to explore campus life, events, placement statistics,
          and talk to our AI counselor.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700"
          >
            Maybe Later
          </button>

          <button
            onClick={handleSignup}
            className="rounded-lg bg-maroon px-5 py-3 font-semibold text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}