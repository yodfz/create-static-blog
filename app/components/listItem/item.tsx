import React from 'react'
import styles from './index.less'
import Tag from '../tag'

const Item: React.FC<{ data: any }> = props => {
  const { data } = props
  console.log('data', data)
  return (
    <div className={styles.item}>
      <h2>{data.title}</h2>
      <div className={styles.taglist}>
        <Tag>{data.createdAt.split('T')[0]}</Tag>
        <Tag color="green">阅读:{data.viewCount}</Tag>
      </div>
      <p>{data.content.substr(0, 100)}</p>
    </div>
  )
}

export default React.memo(Item)
