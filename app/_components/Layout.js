import Footer from "./Footer";
import HeaderMain from "./HeaderMain";
import HeaderSecondary from "./HeaderSecondary";

const Layout = ({ children, criteria }) => {
  return (
    <div className="bg-custom font-poppins">
      {criteria ? <HeaderMain /> : <HeaderSecondary />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
