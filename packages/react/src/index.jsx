import React, { useEffect,useRef } from 'react'
import RightMenu from '@right-menu/core'
const ReactRightMenu = (props)=> {
  console.log(props)
  const myRef = useRef()
  useEffect(()=>{
    new RightMenu('.container', props.options)
  },[myRef])
  return (
    <React.Fragment>
      {
        React.Children.map(props.children, (element) => {
          return (React.createElement('div', { className: 'container', ref: myRef }, element))
        })
      }
    </React.Fragment>
  )
}

export default ReactRightMenu
