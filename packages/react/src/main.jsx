import React from 'react'
import ReactDOM from 'react-dom'
import ReactRightMenu from './index'
const options =  [{
  type: 'li',
  text: '异步 300ms'
}]
ReactDOM.render(
  <React.StrictMode>
    <ReactRightMenu options={options}>
      <div style={{
      width: '200px',
      height: '400px',
      margin: '100px 200px',
      background:'blue'
      }}>测试</div>
    
    </ReactRightMenu>
  </React.StrictMode>,
  document.getElementById('root')
)
