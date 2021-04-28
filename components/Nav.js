import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { photoGalleryLink } from '../config'

export default function Nav( { loginStatus, user, setLoginStatus } ) {
  return (
    <header  className={navStyles.nav_container}>
        <h1 className={navStyles.logo}>
          <span>Olča</span>.cz
        </h1>
        <nav className={navStyles.nav}>
          <ul>
            { loginStatus ? <li>
                              { user }: <button onClick={ () => setLoginStatus( false ) } >odhlásit</button>
                            </li>
                          : null
            }
            <li>
              <Link href='/'>Start</Link>
            </li>
            <li>
              <Link href='/about'>O&nbsp;mě</Link>
            </li>
            <li>
              <Link href={ photoGalleryLink }>Fotogalerie</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}