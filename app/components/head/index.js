import React from 'react'
import styles from './index.less'

const Head = props => {
  console.log('props', props)
  return (
    <div className={styles.head}>
      <div className={styles.block}>
        <ul className={styles.menu}>
          <li className={props.index === 0 ? styles.active : null}>
            <a href="/">首页</a>
          </li>
          <li className={props.index === 1 ? styles.active : null}>
            <a href="/article">文章</a>
          </li>
          <li className={props.index === 2 ? styles.active : null}>
            <a href="/about">关于我</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Head
