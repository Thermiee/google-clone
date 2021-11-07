import logo from "../assets/logo.png";

const Logo = ({ search }) => {
  return (
    <section className="logoSection">
      <div className={search ? "logo text" : "logo"}>
        {search ? search : <img className="logoImage" src={logo} alt="logo" />}
      </div>
    </section>
  );
};

export default Logo;
