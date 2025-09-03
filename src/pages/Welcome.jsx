import { Link } from "react-router-dom";
import CardLayout from "../components/CardLayout";

function Welcome() {
  return (
    <CardLayout>
      <h1 className="mb-4 text-3xl font-bold text-center">Welcome to PopX</h1>
      <p className="mb-8 text-sm text-gray-500 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <Link
        to="/sign-up"
        className="mb-4 block w-full rounded-md bg-[#6f2dff] px-4 py-2 font-semibold text-white text-center"
      >
        Create Account
      </Link>
      <Link
        to="/sign-in"
        className="block w-full rounded-md bg-[#ede7ff] px-4 py-2 font-semibold text-[#6f2dff] text-center"
      >
        Already Registered? Login
      </Link>
    </CardLayout>
  );
}

export default Welcome;