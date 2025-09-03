import { Link } from "react-router-dom";
import CardLayout from "../components/CardLayout";

function SignUp() {
  return (
    <CardLayout>
      <h1 className="mb-2 text-2xl font-bold">Create your PopX account</h1>
      <form className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Full Name*</span>
          <input
            type="text"
            placeholder="Marry Doe"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#6f2dff] focus:outline-none focus:ring-1 focus:ring-[#6f2dff]"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Phone number*</span>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#6f2dff] focus:outline-none focus:ring-1 focus:ring-[#6f2dff]"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email Address*</span>
          <input
            type="email"
            placeholder="example@mail.com"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#6f2dff] focus:outline-none focus:ring-1 focus:ring-[#6f2dff]"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Password*</span>
          <input
            type="password"
            placeholder="••••••••"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#6f2dff] focus:outline-none focus:ring-1 focus:ring-[#6f2dff]"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Company name</span>
          <input
            type="text"
            placeholder="Acme Corp."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#6f2dff] focus:outline-none focus:ring-1 focus:ring-[#6f2dff]"
          />
        </label>
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">Are you an Agency?*</legend>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="agency" value="yes" required /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="agency" value="no" required /> No
            </label>
          </div>
        </fieldset>
        <button
          type="submit"
          disabled
          className="inline-flex w-full items-center justify-center rounded-md bg-[#6f2dff] px-4 py-2 font-semibold text-white"
        >
          Create Account
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already registered?{' '}
        <Link to="/sign-in" className="text-[#6f2dff] underline">
          Login
        </Link>
      </p>
    </CardLayout>
  );
}

export default SignUp;