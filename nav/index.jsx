import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ZmitiNavApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div className='zmiti-nav-main-ui'>
				<div className="zmiti-nav-top01"></div>
				<div className="zmiti-nav-btn02">
					<button onTouchTap={this.entry.bind(this)}>直接入驻</button>
				</div>
				<div className="zmiti-nav-btn01">
					<button onTouchTap={this.openlink.bind(this)}>直接报名</button>					
				</div>
				<div className="zmiti-nav-bot01"></div>

			</div>
		);
	}

	entry(){
		let {obserable} = this.props;
		obserable.trigger({
			type:"entryResult"
		})
	}

	componentDidMount() {

	}
	openlink(){
		window.location="http://cn.mikecrm.com/7cDhYqu?from=groupmessage";
	}
}
export default PubCom(ZmitiNavApp);