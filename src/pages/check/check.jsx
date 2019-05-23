import React, {Component} from 'react'

import {Button, Icon, Layout } from  'antd'



import './check.less'

import car from '../images/car.jpg'

import CheckInput from '../../pages/check-input/check-input'

import LinkButton from '../../components/link-button'

const {  Footer,  Content } = Layout

export default class Check extends Component {

	showDetail = () => {
		this.props.history.push('/check/detail')

	}

	showVin = () => {
		this.props.history.push('/check/vin')

	}


	render() {


		return   <Layout className="layout">
			<h1>查个车</h1>
			<Content className="content" >
				<div onClick={this.showDetail}><img src={car} alt="car"/></div>
				<div>
					<CheckInput/>
				</div>
				<div>
					<div onClick={this.showVin}  style={{padding:'0 20px'}}><span>什么是车辆识别码(VIN)？</span></div>
				</div>

        <div  style={{padding:'0 10px',marginBottom:'-10px'}}>
					<Button type='primary' style={{width:90,height:60}}>查事故</Button>
					<Button type='primary' style={{width:90,height:60,margin:'0 35px'}}>查维保</Button>
					<Button type='primary' style={{width:90,height:60,verticalAlign: 'middle'}}>事故+维保<br/>(立减3元)</Button>
				</div>

			</Content>
			<Footer style={{padding:0,height:90,display:'flex'}}>
				<hr/>
				<div style={{margin:'0 37px'}}><LinkButton><Icon type="search"/><br/><span>查询</span></LinkButton></div>
				<div style={{margin:'0 37px'}}><LinkButton><Icon type="profile"/><br/><span>报告</span></LinkButton></div>
				<div style={{margin:'0 37px'}}><LinkButton><Icon type="user"/><br/><span>我的</span></LinkButton></div>
			</Footer>
		</Layout>


	}
}

