import React from 'react'

type ButtonProps = {
       btnStyle:React.CSSProperties
}
const Button = (props: ButtonProps) => {
  return (
    <div style={props.btnStyle}>ButtonStyle</div>
  )
}

export default Button;