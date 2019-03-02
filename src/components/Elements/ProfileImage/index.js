import React, { Component } from 'react'
import { imgSrc } from '../../../utils/common'

export default class Image extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageSrc: imgSrc(props.src)
    }
  }

  handleError = () => {
    const { fallbackImg } = this.props
    if (fallbackImg) {
      this.setState({ imageSrc: fallbackImg })
    }
  }

  render () {
    const { alt, style } = this.props
    const { imageSrc } = this.state
    return (
      imageSrc && <img alt={alt} src={imageSrc} onError={this.handleError} style={{ ...style }} />
    )
  }
}
