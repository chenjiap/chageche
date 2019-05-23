import React, {Component} from 'react'

import {Icon} from 'antd'

import vin from '../images/Vin.jpg'

export default class CheckVin extends Component {

	showCar = () => {
		this.props.history.goBack('/check')

	}
  render () {
    return <div style={{minHeight:'100%'}}>
			<div onClick={this.showCar}><Icon type="left" style={{fontSize:40}}/></div>
			<img src={vin} alt="detail"/>
		</div>


  }
}

