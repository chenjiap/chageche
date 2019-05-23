import React, {Component} from 'react'
import {
	Form,
	Select,
	Input,
	Icon
} from 'antd'

const Item = Form.Item

/*
 添加分类的form组件
 */
    class CheckInput extends Component {




	render() {
		const { getFieldDecorator } = this.props.form

		const Option = Select.Option

		const selectBefore = (
			<Select defaultValue="1" style={{ width: 90 }}>
				<Option value="1">粤</Option>
				<Option value="2">京</Option>
				<Option value="3">津</Option>
				<Option value="4">冀</Option>
				<Option value="5">晋</Option>
				<Option value="6">蒙</Option>
				<Option value="7">辽</Option>
				<Option value="8">吉</Option>
				<Option value="9">黑</Option>
				<Option value="10">沪</Option>
				<Option value="11">苏</Option>
				<Option value="12">浙</Option>
				<Option value="13">皖</Option>
				<Option value="14">闽</Option>
				<Option value="15">赣</Option>
				<Option value="16">鲁</Option>
				<Option value="17">豫</Option>
				<Option value="18">鄂</Option>
				<Option value="19">湘</Option>
				<Option value="20">桂</Option>
				<Option value="21">琼</Option>
				<Option value="22">川</Option>
				<Option value="23">贵</Option>
				<Option value="24">云</Option>
				<Option value="25">渝</Option>
				<Option value="26">藏</Option>
				<Option value="27">陕</Option>
				<Option value="28">甘</Option>
				<Option value="29">青</Option>
				<Option value="30">宁</Option>
				<Option value="31">新</Option>
				<Option value="32">港</Option>
				<Option value="33">澳</Option>
				<Option value="34">台</Option>





			</Select>
		);

		return (
			<div style={{padding:'20px 20px'}}>

					{getFieldDecorator('VIN', {
						rules: [
							{
								required: true,
								message: 'Input something!',
							},
							{ max: 2, message: '已输入0位，还差17位' }

							],
					})(
						<Input
							style={{marginBottom:10}}
							suffix={<Icon type="camera" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="请输入车辆识别码(VIN)"
						/>,
					)}



					{getFieldDecorator('IdNumber', {
						rules: [],
					})(
						<Input
							style={{marginBottom:10}}
							suffix={<Icon type="plus-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="请输入历任证件号(选填，可提高查询率)"
						/>,
					)}
				{getFieldDecorator('License', {
					rules: [{ required: true, message: 'Please input your username!' }],
				})(
					<Input
						style={{marginBottom:10}}
						addonBefore={selectBefore}
						suffix={<Icon type="plus-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder="请输入历任车牌号(选填，可提高查询率)"
					/>,
				)}
				{getFieldDecorator('engine', {
					rules: [{ required: true, message: 'Please input your username!' }],
				})(
					<Input
						style={{marginBottom:10}}

						placeholder="请输入发动机号(选填，可提高查询率)"
					/>,
				)}
			</div>
		)
	}
}
export default Form.create()(CheckInput)