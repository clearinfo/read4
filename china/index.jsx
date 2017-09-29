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
				name:'风光群',
				code:85012,
				imgurl:'./assets/images/china-a1.jpg',
				text:'1.长按图片识别二维码，添加机器人小管家为好友',des:'2.发送以上验证码给小管家，即可被邀请入群',tips:'3.如识别二维码失败，请添加微信号：ReadToLead',
			},{
				key:2,
				name:'航拍群',
				code:85102,
				imgurl:'./assets/images/china-a2.jpg',
			},{
				key:3,
				name:'后期制作群',
				code:1721,
				imgurl:'./assets/images/china-a3.jpg',
			},{
				key:4,
				name:'户外旅行摄影群',
				code:85192,
				imgurl:'./assets/images/china-a4.jpg',
			},{
				key:5,
				name:'纪实群',
				code:85222,
				imgurl:'./assets/images/china-a5.jpg',
			},{
				key:6,
				name:'美食群',
				code:2041,
				imgurl:'./assets/images/china-a6.jpg',
			},{
				key:7,
				name:'人物摄影群',
				code:84032,
				imgurl:'./assets/images/china-a7.jpg',
			},{
				key:8,
				name:'手机摄影群',
				code:86162,
				imgurl:'./assets/images/china-a8.jpg',
			},{
				key:9,
				name:'体育群',
				code:81052,
				imgurl:'./assets/images/china-a9.jpg',
			},{
				key:10,
				name:'文化摄影群',
				code:81202,
				imgurl:'./assets/images/china-a10.jpg',
			},{
				key:11,
				name:'综合群',
				code:5421,
				imgurl:'./assets/images/china-a11.jpg',
			},{
				key:12,
				name:'安徽群',
				code:83062,
				imgurl:'./assets/images/china-b1.jpg',
			},{
				key:13,
				name:'北京群',
				code:83102,
				imgurl:'./assets/images/china-b2.jpg',
			},{
				key:14,
				name:'福建群',
				code:83122,
				imgurl:'./assets/images/china-b3.jpg',
			},{
				key:15,
				name:'甘肃群',
				code:86192,
				imgurl:'./assets/images/china-b4.jpg',
			},{
				key:16,
				name:'广东群',
				code:86012,
				imgurl:'./assets/images/china-b5.jpg',
			},{
				key:17,
				name:'广西群',
				code:86172,
				imgurl:'./assets/images/china-b6.jpg',
			},{
				key:19,
				name:'贵州群',
				code:7526,
				imgurl:'./assets/images/china-b7.jpg',
			},{
				key:18,
				name:'海南群',
				code:7627,
				imgurl:'./assets/images/china-b8.jpg',
			},{
				key:20,
				name:'河北群',
				code:86202,
				imgurl:'./assets/images/china-b9.jpg',
			},{
				key:21,
				name:'河南群',
				code:86132,
				imgurl:'./assets/images/china-b10.jpg',
			},{
				key:22,
				name:'黑龙江群',
				code:7528,
				imgurl:'./assets/images/china-b11.jpg',
			},{
				key:23,
				name:'湖北群',
				code:2162,
				imgurl:'./assets/images/china-b12.jpg',
			},{
				key:24,
				name:'湖南群',
				code:6092,
				imgurl:'./assets/images/china-b13.jpg',
			},{
				key:25,
				name:'吉林群',
				code:86132,
				imgurl:'./assets/images/china-b14.jpg',
			},{
				key:26,
				name:'江苏群',
				code:30304,
				imgurl:'./assets/images/china-b15.jpg',
			},{
				key:27,
				name:'江西群',
				code:30304,
				imgurl:'./assets/images/china-b16.jpg',
			},{
				key:28,
				name:'辽宁群',
				code:30304,
				imgurl:'./assets/images/china-b17.jpg',
			},{
				key:29,
				name:'内蒙古群',
				code:30304,
				imgurl:'./assets/images/china-b18.jpg',
			},{
				key:30,
				name:'宁夏群',
				code:30304,
				imgurl:'./assets/images/china-b19.jpg',
			},{
				key:31,
				name:'青海群',
				code:30304,
				imgurl:'./assets/images/china-b20.jpg',
			},{
				key:32,
				name:'山东群',
				code:30304,
				imgurl:'./assets/images/china-b21.jpg',
			},{
				key:33,
				name:'山西群',
				code:30304,
				imgurl:'./assets/images/china-b22.jpg',
			},{
				key:34,
				name:'陕西群',
				code:30304,
				imgurl:'./assets/images/china-b23.jpg',
			},{
				key:35,
				name:'上海群',
				code:30304,
				imgurl:'./assets/images/china-b24.jpg',
			},{
				key:36,
				name:'四川群',
				code:30304,
				imgurl:'./assets/images/china-b25.jpg',
			},{
				key:37,
				name:'天津群',
				code:30304,
				imgurl:'./assets/images/china-b26.jpg',
			},{
				key:38,
				name:'西藏群',
				code:30304,
				imgurl:'./assets/images/china-b27.jpg',
			},{
				key:39,
				name:'新疆群',
				code:30304,
				imgurl:'./assets/images/china-b28.jpg',
			},{
				key:40,
				name:'云南群',
				code:30304,
				imgurl:'./assets/images/china-b29.jpg',
			},{
				key:41,
				name:'浙江群',
				code:30304,
				imgurl:'./assets/images/china-b30.jpg',
			},{
				key:42,
				name:'重庆群',
				code:30304,
				imgurl:'./assets/images/china-b31.jpg',
			},{
				key:43,
				name:'安徽大学',
				code:30304,
				imgurl:'./assets/images/china-c1.jpg',
			},{
				key:44,
				name:'北京大学',
				code:30304,
				imgurl:'./assets/images/china-c2.jpg',
			},{
				key:45,
				name:'北京师范大学',
				code:30304,
				imgurl:'./assets/images/china-c3.jpg',
			},{
				key:46,
				name:'东北农业大学',
				code:30304,
				imgurl:'./assets/images/china-c4.jpg',
			},{
				key:47,
				name:'河北传媒大学',
				code:30304,
				imgurl:'./assets/images/china-c5.jpg',
			},{
				key:48,
				name:'河北美术学院群',
				code:30304,
				imgurl:'./assets/images/china-c6.jpg',
			},{
				key:49,
				name:'河南财经大学',
				code:30304,
				imgurl:'./assets/images/china-c7.jpg',
			},{
				key:50,
				name:'河南大学',
				code:30304,
				imgurl:'./assets/images/china-c8.jpg',
			},{
				key:51,
				name:'河南工业大学',
				code:30304,
				imgurl:'./assets/images/china-c9.jpg',
			},{
				key:52,
				name:'湖南农业大学',
				code:30304,
				imgurl:'./assets/images/china-c10.jpg',
			},{
				key:53,
				name:'吉林师范大学',
				code:30304,
				imgurl:'./assets/images/china-c11.jpg',
			},{
				key:54,
				name:'兰州财经大学',
				code:30304,
				imgurl:'./assets/images/china-c12.jpg',
			},{
				key:55,
				name:'兰州大学',
				code:30304,
				imgurl:'./assets/images/china-c13.jpg',
			},{
				key:56,
				name:'聊城大学',
				code:30304,
				imgurl:'./assets/images/china-c14.jpg',
			},{
				key:57,
				name:'清华大学',
				code:30304,
				imgurl:'./assets/images/china-c15.jpg',
			},{
				key:58,
				name:'人民大学',
				code:30304,
				imgurl:'./assets/images/china-c16.jpg',
			},{
				key:59,
				name:'山东青年政治学院',
				code:30304,
				imgurl:'./assets/images/china-c17.jpg',
			},{
				key:60,
				name:'山西农业大学',
				code:30304,
				imgurl:'./assets/images/china-c18.jpg',
			},{
				key:61,
				name:'西南大学',
				code:30304,
				imgurl:'./assets/images/china-c19.jpg',
			},{
				key:62,
				name:'浙江大学',
				code:30304,
				imgurl:'./assets/images/china-c20.jpg',
			},{
				key:63,
				name:'郑州大学',
				code:30304,
				imgurl:'./assets/images/china-c21.jpg',
			},{
				key:64,
				name:'郑州航空工业管理学院',
				code:30304,
				imgurl:'./assets/images/china-c22.jpg',
			},{
				key:65,
				name:'中国矿业大学',
				code:30304,
				imgurl:'./assets/images/china-c23.jpg',
			}],
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div className='zmiti-china-main-ui'>
				<div className="zmiti-china-top01"></div>
				<div className="zmiti-china-prolist" ref='zmiti-china-prolist' style={{height:800}}>
					<div className="zmiti-china-province" style={{height:84*39+100,paddingBottom:10}}>
						<div className="zmiti-china-paddinginner">
							<div className="zmiti-china-h3">主题群：</div>
							<ul>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,1)}>风光群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,2)}>航拍群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,3)}>后期制作群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,4)}>户外旅行摄影群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,5)}>纪实群</a></li>
														
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,6)}>美食群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,7)}>人物摄影群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,8)}>手机摄影群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,9)}>体育群</a></li>						
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,10)}>文化摄影群</a></li>						
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,11)}>综合群</a></li>		
							</ul>
							<div className="zmiti-china-h3">地方群：</div>
							<ul>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,12)}>安徽群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,13)}>北京群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,14)}>福建群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,15)}>甘肃群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,16)}>广东群</a></li>

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,17)}>广西群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,18)}>贵州群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,19)}>海南群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,20)}>河北群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,21)}>河南群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,22)}>黑龙江群</a></li>

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,23)}>湖北群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,24)}>湖南群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,25)}>吉林群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,26)}>江苏群</a></li>

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,27)}>江西群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,28)}>辽宁群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,29)}>内蒙古群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,30)}>宁夏群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,31)}>青海群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,32)}>山东群</a></li>

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,33)}>山西群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,34)}>陕西群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,35)}>上海群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,36)}>四川群</a></li>

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,37)}>天津群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,38)}>西藏群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,39)}>新疆群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,40)}>云南群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,41)}>浙江群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,42)}>重庆群</a></li>					
							
							</ul>
							<div className="zmiti-china-h3">高校群：</div>
							<ul>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,43)}>安徽大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,44)}>北京大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,45)}>北京师范大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,46)}>东北农业大学</a></li>	

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,47)}>河北传媒大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,48)}>河北美术学院群</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,49)}>河南财经大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,50)}>河南大学</a></li>	

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,51)}>河南工业大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,52)}>湖南农业大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,53)}>吉林师范大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,54)}>兰州财经大学</a></li>	

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,55)}>兰州大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,56)}>聊城大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,57)}>清华大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,58)}>人民大学</a></li>	

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,59)}>山东青年政治学院</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,60)}>山西农业大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,61)}>西南大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,62)}>浙江大学</a></li>	

								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,63)}>郑州大学</a></li>
								
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,65)}>中国矿业大学</a></li>
								<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,64)}>郑州航空工业管理学院</a></li>
							</ul>


						</div>
						
					</div>
				</div>				
				<div className="zmiti-china-dialog" style={{display:this.state.display}}>
					<div className="zmiti-china-close"><span onTouchTap={this.dialogClose.bind(this)}>×</span></div>
					<div className="zmiti-china-dialog-inner">
						<div className="zmiti-china-dialog-tit"></div>
						<img className="zmiti-china-dialog-imgs" src={this.state.dialogimgurl}/>
						<div className="zmiti-china-dialog-code">{this.state.dialogname}</div>
						<div className="zmiti-china-dialog-tips">提示：</div>
						<div className="zmiti-china-dialog-text">
							<ol>
								<li>长按图片识别二维码，添加机器人小管家为好友</li>
								<li>发送以上验证码给小管家，即可被邀请入群</li>
							</ol>
						</div>
					</div>
					
				</div>
			</div>

		);
	}


	componentDidMount() {
		let {IScroll} = this.props;

		this.scroll = new IScroll(this.refs['zmiti-china-prolist'],{
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

}
export default PubCom(ZmitiGroupListApp);