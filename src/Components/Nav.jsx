import "../assets/css/components/nav.css";
function Nav() {
  return (
    <>
      <div className="navigation-wrapper">
        <div className="logo">
          <h1>conduit</h1>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>Home</li>
              <li>Sign in</li>
              <li>Sign up</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="navigation-banner-wrapper">
        <h1>conduit</h1>
        <p>A place to share your knowledge</p>
      </div>
    </>
  );
}
export default Nav;
