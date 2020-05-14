import React from 'react'
import styles from './index.less'

const Footer = props => {
  return (
    <div className={styles.index}>
      © 2017-2020 写代码的熊猫. All Rights Reserved 浙ICP备14015442号
    </div>
  )
}

export default React.memo(Footer)
