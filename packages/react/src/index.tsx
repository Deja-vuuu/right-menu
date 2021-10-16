import React, { memo, useEffect,useRef } from 'react'
import RightMenu from '@right-menu/core'

// type IReactRightMenuProps = {
//   options:
// }
const ReactRightMenu = memo((props)=> {
  console.log(props)
  const myRef = useRef()
  useEffect(()=>{
    new RightMenu('.container', props.options)
  },[myRef])
  return (
    <React.Fragment>
      {
        React.Children.map(props.children, (element) => {
          return (React.createElement('div', null, element))
        })
      }
    </React.Fragment>
  )
})

export default ReactRightMenu
