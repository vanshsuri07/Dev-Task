import PropTypes from "prop-types";
import "../index.css";

function CardLayout({ children }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#021c35] p-4">
      <section className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        {children}
      </section>
    </main>
  );
}

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardLayout;