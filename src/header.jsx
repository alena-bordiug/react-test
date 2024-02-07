import reactLogo from './assets/react.svg';

function Header() {
  return (
    <header className='header container-fluid '>
      <div className='header-inner container'>
        <nav>
          <ul className='header-inner-nav'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </div>
      </div>
    </header>
  );
}

export default Header;
