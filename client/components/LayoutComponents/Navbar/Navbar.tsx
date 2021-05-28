import { useRef, useState } from 'react';
import Image from 'next/Image';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const search = useRef<HTMLInputElement>(null);

  // on search button click
  const onSearchClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (search && search.current) {
      // can access search current value here
      // const valueTypedInSearch =  search.current.value
    }
  };

  // handle burger menu click
  const onBurgerMenuClick = () => {
    setBurgerMenu(!burgerMenu);
  };

  // Dynamically changes classNames
  let navbar_links_login_container: string =
    styles.navbar_links_login_container;
  let burger_item: string = styles.burger_item;
  if (burgerMenu) {
    burger_item = [styles.burger_item, styles.toggle].join(' ');
    navbar_links_login_container = [
      styles.navbar_links_login_container,
      styles.navbar_active
    ].join(' ');
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <a title='Root' href=''>
          <Image
            src='/images/logo_fm.png'
            alt='Logo Image'
            width={190}
            height={60}
          />
        </a>
      </div>
      <div className={styles.navbar_search}>
        <form onSubmit={onSearchClick}>
          <input
            type='text'
            className={styles.navbar_search_input}
            ref={search}
            placeholder='Search for anything'
          />
          <button type='submit' className={styles.navbar_search_btn}>
            Search
          </button>
        </form>
      </div>
      <div className={styles.navbar_links_login_hamber_container}>
        <div className={navbar_links_login_container}>
          <div className={styles.navbar_links_container}>
            <li className={styles.navbar_item}>
              <a title='Courses' href='/'>
                Courses
              </a>
            </li>
            <li className={styles.navbar_item}>
              <a title='Programs' href='/'>
                Programs
              </a>
            </li>
            <li className={styles.navbar_item}>
              <a title='Events' href='/'>
                Events
              </a>
            </li>
            <li className={styles.navbar_item}>
              <a title='Contact' href='/'>
                Contact
              </a>
            </li>
            <li className={styles.navbar_item}>
              <a title='About Us' href='/'>
                About Us
              </a>
            </li>
          </div>
          <div className={styles.navbar_cart_login_container}>
            <li className={styles.navbar_item}>
              <a title='Cart' href='/'>
                Cart
              </a>
            </li>
            <li
              className={[styles.navbar_item, styles.navbar_login_btn].join(
                ' '
              )}
            >
              <a title='Login/Register' href='/'>
                Login/Register
              </a>
            </li>
          </div>
        </div>
        <button className={styles.burger} onClick={onBurgerMenuClick}>
          <span className={burger_item}></span>
          <span className={burger_item}></span>
          <span className={burger_item}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
