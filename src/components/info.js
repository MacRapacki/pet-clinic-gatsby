import { checkPropTypes } from "prop-types"
import React from "react"

export default function Info(props) {
  return <h1 style={{ color: "red", fontSize: "20px" }}>{props.infoText}</h1>
}
