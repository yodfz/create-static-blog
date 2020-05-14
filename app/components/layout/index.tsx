import React from 'react'
import styles from './index.less'

/**
 * 行布局
 * @param param0
 */
const LayoutRow: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return <div className={[styles.flex, className].join(' ')}>{children}</div>
}

/**
 * 列布局
 * @param param0
 */
const LayoutCol: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <div className={[styles.flex, styles.flexCol, className].join(' ')}>
      {children}
    </div>
  )
}

export { LayoutRow, LayoutCol }

export default LayoutRow
