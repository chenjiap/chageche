import React, {Component} from 'react'

import detail from '../images/detail.jpg'

import {Icon} from 'antd'

export default class CheckDetail extends Component {

	showCar = () => {
		this.props.history.goBack('/check')

	}


  render () {
    return <div style={{minHeight:'100%'}}>
			<div onClick={this.showCar}><Icon type="left" style={{fontSize:40}}/></div>
          <img src={detail} alt="detail"/>
    </div>


  }
}

