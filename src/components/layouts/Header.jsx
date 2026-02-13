import { Link } from 'react-router';

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/signing">Sign in</Link>
      <Link to="/signout">Sign out</Link>
      <Link to="/feature">Feature</Link>
    </div>
  );
};

export default Header;
