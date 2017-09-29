import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ZmitiResultApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			keyworks:''
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {

		var mainStyle = {
			background:'url(./assets/images/bg.jpg) repeat-y ',
		}

		var resultStyle ={
			background:'#e8f1ff',
			minHeight:this.viewH - 200
		}

		return (
			<div onTouchStart={this.blurInput.bind(this)} className='zmiti-result-main-ui' ref='zmiti-result-main-ui' style={{height:this.viewH}}>
				<div className='zmiti-result-C' style={mainStyle}>
					<div className="zmiti-result-main" style={resultStyle}>
						<div className='zmiti-result-title'><img src='./assets/images/my-read.png'/></div>
						<div className='zmiti-search-input'>
							<img src='./assets/images/search-ico.png'/>
							<input ref='input' value={this.state.keyworks} onChange={e=>{this.setState({keyworks:e.target.value})}} type='text' placeholder='手机号/微信号/姓名'/>
						</div>
						<div onTouchTap={this.beginSearch.bind(this)} className={'zmiti-search-btn '+ (this.state.search?'active':'')}>
							<section></section>
							<div>搜索</div>
						</div>
						<div className='zmiti-search-result-tip' ref='zmiti-search-result-tip'>搜索结果:</div>

						{this.props.list.length<=0 &&<div className='zmiti-no-result'>暂无结果！</div>}
						{this.props.list.map((item,i)=>{
							return <div key={i} className='zmiti-result-item-C'>
								<div className='zmiti-result-type'>{item.type}</div>
								{item.children.map((child,k)=>{
									return <section className='zmiti-result-item' key={k}>
											<span className='zmiti-result-num'>{k+1}</span>

											<div>
												<img onTouchTap={this.fillqrcode.bind(this,child.qrcodeurl)}  src={child.qrcodeurl||'./assets/images/qrcode.jpg'}/>
												{window.isAndroid && <span>点击图片获取二维码</span>}
												<div>{child.booktitle}</div>
												<div>{child.date}</div>
											</div>
									</section>
								})}
							</div>
						})}	
					</div>
				</div>
			</div>
		);
	}

	fillqrcode(qrcodeurl,e){
		
		if(window.isAndroid){
			let {obserable } = this.props;
			obserable.trigger({
				type:'fillqrcode',
				data:{
					qrcodeurl,
				}
			})
		}
		
		
	}

	blurInput(e){
		if(e.target.nodeName === "INPUT"){
			return;
		}
		this.refs['input'].blur();
	}

	beginSearch(){
		this.setState({
			search:true
		});
		this.refs['input'].blur();
		let {obserable} = this.props;
		setTimeout(()=>{

			this.setState({
				search:false
			});

			var s = this;

			$.ajax({
				url:"http://api.zmiti.com/v2/book/get_bookqrcode",
				data:{
					userinfo:s.state.keyworks
				}
			}).done((data)=>{
				if(data.getret === 0){
					obserable.trigger({
						type:'fillData',
						data:data.list
					});


					setTimeout(()=>{
						s.scroll.refresh();
						if(data.list.length > 2){
							s.scroll.scrollTo(0,-s.refs['zmiti-search-result-tip'].offsetTop - 100,600);;
						}
						var items = $('.zmiti-result-item');
						var list = [];
						var children = [];
						data.list.map((item,i)=>{
							item.children.map((child,k)=>{
								child.top = items.eq(k*(i+1)).offset().top
								list.push(child);
							})
						});
						console.log(list)
						obserable.trigger({
							type:'fillQrList',
							data:list
						});
					},400);
				}
			},()=>{});

		},200);


	}


	componentDidMount() {
		let {IScroll,obserable } = this.props;
		this.scroll =  new IScroll(this.refs['zmiti-result-main-ui'],{
			scrollbars:true
		});

		obserable.on('refreshScroll',()=>{
			this.scroll.refresh();
		})


	}
}
export default PubCom(ZmitiResultApp);