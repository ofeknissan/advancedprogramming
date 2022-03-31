import React from 'react'
import "./Alert.css"
const Alert = (props) => {
  return (
    <div class="alert alert-danger mb-3" role="alert">
        {props.children}
    </div>
  )
}

export default Alert