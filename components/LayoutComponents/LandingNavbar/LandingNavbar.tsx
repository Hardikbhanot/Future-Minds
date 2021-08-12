import { useState } from 'react';
import Link from 'next/link';

import styles from './LandingNavbar.module.scss';

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  // handle burger menu click
  const onMenuClick = () => {
    setMenu(!menu);
  };

  // Dynamically changes classNames
  let toggle_navbar_links_mobile: string = styles.toggle_navbar_links_mobile;
  let menu_item: string = styles.menu_item;
  if (menu) {
    menu_item = [styles.menu_item, styles.toggle].join(' ');
    toggle_navbar_links_mobile = [
      styles.toggle_navbar_links_mobile,
      styles.toggle_navbar_active
    ].join(' ');
  }

  return (
    <nav className={styles.navbar}>
      <button className={styles.menu} onClick={onMenuClick}>
        <span className={menu_item}></span>
        <span className={menu_item}></span>
        <span className={menu_item}></span>
      </button>
      <ul className={toggle_navbar_links_mobile}>
        <li className={styles.navbar_links_item_mobile}>
          <Link href='/courses'>
            <a
              className={styles.navbar_link_mobile}
              title='Courses Page Link'
              aria-label='Courses Page Link'
            >
              Academy
            </a>
          </Link>
        </li>
        <li className={styles.navbar_links_item_mobile}>
          <Link href='/stepdegree'>
            <a
              className={styles.navbar_link_mobile}
              title='Step Degree Page Link'
              aria-label='Step Degree Page Link'
            >
              StepDegree
            </a>
          </Link>
        </li>
        <li className={styles.navbar_links_item_mobile}>
          <Link href='/courses'>
            <a
              className={styles.navbar_link_mobile}
              title='Courses Page Link'
              aria-label='Courses Page Link'
            >
              TopSlot
            </a>
          </Link>
        </li>
        <li className={styles.navbar_links_item_mobile}>
          <Link href='/courses'>
            <a
              className={styles.navbar_link_mobile}
              title='Courses Page Link'
              aria-label='Courses Page Link'
            >
              Events
            </a>
          </Link>
        </li>
      </ul>
      <Link href='/'>
        <a className={styles.logo_container}>
          <svg
            className={styles.logo_svg}
            width='189'
            height='36'
            viewBox='0 0 189 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.86357 31.5871L30.7889 10.1193C32.6048 8.25641 32.6048 5.23603 30.7889 3.37311C28.9731 1.5102 26.029 1.5102 24.2132 3.37311L3.28782 24.8409C1.47198 26.7038 1.47198 29.7242 3.28782 31.5871C5.10367 33.45 8.04773 33.45 9.86357 31.5871Z'
              fill='#00FF6D'
              fillOpacity='0.48'
            />
            <path
              d='M5.93721 33.0312C8.48021 33.3979 10.8314 31.5802 11.1888 28.9712C11.5462 26.3623 9.77445 23.9501 7.23146 23.5835C4.68846 23.2168 2.33723 25.0345 1.97983 27.6435C1.62244 30.2524 3.39422 32.6646 5.93721 33.0312Z'
              fill='#2458FF'
            />
            <path
              d='M29.4452 25.021L19.8932 14.8733C18.1093 12.9781 15.1657 12.9254 13.3185 14.7555C11.4712 16.5856 11.4198 19.6056 13.2037 21.5007L22.7557 31.6485C24.5396 33.5436 27.4832 33.5963 29.3304 31.7662C31.1777 29.9361 31.2291 26.9162 29.4452 25.021Z'
              fill='#2458FF'
            />
            <path
              d='M50.3387 24.2313L30.9678 3.65219C29.1839 1.75705 26.2403 1.70434 24.393 3.53446C22.5458 5.36457 22.4944 8.38449 24.2783 10.2796L43.6492 30.8588C45.433 32.7539 48.3767 32.8066 50.2239 30.9765C52.0712 29.1464 52.1226 26.1265 50.3387 24.2313Z'
              fill='#2458FF'
            />
            <path
              d='M61.707 29V17.9961H59.7031V16.3203H61.707V15.0195C61.707 13.6602 62.0703 12.6094 62.7969 11.8672C63.5234 11.125 64.5508 10.7539 65.8789 10.7539C66.3789 10.7539 66.875 10.8203 67.3672 10.9531L67.25 12.7109C66.8828 12.6406 66.4922 12.6055 66.0781 12.6055C65.375 12.6055 64.832 12.8125 64.4492 13.2266C64.0664 13.6328 63.875 14.2188 63.875 14.9844V16.3203H66.582V17.9961H63.875V29H61.707ZM76.8125 27.7461C75.9688 28.7383 74.7305 29.2344 73.0977 29.2344C71.7461 29.2344 70.7148 28.8438 70.0039 28.0625C69.3008 27.2734 68.9453 26.1094 68.9375 24.5703V16.3203H71.1055V24.5117C71.1055 26.4336 71.8867 27.3945 73.4492 27.3945C75.1055 27.3945 76.207 26.7773 76.7539 25.543V16.3203H78.9219V29H76.8594L76.8125 27.7461ZM85.168 13.25V16.3203H87.5352V17.9961H85.168V25.8594C85.168 26.3672 85.2734 26.75 85.4844 27.0078C85.6953 27.2578 86.0547 27.3828 86.5625 27.3828C86.8125 27.3828 87.1562 27.3359 87.5938 27.2422V29C87.0234 29.1562 86.4688 29.2344 85.9297 29.2344C84.9609 29.2344 84.2305 28.9414 83.7383 28.3555C83.2461 27.7695 83 26.9375 83 25.8594V17.9961H80.6914V16.3203H83V13.25H85.168ZM97.9062 27.7461C97.0625 28.7383 95.8242 29.2344 94.1914 29.2344C92.8398 29.2344 91.8086 28.8438 91.0977 28.0625C90.3945 27.2734 90.0391 26.1094 90.0312 24.5703V16.3203H92.1992V24.5117C92.1992 26.4336 92.9805 27.3945 94.543 27.3945C96.1992 27.3945 97.3008 26.7773 97.8477 25.543V16.3203H100.016V29H97.9531L97.9062 27.7461ZM109.449 18.2656C109.121 18.2109 108.766 18.1836 108.383 18.1836C106.961 18.1836 105.996 18.7891 105.488 20V29H103.32V16.3203H105.43L105.465 17.7852C106.176 16.6523 107.184 16.0859 108.488 16.0859C108.91 16.0859 109.23 16.1406 109.449 16.25V18.2656ZM116.48 29.2344C114.762 29.2344 113.363 28.6719 112.285 27.5469C111.207 26.4141 110.668 24.9023 110.668 23.0117V22.6133C110.668 21.3555 110.906 20.2344 111.383 19.25C111.867 18.2578 112.539 17.4844 113.398 16.9297C114.266 16.3672 115.203 16.0859 116.211 16.0859C117.859 16.0859 119.141 16.6289 120.055 17.7148C120.969 18.8008 121.426 20.3555 121.426 22.3789V23.2812H112.836C112.867 24.5312 113.23 25.543 113.926 26.3164C114.629 27.082 115.52 27.4648 116.598 27.4648C117.363 27.4648 118.012 27.3086 118.543 26.9961C119.074 26.6836 119.539 26.2695 119.938 25.7539L121.262 26.7852C120.199 28.418 118.605 29.2344 116.48 29.2344ZM116.211 17.8672C115.336 17.8672 114.602 18.1875 114.008 18.8281C113.414 19.4609 113.047 20.3516 112.906 21.5H119.258V21.3359C119.195 20.2344 118.898 19.3828 118.367 18.7812C117.836 18.1719 117.117 17.8672 116.211 17.8672ZM125.984 16.3203L126.043 17.7266C126.973 16.6328 128.227 16.0859 129.805 16.0859C131.578 16.0859 132.785 16.7656 133.426 18.125C133.848 17.5156 134.395 17.0234 135.066 16.6484C135.746 16.2734 136.547 16.0859 137.469 16.0859C140.25 16.0859 141.664 17.5586 141.711 20.5039V29H139.543V20.6328C139.543 19.7266 139.336 19.0508 138.922 18.6055C138.508 18.1523 137.812 17.9258 136.836 17.9258C136.031 17.9258 135.363 18.168 134.832 18.6523C134.301 19.1289 133.992 19.7734 133.906 20.5859V29H131.727V20.6914C131.727 18.8477 130.824 17.9258 129.02 17.9258C127.598 17.9258 126.625 18.5312 126.102 19.7422V29H123.934V16.3203H125.984ZM147.348 29H145.18V16.3203H147.348V29ZM145.004 12.957C145.004 12.6055 145.109 12.3086 145.32 12.0664C145.539 11.8242 145.859 11.7031 146.281 11.7031C146.703 11.7031 147.023 11.8242 147.242 12.0664C147.461 12.3086 147.57 12.6055 147.57 12.957C147.57 13.3086 147.461 13.6016 147.242 13.8359C147.023 14.0703 146.703 14.1875 146.281 14.1875C145.859 14.1875 145.539 14.0703 145.32 13.8359C145.109 13.6016 145.004 13.3086 145.004 12.957ZM152.879 16.3203L152.949 17.9141C153.918 16.6953 155.184 16.0859 156.746 16.0859C159.426 16.0859 160.777 17.5977 160.801 20.6211V29H158.633V20.6094C158.625 19.6953 158.414 19.0195 158 18.582C157.594 18.1445 156.957 17.9258 156.09 17.9258C155.387 17.9258 154.77 18.1133 154.238 18.4883C153.707 18.8633 153.293 19.3555 152.996 19.9648V29H150.828V16.3203H152.879ZM163.543 22.5547C163.543 20.6094 164.004 19.0469 164.926 17.8672C165.848 16.6797 167.055 16.0859 168.547 16.0859C170.031 16.0859 171.207 16.5938 172.074 17.6094V11H174.242V29H172.25L172.145 27.6406C171.277 28.7031 170.07 29.2344 168.523 29.2344C167.055 29.2344 165.855 28.6328 164.926 27.4297C164.004 26.2266 163.543 24.6562 163.543 22.7188V22.5547ZM165.711 22.8008C165.711 24.2383 166.008 25.3633 166.602 26.1758C167.195 26.9883 168.016 27.3945 169.062 27.3945C170.438 27.3945 171.441 26.7773 172.074 25.543V19.7188C171.426 18.5234 170.43 17.9258 169.086 17.9258C168.023 17.9258 167.195 18.3359 166.602 19.1562C166.008 19.9766 165.711 21.1914 165.711 22.8008ZM185 25.6367C185 25.0508 184.777 24.5977 184.332 24.2773C183.895 23.9492 183.125 23.668 182.023 23.4336C180.93 23.1992 180.059 22.918 179.41 22.5898C178.77 22.2617 178.293 21.8711 177.98 21.418C177.676 20.9648 177.523 20.4258 177.523 19.8008C177.523 18.7617 177.961 17.8828 178.836 17.1641C179.719 16.4453 180.844 16.0859 182.211 16.0859C183.648 16.0859 184.812 16.457 185.703 17.1992C186.602 17.9414 187.051 18.8906 187.051 20.0469H184.871C184.871 19.4531 184.617 18.9414 184.109 18.5117C183.609 18.082 182.977 17.8672 182.211 17.8672C181.422 17.8672 180.805 18.0391 180.359 18.3828C179.914 18.7266 179.691 19.1758 179.691 19.7305C179.691 20.2539 179.898 20.6484 180.312 20.9141C180.727 21.1797 181.473 21.4336 182.551 21.6758C183.637 21.918 184.516 22.207 185.188 22.543C185.859 22.8789 186.355 23.2852 186.676 23.7617C187.004 24.2305 187.168 24.8047 187.168 25.4844C187.168 26.6172 186.715 27.5273 185.809 28.2148C184.902 28.8945 183.727 29.2344 182.281 29.2344C181.266 29.2344 180.367 29.0547 179.586 28.6953C178.805 28.3359 178.191 27.8359 177.746 27.1953C177.309 26.5469 177.09 25.8477 177.09 25.0977H179.258C179.297 25.8242 179.586 26.4023 180.125 26.832C180.672 27.2539 181.391 27.4648 182.281 27.4648C183.102 27.4648 183.758 27.3008 184.25 26.9727C184.75 26.6367 185 26.1914 185 25.6367Z'
              fill='black'
            />
          </svg>
        </a>
      </Link>
      <ul className={styles.navbar_links_container}>
        <li className={styles.navbar_links_item}>
          <p className={styles.navbar_links_detail}>Explore</p>
          <Link href='/courses'>
            <a
              className={styles.navbar_link}
              title='Courses Page Link'
              aria-label='Courses Page Link'
            >
              Academy
            </a>
          </Link>
        </li>
        <li className={styles.navbar_links_item}>
          <p
            className={[
              styles.navbar_links_detail,
              styles.blue_background
            ].join(' ')}
          >
            Coming soon
          </p>
          <Link href='/stepdegree'>
            <a
              className={styles.navbar_link}
              title='Step Degree Page Link'
              aria-label='Step Degree Page Link'
            >
              StepDegree
            </a>
          </Link>
        </li>
        <li className={styles.navbar_links_item}>
          <p
            className={[
              styles.navbar_links_detail,
              styles.blue_background
            ].join(' ')}
          >
            Coming soon
          </p>
          <Link href='/courses'>
            <a
              className={styles.navbar_link}
              title='Courses Page Link'
              aria-label='Courses Page Link'
            >
              TopSlot
            </a>
          </Link>
        </li>
        <li className={styles.navbar_links_item}>
          <Link href='/courses'>
            <a
              className={styles.navbar_link}
              title='Courses Page Link'
              aria-label='Courses Page Link'
            >
              Events
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles.signIn_container}>
        <Link href='/'>
          <a
            className={styles.signIn}
            title='Sign In Link'
            aria-label='Sign In Link'
          >
            <svg
              className={styles.signIn_svg}
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14 11.875C12.7188 11.875 12.1027 12.5 10 12.5C7.89732 12.5 7.28571 11.875 6 11.875C2.6875 11.875 0 14.2266 0 17.125V18.125C0 19.1602 0.959821 20 2.14286 20H17.8571C19.0402 20 20 19.1602 20 18.125V17.125C20 14.2266 17.3125 11.875 14 11.875ZM17.8571 18.125H2.14286V17.125C2.14286 15.2656 3.875 13.75 6 13.75C6.65179 13.75 7.70982 14.375 10 14.375C12.308 14.375 13.3438 13.75 14 13.75C16.125 13.75 17.8571 15.2656 17.8571 17.125V18.125ZM10 11.25C13.5491 11.25 16.4286 8.73047 16.4286 5.625C16.4286 2.51953 13.5491 0 10 0C6.45089 0 3.57143 2.51953 3.57143 5.625C3.57143 8.73047 6.45089 11.25 10 11.25ZM10 1.875C12.3616 1.875 14.2857 3.55859 14.2857 5.625C14.2857 7.69141 12.3616 9.375 10 9.375C7.63839 9.375 5.71429 7.69141 5.71429 5.625C5.71429 3.55859 7.63839 1.875 10 1.875Z'
                fill='white'
              />
            </svg>
            Sign In
          </a>
        </Link>
      </div>
      <div className={styles.signIn_container_mobile}>
        <Link href='/'>
          <a
            className={styles.signIn_mobile}
            title='Sign In Link'
            aria-label='Sign In Link'
          >
            <svg
              className={styles.signIn_svg}
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14 11.875C12.7188 11.875 12.1027 12.5 10 12.5C7.89732 12.5 7.28571 11.875 6 11.875C2.6875 11.875 0 14.2266 0 17.125V18.125C0 19.1602 0.959821 20 2.14286 20H17.8571C19.0402 20 20 19.1602 20 18.125V17.125C20 14.2266 17.3125 11.875 14 11.875ZM17.8571 18.125H2.14286V17.125C2.14286 15.2656 3.875 13.75 6 13.75C6.65179 13.75 7.70982 14.375 10 14.375C12.308 14.375 13.3438 13.75 14 13.75C16.125 13.75 17.8571 15.2656 17.8571 17.125V18.125ZM10 11.25C13.5491 11.25 16.4286 8.73047 16.4286 5.625C16.4286 2.51953 13.5491 0 10 0C6.45089 0 3.57143 2.51953 3.57143 5.625C3.57143 8.73047 6.45089 11.25 10 11.25ZM10 1.875C12.3616 1.875 14.2857 3.55859 14.2857 5.625C14.2857 7.69141 12.3616 9.375 10 9.375C7.63839 9.375 5.71429 7.69141 5.71429 5.625C5.71429 3.55859 7.63839 1.875 10 1.875Z'
                fill='black'
              />
            </svg>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
