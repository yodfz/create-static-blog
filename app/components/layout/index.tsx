import React from 'react'
import styles from './index.less'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.flex}>{children}</div>
}

export default Layout
