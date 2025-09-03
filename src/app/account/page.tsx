import Image from "next/image";

export default function AccountSettings() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg p-4">
      <section className="w-full max-w-md rounded-lg bg-card p-8 shadow">
        <h1 className="mb-6 text-2xl font-bold">Account Settings</h1>
        <div className="flex items-center gap-4 rounded-lg bg-primary/5 p-4">
          <Image
            src="https://i.pravatar.cc/72"
            alt="Profile"
            width={72}
            height={72}
            className="rounded-full"
          />
          <div>
            <h2 className="font-semibold">Yashraj Singh Thakur</h2>
            <p className="text-sm text-gray-500">yashrajsinghthakur23@gmail.com</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </section>
    </main>
  );
}