import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="p-2" src={logo} alt="Logo" />
      <h1 className="font-bold text-lg">Furniro</h1>
    </div>
  );
};

export default Logo;
