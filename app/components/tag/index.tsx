import React from 'react'
import styles from './index.less'

const Tag: React.FC<{
  text?: string
  children?: React.ReactNode
  color?: 'green' | 'yellow'
}> = props => {
  const { text, children, color } = props
  return (
    <span className={[styles.index, styles[color]].join(' ')}>
      {children || text}
    </span>
  )
}

export default React.memo(Tag)
