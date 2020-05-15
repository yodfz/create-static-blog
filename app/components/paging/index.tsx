import React from 'react'

const Paging: React.FC<{
  total?: number
  current: number
  size?: number
}> = props => {
  const { total = 0, current = 1, size = 10 } = props
  const allPage = Math.ceil(total / size)
  return (
    <div>
      <div>首页</div>
      <div>上一页</div>
      <div>下一页</div>
      <div>末页</div>
    </div>
  )
}

export default React.memo(Paging)
