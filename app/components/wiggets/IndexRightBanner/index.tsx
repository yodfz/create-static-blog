import React from 'react'
import styles from 'index.less'

// 主要存放侧边
const IndexRightBanner = () => {
  return (
    <ul className={styles.IndexRightBanner}>
      <li>
        <a href="">
          <img />
        </a>
      </li>
    </ul>
  )
}

export default React.memo(IndexRightBanner)
