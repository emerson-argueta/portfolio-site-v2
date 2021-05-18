import Link from 'next/link';


const Header = () => {


  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link href="#hero">
            <img src="/logoIcon.png" alt="EmersonArgueta" />
          </Link>
        </div>
        <div className="nav-menu">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <style jsx>{`
        header {
          position: fixed;
          width: 100vw;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          max-width: 100vw;
          margin: 0 auto;
          padding: 1vh 15vw;
        
        }
        .nav-logo {
          display: grid;
        }
        .nav-logo img {
          max-width: 4vmin;
        }
        .nav-menu {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 6vmin;
        }
        
      `}</style>
    </header>
  );
};

export default Header;