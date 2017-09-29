import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ZmitiIndexApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			count:0
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div style={{height:this.viewH,zIndex:this.props.showIndex?100:-1}} className='zmiti-index-main-ui' ref='zmiti-index-main-ui'>

				<section className='zmiti-index-scroll'>
					<div className='zmiti-index-title'>
						<img src='./assets/images/title.png'/>
						<div className='zmiti-read-btn'>读书报名</div>
						<div  className='zmiti-read-btn' onTouchTap={this.entryResult.bind(this)}>我的阅读</div>
						<div className='zmiti-read-count'>
							{this.state.count}
						</div>
					</div>
					<img src='./assets/images/main.png'/>
				</section>

			</div>
		);
	}

	entryResult(){
		let {obserable } = this.props;
		obserable.trigger({
			type:'entryResult'
		});
	}

	loading(arr, fn, fnEnd){
		var arr = arr  || [];


        var len = arr.length;

        if(len <= 0){
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


	componentDidMount() {
		let {IScroll } = this.props;
		this.scroll = new IScroll(this.refs['zmiti-index-main-ui'],{
			scrollbars:true
		});

		setTimeout(()=>{
			this.scroll.refresh();
		},400)
		var s = this;
		$.ajax({
			url:'http://api.zmiti.com/v2/book/get_usercount/',
			data:{},

		}).done((data)=>{
			if(data.getret === 0){
				s.setState({
					count:data.count
				})
			}
		})
	}
}
export default PubCom(ZmitiIndexApp);