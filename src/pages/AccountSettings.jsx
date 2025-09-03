const AccountSettings = () => {
  return (
    <div className="bg-[#372772] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md h-[35rem]">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        <div className="flex items-center mb-4">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
          />
          <div>
            <h2 className="text-xl font-bold">Vansh Suri</h2>
            <p className="text-gray-600">vanshsuri75@gmail.com</p>
          </div>
        </div>
        <p className="text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
