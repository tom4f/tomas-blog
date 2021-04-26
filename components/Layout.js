import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
import React from 'react'

const Layout = ({ children, loginStatus, setLoginStatus, user, setUser, webToken, setWebToken }) => {
  
  return (
    <div className={styles.topContainer}>
      <Meta />
      <Nav loginStatus={ loginStatus } user={ user } setLoginStatus={ setLoginStatus } />
      <main className={styles.container}>
          <Header />
          {/* {children} */}
          {
              React.cloneElement(children, {
                loginStatus, setLoginStatus,
                webToken, setWebToken,
                user, setUser

              })
          }
        </main>
        <Footer />
    </div>
  )
}

export default Layout
