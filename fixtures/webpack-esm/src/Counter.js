import {count} from './count.js'

const counterStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  fontSize: '20px',
}

export function Counter() {
  return <div style={counterStyle}>{count}</div>
}
