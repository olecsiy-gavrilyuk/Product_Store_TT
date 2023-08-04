import { useRouter } from 'next/router';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

const BASE_URL = 'server-g0z5.onrender.com/'


const navigation = [
  {id: 1, title: 'Products', path:'/'},
  {id: 2, title: 'Orders', path:'/orders'}
];

const NavigationMenu = () => {
  const { pathname } = useRouter();
  console.log(pathname)

  return (
    <Navbar 
      bg="light" 
      className="d-flex flex-column p-5 NavMenu"
      style={{ height: '86vh' }}
    >
        <Image
          src={`${BASE_URL}/logo.jpg`}
          alt="Logo"
          width="50"
          height="50"
          className="d-block align-top rounded-circle justify-content-center "
        />

        <Nav className="ml-auto d-flex flex-column align-items-center">
          {navigation.map(({ id, title, path}) => (
            <Link 
              href={path} 
              className={classNames("nav-link",{
                'text-underline text-dark': pathname === path,
              })}
              key={id}
            >
              {title}
          </Link>
          ))}
        </Nav>
    </Navbar>
  );
}

export default NavigationMenu;