import React from 'react'

const Index = props => {
  const [count, setCount] = useState(0)
  return (
    <div>
      测试{count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}>
        点击+1
      </button>
    </div>
  )
}

export default Index
