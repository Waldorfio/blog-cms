import { Link } from 'react-router-dom';

function Header(props) {
  const { handleLogin } = props;

  return (
    <header>
      <Link to="/"><h1>CMS</h1></Link>
      <Link to="/users" className="links"><h4>Users</h4></Link>
      <Link to="/posts" className="links"><h4>Posts</h4></Link>
      <Link to="/messages" className="links"><h4>Messages</h4></Link>
      <div />
      <button id="login-btn" onClick={handleLogin}>Log in</button>
      <Link to="register"><button>Register</button></Link>
    </header>
  );
}

export default Header;
