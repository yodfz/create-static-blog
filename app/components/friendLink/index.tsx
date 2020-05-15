import React from 'react'
import styles from './index.less'

const Paging: React.FC<{}> = () => {
  return (
    <div className={styles.links}>
      <div className={styles.title}>友情链接</div>
      <ul>
        <li>
          <a href="http://starx.me/" target="_blank">
            starx.me 蒋正兴
          </a>
        </li>
        <li>
          <a href="http://www.ziou.club/" target="_blank">
            紫和服饰 &#8211; 上饶西服高级定制、职业装定制、婚服定制
          </a>
        </li>
      </ul>
    </div>
  )
}

export default React.memo(Paging)
