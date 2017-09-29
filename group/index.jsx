import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';
class ZmitiGroupListApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			display:'none',
			dialogname:'',
			dialogcode:0,
			dialogimgurl:'',
			dialogtext:'',
			dialogdes:'',
			dialogtips:'',
			dataCode:[{
				key:1,
				name:'白鹿原',
				code:85012,
				imgurl:'./assets/images/a2-85012.jpg',
				text:'1.长按图片识别二维码，添加机器人小管家为好友',des:'2.发送以上验证码给小管家，即可被邀请入群',tips:'3.如识别二维码失败，请添加微信号：ReadToLead',
			},{
				key:2,
				name:'解忧杂货店',
				code:85102,
				imgurl:'./assets/images/a3-85102.jpg',
			},{
				key:3,
				name:'选书中',
				code:1721,
				imgurl:'./assets/images/a4-1721.jpg',
			},{
				key:4,
				name:'大秦帝国',
				code:85192,
				imgurl:'./assets/images/a5-85192.jpg',
			},{
				key:5,
				name:'追风筝的人',
				code:85222,
				imgurl:'./assets/images/a6-85222.jpg',
			},{
				key:6,
				name:'明朝那些事儿',
				code:2041,
				imgurl:'./assets/images/a7-2041.jpg',
			},{
				key:7,
				name:'群山回唱',
				code:84032,
				imgurl:'./assets/images/a8-84032.jpg',
			},{
				key:8,
				name:'人文大本营II',
				code:86162,
				imgurl:'./assets/images/a1-86162.jpg',
			},{
				key:9,
				name:'丝绸之路：一部全新的世界史',
				code:81052,
				imgurl:'./assets/images/b1-81052.jpg',
			},{
				key:10,
				name:'选书中',
				code:81202,
				imgurl:'./assets/images/b2-81202.jpg',
			},{
				key:11,
				name:'杨绛传',
				code:5421,
				imgurl:'./assets/images/b3-5421.jpg',
			},{
				key:12,
				name:'中国在梁庄',
				code:83062,
				imgurl:'./assets/images/b4-83062.jpg',
			},{
				key:13,
				name:'寒时冰说：未来二十年经济大趋势',
				code:83102,
				imgurl:'./assets/images/c1-83102.jpg',
			},{
				key:14,
				name:'互联网+：国家战略行动路线图',
				code:83122,
				imgurl:'./assets/images/c2-83122.jpg',
			},{
				key:15,
				name:'从0到1：开启商业与未来的秘密',
				code:86192,
				imgurl:'./assets/images/c3-86192.jpg',
			},{
				key:16,
				name:'愿你的青春不负梦想',
				code:86012,
				imgurl:'./assets/images/d1-86012.jpg',
			},{
				key:17,
				name:'我们仨',
				code:86172,
				imgurl:'./assets/images/d2-86172.jpg',
			},{
				key:19,
				name:'摩根写给儿子的32封信',
				code:7526,
				imgurl:'./assets/images/e2.jpg',
			},{
				key:18,
				name:'亲爱的安德烈',
				code:7627,
				imgurl:'./assets/images/e1.jpg',
			},{
				key:20,
				name:'遇见孩子遇见更好的自己',
				code:86202,
				imgurl:'./assets/images/e3.jpg',
			},{
				key:21,
				name:'黄帝内经',
				code:86132,
				imgurl:'./assets/images/f1-86132.jpg',
			},{
				key:22,
				name:'经管创业悦读室',
				code:7528,
				imgurl:'./assets/images/c4-7528.jpg',
			},{
				key:23,
				name:'诗歌大厦',
				code:2162,
				imgurl:'./assets/images/g1-2162.jpg',
			},{
				key:24,
				name:'亲子4号悦读室',
				code:6092,
				imgurl:'./assets/images/e4-6092.jpg',
			},{
				key:25,
				name:'养生1号悦读室',
				code:86132,
				imgurl:'./assets/images/q1-86132.jpg',
			},{
				key:26,
				name:'国学大厦',
				code:30304,
				imgurl:'./assets/images/g2-30304.jpg',
			}],
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div className='zmiti-group-main-ui'>
				<div className="zmiti-group-top01"></div>
				<div className="zmiti-group-h1">主题大厦读书报名</div>
				<div className="zmiti-group-prolist" ref='zmiti-group-prolist' style={{height:800}}>
					<div className="zmiti-group-province" style={{height:84*19+100,paddingBottom:10}}>
						<div className="zmiti-group-paddinginner">
							<div className="zmiti-group-h3">人文类：</div>
							<ul>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,1)}>1号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,2)}>2号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,3)}>3号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,4)}>4号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,5)}>5号悦读室</a></li>
														
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,7)}>6号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,8)}>7号悦读室</a></li>
								
							</ul>
							<div className="zmiti-group-h3">社科类：</div>
							<ul>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,9)}>1号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,10)}>2号悦读室</a></li>						
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,11)}>3号悦读室</a></li>						
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,12)}>4号悦读室</a></li>						
							
							</ul>
							<div className="zmiti-group-h3">经管类：</div>
							<ul>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,13)}>1号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,14)}>2号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,15)}>3号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,22)}>创业悦读室</a></li>						
							</ul>
							<div className="zmiti-group-h3">励志类：</div>
							<ul>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,16)}>1号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,17)}>2号悦读室</a></li>						
							</ul>
							<div className="zmiti-group-h3">亲子类：</div>
							<ul>														
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,19)}>1号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,18)}>2号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,20)}>3号悦读室</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,24)}>4号悦读室</a></li>
							</ul>
							<div className="zmiti-group-h3">养生类：</div>
							<ul>														
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,25)}>养生1号悦读室</a></li>
							
							</ul>
							<div className="zmiti-group-h3">其他类：</div>
							<ul>														
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,23)}>诗歌大厦</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,26)}>国学大厦</a></li>
							</ul>

						</div>
						
					</div>
				</div>				
				<div className="zmiti-group-dialog" style={{display:this.state.display}}>
					<div className="zmiti-group-close"><span onTouchTap={this.dialogClose.bind(this)}>×</span></div>
					<div className="zmiti-group-dialog-inner">
						<div className="zmiti-group-dialog-tit"></div>
						<img className="zmiti-group-dialog-imgs" src={this.state.dialogimgurl}/>
						<div className="zmiti-group-dialog-code">验证码：{this.state.dialogcode}</div>
						<div className="zmiti-group-dialog-tips">提示：</div>
						<div className="zmiti-group-dialog-text">
							<ol>
								<li>长按图片识别二维码，添加机器人小管家为好友</li>
								<li>发送以上验证码给小管家，即可被邀请入群</li>
								<li>如识别二维码失败，请添加微信号：ReadToLead 并发送阅读群名。</li>
							</ol>
						</div>
					</div>
					
				</div>
			</div>

		);
	}


	componentDidMount() {
		let {IScroll} = this.props;

		this.scroll = new IScroll(this.refs['zmiti-group-prolist'],{
			scrollbars:true
		});

		setTimeout(()=>{
			this.scroll.refresh();
		},1000)
	}
	provinceDialog(value){
		var s = this;
		var name,text,des,imgurl,code,tips;
		//console.log(value);
		var dataCode=this.state.dataCode;
		$.each(dataCode,function(i,item){
			if(item.key===value){				
				name=item.name;
				imgurl=item.imgurl;
				text=item.text;
				des=item.des;
				code=item.code;
				tips=item.tips;
			}
		})
		this.setState({
			dialogname:name,
			dialogtext:text,
			dialogdes:des,
			dialogtips:tips,
			dialogimgurl:imgurl,
			dialogcode:code,
			display:'block',
		})
		s.forceUpdate();
	}
	dialogClose(){
		var s=this;
		s.setState({
			display:'none',
			dialogname:'',
			dialogcode:0,
			dialogimgurl:'',
			dialogtext:'',
			dialogdes:'',
			dialogtips:'',
		})
	}
	openlink(){
		window.location="http://cn.mikecrm.com/7cDhYqu?from=groupmessage";
	}

}
export default PubCom(ZmitiGroupListApp);