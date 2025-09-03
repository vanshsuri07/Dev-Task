import CardLayout from "../components/CardLayout";
import avatar from "../assets/react.svg";

function Account() {
  return (
    <CardLayout>
      <h1 className="mb-6 text-2xl font-bold">Account Settings</h1>
      <div className="flex items-center gap-4 rounded-lg bg-[#e0d9ff] p-4">
        <img src={avatar} alt="Profile" className="h-14 w-14 rounded-full" />
        <div>
          <h2 className="font-semibold">Yashraj Singh Thakur</h2>
          <p className="text-sm text-gray-600">yashrajsinghthakur23@gmail.com</p>
        </div>
      </div>
      <p className="mt-6 text-sm text-gray-600">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </CardLayout>
  );
}

export default Account;