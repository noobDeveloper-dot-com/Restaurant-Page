import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flexB">
        <section className="slogans flexB">
          <p className="slogan_one">SATISFY YOUR CRAVING</p>
          <p className="slogan_two">WHERE EVERY BITE IS AN EXPERIENCE</p>
        </section>

        <h1 className="main_title">
          <span className="nummy">Nummy</span> <br />
          <span className="foodies">Foodies</span>
        </h1>

        <div className="hamburger_Btn">
        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
