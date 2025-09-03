import { Link } from "react-router-dom";
import CardLayout from "../components/CardLayout";

function SignIn() {
  return (
    <CardLayout>
      <h1 className="mb-2 text-2xl font-bold">Sign in to your PopX account</h1>
      <p className="mb-6 text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius praesentium
        deleniti.
      </p>
      <form className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email Address</span>
          <input
            type="email"
            placeholder="Enter email address"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#6f2dff] focus:outline-none focus:ring-1 focus:ring-[#6f2dff]"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Password</span>
          <input
            type="password"
            placeholder="Enter password"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#6f2dff] focus:outline-none focus:ring-1 focus:ring-[#6f2dff]"
          />
        </label>
        <button
          type="submit"
          disabled
          className="inline-flex w-full items-center justify-center rounded-md bg-[#6f2dff] px-4 py-2 font-semibold text-white"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don’t have an account?{' '}
        <Link to="/sign-up" className="text-[#6f2dff] underline">
          Create one
        </Link>
      </p>
    </CardLayout>
  );
}

export default SignIn;