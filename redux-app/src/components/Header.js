import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth.slice';

const Header = () => {
  // get state for isAuthenticated
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  
  // used to dispatch action
  const dispatch= useDispatch();
  
  // logout handler
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isAuth &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={ logoutHandler }>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
