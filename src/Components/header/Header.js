import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const logOut = () => {
    localStorage.removeItem("nameOfUser");

  }
  return (
    <header className='header'>
    <Link to={'/auth'}> <button className='header__signOutButton' onClick={logOut}>Выход</button></Link>
       
      <div className='header__wrapper'>
        <div className='header__title'>
          Наша команда
        </div>
        <div className='header__descr'>
          <p>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>

        </div>
      </div>
    </header>
  )
};

export default Header;