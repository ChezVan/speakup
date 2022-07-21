import React from 'react'
import LogoImg from '../speaker_icon.jpeg'
const style =
{
    width: "100px",
    height: "100px",
    borderRadius: "150px"

}

function Logo() {
  return (
    <img src={LogoImg} style={style} alt="logo" />
  )
}

export default Logo