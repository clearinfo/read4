import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import $ from 'jquery';
injectTapEventPlugin();
import IScroll from 'iscroll';
import './assets/css/index.css';

import Obserable from './components/public/obserable';

var obserable = new Obserable();


import ZmitiLoadingApp from './loading/index.jsx';
import ZmitiGroupListApp from './china/index.jsx';
export class App extends Component {
	constructor(props) {
		super(props);


		this.state = {
			progress:'0%',
			loadingImg:[],
			showLoading:true,
			name:'',
			tel:'',
			isEntry:false,
			list:[],
			qrList:[],
			progress:'0%',
			qrcodeurl:''
			
		}
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {
		
		var mainStyle={
			background:'url(./assets/images/bg.jpg) repeat-y '
		};
		

		var data = {
			list:this.state.list || [],
			obserable,
			IScroll,
			progress:this.state.progress
		}

			

			var resultStyle ={
				background:'url(./assets/images/main-bg.jpg) repeat-y ',
				minHeight:this.viewH - 200
			}

		return (


			<div className='zmiti-main-ui' >
				{false && this.state.qrList.map((item,i)=>{
					return <img key={i} style={{opacity:0,height:200,left:(this.viewW - 200)/2,width:200,position:'absolute',top:item.top,zIndex:100}} src={item.qrcodeurl}/>
				})}

				{this.state.qrcodeurl && <div onTouchStart={this.closeMask.bind(this)} className='zmiti-current-qrcode'>
									<span>长按二维码识别</span>
									<img  style={{opacity:1,height:300,left:(this.viewW - 300)/2,width:300,position:'absolute',top:(this.viewH - 300) /2,zIndex:100}} src={this.state.qrcodeurl}/>
								</div>}
				
				{/*
					{this.state.showLoading && <ZmitiLoadingApp {...data}></ZmitiLoadingApp>}
				{!this.state.showLoading && !this.state.isEntry && <ZmitiIndexApp {...data}></ZmitiIndexApp>}
				{!this.state.showLoading &&  this.state.isEntry && <ZmitiResultApp {...data}></ZmitiResultApp>}
				*/}
				

				{!this.state.isEntry &&<ZmitiGroupListApp {...data}></ZmitiGroupListApp> }
				
			 

				
				 
			</div>
		);
	}

	closeMask(e){
		if(e.target.nodeName === 'IMG'){
			return;
		}
		this.setState({
			qrcodeurl:''
		})
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
					s.setState({
						list:data.list
					})

					setTimeout(()=>{
						s.scroll.refresh();
						if(data.list.length > 2){
							s.scroll.scrollTo(0,-s.refs['zmiti-search-result-tip'].offsetTop - 100,600);;
						}
						var items = $('.zmiti-result-item');
						var list = [];
						var children = [];
					
					},400);
				}
			},()=>{});

		},200);


	}


	getPos(nickname,headimgurl){
	    	var s = this;
	    	 $.ajax({
	        	url:`http://restapi.amap.com/v3/geocode/regeo?key=10df4af5d9266f83b404c007534f0001&location=${wx.posData.longitude},${wx.posData.latitude}&poitype=&radius=100&extensions=base&batch=false&roadlevel=1`+'',
				type:'get',
				error(){

				},
				success(data){
					if(data.status === '1' && data.infocode === '10000'){
						
						var addressComponent = data.regeocode.addressComponent;
						var opt = {
					   		type:'map',
					   		address:(addressComponent.city[0]||addressComponent.province)+addressComponent.district,
					   		pos:[wx.posData.longitude,wx.posData.latitude],
					   		nickname:nickname,
					   		headimgurl:headimgurl
					   	}

					   	s.setState({
					   		nickname,
					   		headimgurl,
					   		showUI:true,
					   		latitude:wx.posData.latitude,
					   		longitude:wx.posData.longitude,
					   		usercity:(addressComponent.city[0]||addressComponent.province)+addressComponent.district
					   	});
					   	$.ajax({
							url:'http://api.zmiti.com/v2/weixin/save_userview/',
							type:'post',
							data:{
								//worksid:s.worksid,
								wxopenid:s.openid,
								wxname:nickname,
								usercity:opt.address,
								longitude:wx.posData.longitude,
								latitude:wx.posData.latitude
							}
						}).done((data)=>{
							if(data.getret === 0 ){
								
							}else{
								alert('save_userview getret : '+ data.getret +' msg : '+ data.getmsg)
							}
						},()=>{
							//alert('save_userview error');
						})

					   	$.ajax({
					   		url:'http://api.zmiti.com/v2/weixin/add_wxuser/',
					   		type:'post',
					   		data:{
					   			wxopenid:s.openid,
					   			worksid:s.worksid,
					   			nickname:nickname,
					   			headimgurl:headimgurl,
					   			longitude:wx.posData.longitude,
					   			latitude:wx.posData.latitude,
					   			accuracy:wx.posData.accuracy,
					   			wxappid:s.wxappid,
					   			integral:localStorage.getItem('nickname')?0:10
					   		},
					   		error(){
					   			alert('add_wxuser: 服务器返回错误');
					   		},
					   		success(data){
					   			if(data.getret === 0){
					   				
					   				$.ajax({
										url:'http://api.zmiti.com/v2/weixin/get_wxuserdetaile',
										data:{
											wxopenid:s.openid
										},
										success(data){
											if(data.getret === 0){
												
												s.score = data.wxuserinfo.totalintegral;
												s.setState({
													score:s.score
												});
											}else{
												alert('get_wxuserdetaile : getret  : '+ data.getret + ' msg : ' + data.getmsg);	
											}
										}
									})

					   			}else{
					   				alert('getret  : '+ data.getret + ' msg : ' + data.getmsg+ ' .....');
					   			}
					   		}
					   	});

					   	//获取用户积分
						//
				   		$.ajax({
							url:'http://api.zmiti.com/v2/msg/send_msg/',
							data:{
								type:s.worksid,
								content:JSON.stringify(opt),
								to:opt.to||''
							},
							success(data){
								s.state.showUI = true;
								s.forceUpdate();
								//console.log(data);
							}
						})
					}
					else{
						alert('地址信息获取失败')
					}
				}						        	
	        })
    }

	wxConfig(title,desc,img,appId='wxfacf4a639d9e3bcc',worksid){

		   var durl = location.href.split('#')[0]; //window.location;
		        var code_durl = encodeURIComponent(durl);


		        var s = this;

			$.ajax({
				type:'get',
				url: "http://api.zmiti.com/weixin/jssdk.php?type=signature&durl="+code_durl,
				dataType:'jsonp',
				jsonp: "callback",
			    jsonpCallback: "jsonFlickrFeed",
			    error(){
			    },
			    success(data){
			    	wx.config({
							    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
							    appId:appId, // 必填，公众号的唯一标识
							    timestamp:'1488558145' , // 必填，生成签名的时间戳
							    nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
							    signature: data.signature,// 必填，签名，见附录1
							    jsApiList: [ 'checkJsApi',
											  'onMenuShareTimeline',
											  'onMenuShareAppMessage',
											  'onMenuShareQQ',
											  'onMenuShareWeibo',
											  'hideMenuItems',
											  'showMenuItems',
											  'hideAllNonBaseMenuItem',
											  'showAllNonBaseMenuItem'
									] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
							});

			    	wx.ready(()=>{

			    		wx.getLocation({
						    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
						    fail(){
						    },
						    success: function (res) {
						        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
						        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
						        var speed = res.speed; // 速度，以米/每秒计
						        var accuracy = res.accuracy; // 位置精度

						        wx.posData = {
						        	longitude,
						        	latitude,
						        	accuracy
						        };

						        if((s.nickname || s.headimgurl) && s.openid){
						        	//s.getPos(s.nickname,s.headimgurl);
						        }
						       
						    }
						});

			    			 		//朋友圈
	                    wx.onMenuShareTimeline({
	                        title: title, // 分享标题
	                        link: durl, // 分享链接
	                        imgUrl: img, // 分享图标
	                        desc: desc,
	                        success: function () { },
	                        cancel: function () { }
	                    });
	                    //朋友
	                    wx.onMenuShareAppMessage({
	                        title: title, // 分享标题
	                        link: durl, // 分享链接
	                        imgUrl: img, // 分享图标
	                        type: "link",
	                        dataUrl: "",
	                        desc: desc,
	                        success: function () {
	                        },
	                        cancel: function () { 
	                        }
	                    });
	                    //qq
	                    wx.onMenuShareQQ({
	                        title: title, // 分享标题
	                        link: durl, // 分享链接
	                        imgUrl: img, // 分享图标
	                        desc: desc,
	                        success: function () { },
	                        cancel: function () { }
	                    });
			    	});
			    }
			});
		
	}
 
	 

	componentDidMount() {
		this.wxConfig('新华社领读者计划','小新邀请您参加新华社领读者计划','http://h5.zmiti.com/public/read/assets/images/300.jpg');

		var s = this;
		obserable.on('entryResult',()=>{
			this.setState({
				isEntry:true
			},()=>{
				/*s.scroll =  new IScroll($('.zmiti-result-main-ui')[0],{
					scrollbars:true
				});
				obserable.on('refreshScroll',()=>{
					s.scroll.refresh();
				})*/
			});
			
		});

		obserable.on('fillData',(list)=>{
			this.setState({
				list,
			})
		})

		obserable.on('fillQrList',(qrList)=>{
			this.setState({
				qrList
			})
		})

		obserable.on('fillqrcode',(data)=>{
			this.setState({
				qrcodeurl:data.qrcodeurl,
			})
		})
		
		var s = this;
		
		var data = {
			wxappid:'wxfacf4a639d9e3bcc',
			wxappsecret:'149cdef95c99ff7cab523d8beca86080',
			loadingImg:[
				'./assets/images/loading.jpg',
				'./assets/images/zmiti.png',
			]
		}

		s.wxappid = data.wxappid;
		s.wxappsecret = data.wxappsecret;
		s.loading(data.loadingImg,(scale)=>{
						s.setState({
							progress:(scale*100|0)+'%'
						})
					},()=>{
						s.setState({
							showLoading:false
						});
						
					});
		return;
		$.ajax({
			url:'http://api.zmiti.com/v2/weixin/getwxuserinfo/',
			data:{
				code:s.getQueryString('code'),
				wxappid:data.wxappid,
				wxappsecret:data.wxappsecret
			},
			error(e){
			},
			success(dt){
				 
				if(dt.getret === 0){
					
					s.loading(data.loadingImg,(scale)=>{
						s.setState({
							progress:(scale*100|0)+'%'
						})
					},()=>{
						s.setState({
							showLoading:false
						},()=>{
							 
							
						});

						
						s.defaultName = dt.userinfo.nickname || data.username || '智媒体';

						localStorage.setItem('nickname',dt.userinfo.nickname );
						localStorage.setItem('headimgurl',dt.userinfo.headimgurl);
						s.openid = dt.userinfo.openid;
						s.nickname = dt.userinfo.nickname;
						s.headimgurl = dt.userinfo.headimgurl;

						if (wx.posData && wx.posData.longitude) {
							//s.getPos(dt.userinfo.nickname, dt.userinfo.headimgurl);
						}
						s.state.myHeadImg = dt.userinfo.headimgurl
						s.forceUpdate();
					});
					
				}
				else{
				 

					if(s.isWeiXin() ){

						

						/*if(localStorage.getItem('oauthurl'+s.worksid)){
							window.location.href = localStorage.getItem('oauthurl'+s.worksid);
							return;
						}*/

						/*$.ajax({
							url:'http://api.zmiti.com/v2/weixin/getoauthurl/',
							type:'post',
							data:{
								redirect_uri:window.location.href.replace(/code/ig,'zmiti'),
								scope:'snsapi_userinfo',
								worksid:'',
								state:new Date().getTime()+''
							},
							error(){
							},
							success(dt){
								if(dt.getret === 0){
									//localStorage.setItem('oauthurl'+s.worksid,dt.url);
									window.location.href =  dt.url;
								}
							}
						})*/
					}
					else{

						s.loading(data.loadingImg,(scale)=>{
							s.setState({
								progress:(scale*100|0)+'%'
							})
						},()=>{
							s.setState({
								showLoading:false
							},()=>{
								
								 
							});

							
						});

					}

				}

			}
		});


		
	}

	loading(arr, fn, fnEnd){
        var arr = arr ||[];
        var len = arr.length;
       

        if(len<=0){
        	fnEnd();
        	return;
        }
        var count = 0;
        var i = 0;
        
        function loadimg() {
            if (i === len) {
                return;
            }
            var img = new Image();
            img.onload = img.onerror = function(){
                count++;
                if (i < len - 1) {
                    i++;
                    loadimg();
                    fn && fn(i / (len - 1), img.src);
                } else {
                    fnEnd && fnEnd(img.src);
                }
            };
            img.src = arr[i];
        }
       loadimg();
    }

	isWeiXin(){
	    var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	        return true;
	    }else{
	        return false;
	    }
    }

    getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
    }

	componentWillMount() {
		var s = this;

	}

	clearRender(){
		clearInterval(this.talkTimer);
	}

	 
}

	ReactDOM.render(<App></App>,document.getElementById('fly-main-ui'));
	

