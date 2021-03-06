import React from 'react'
import Link from 'next/link'
import styles from './index.less'

const Head = (props: { index: number }) => {
  console.log('props', props)
  return (
    <div className={styles.head}>
      <div className={styles.block}>
        <Link href="/">
          <img
            className={styles.logo}
            src="https://www.yodfz.com/static/images/logo.jpg"
          />
        </Link>
        <ul className={styles.menu}>
          <li className={props.index === 0 ? styles.active : null}>
            <Link href="/">
              <a>首页</a>
            </Link>
          </li>
          <li className={props.index === 1 ? styles.active : null}>
            <Link href="/article">
              <a>文章</a>
            </Link>
          </li>
          <li className={props.index === 2 ? styles.active : null}>
            <Link href="/about">
              <a>关于我</a>
            </Link>
          </li>
          <li className={props.index === 3 ? styles.active : null}>
            <Link href="/donate">
              <a>捐赠</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Head
