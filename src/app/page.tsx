import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg p-4">
      <section className="w-full max-w-md rounded-lg bg-card p-12 text-center shadow">
        <h1 className="mb-4 text-3xl font-bold">Welcome to PopX</h1>
        <p className="mb-8 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Link
          href="/sign-up"
          className="mb-4 inline-block w-full rounded-md bg-primary px-4 py-2 font-semibold text-white"
        >
          Create Account
        </Link>
        <Link
          href="/sign-in"
          className="inline-block w-full rounded-md bg-primary/10 px-4 py-2 font-semibold text-primary"
        >
          Already Registered? Login
        </Link>
      </section>
    </main>
  );
}