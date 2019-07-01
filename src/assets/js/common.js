import wx from 'weixin-js-sdk';
import 'babel-polyfill';
import promise from 'es6-promise';
promise.polyfill();
import axios from 'axios';
const protocol=location.protocol;
var oproto = Object.prototype;
var serialize = oproto.toString;
var Rxports = {
	/**
	  * 封装axios，减少学习成本，参数基本跟jq ajax一致
	  * @param {String} type			请求的类型，默认post
	  * @param {String} url				请求地址
	  * @param {String} time			超时时间
	  * @param {Object} data			请求参数
	  * @param {String} dataType		预期服务器返回的数据类型，xml html json ...
	  * @param {Object} headers			自定义请求headers
	  * @param {Function} success		请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
	  * @param {Function} error		发送请求前
	  * @param return
	*/
	ajax:function (opt){
		var opts = opt || {};
		if (!opts.url) {
			alert('请填写接口地址');
			return false;
		}
		axios({
			method: opts.type || 'post',
			url: opts.url,
			params: opts.data || {},
			headers: opts.headers || {
			  'Content-Type':'application/x-www-form-urlencoded'
			},
			// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  		// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
			//baseURL:`${protocol}//${location.host}`,
			// baseURL:`/api`,
			baseURL:`https://www.meiyi.ai`,
			timeout: opts.time || 10*100000,
			responseType: opts.dataType || 'json',
			data:opts.data2||{},
		}).then(res => {
			if(res.status == 200 ){
				if(opts.success){
					opts.success(res.data,res);
				}
			}else{
				if (data.error) {
					opts.error(res);
				}else{
					console.log('好多人在访问呀，请重新试试[timeout]');
					console.log(res);
				}
			}
		}).catch(function (error){
			if (opts.error) {
				opts.error(error);
			}else{
				console.log('好多人在访问呀，请重新试试[timeout]');
				console.log(error);
			}
		});
	},
	/*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
	isArrayLike:function(obj) {
	    if (!obj)
	      return false
	    var n = obj.length
	    if (n === (n >>> 0)) { //检测length属性是否为非负整数
	      var type = serialize.call(obj).slice(8, -1)
	      if (/(?:regexp|string|function|window|global)$/i.test(type))
	        return false
	      if (type === "Array")
	        return true
	      try {
	        if ({}.propertyIsEnumerable.call(obj, "length") === false) { //如果是原生对象
	          return /^\s?function/.test(obj.item || obj.callee)
	        }
	        return true
	      } catch (e) { //IE的NodeList直接抛错
	        return !obj.window //IE6-8 window
	      }
	    }
	    return false
	},
	/*遍历数组与对象,回调的第一个参数为索引或键名,第二个或元素或键值*/
  	each: function (obj, fn) {
	  	var That = this;
	    if (obj) { //排除null, undefined
	      var i = 0
	      if (That.isArrayLike(obj)) {
	        for (var n = obj.length; i < n; i++) {
	          if (fn(i, obj[i]) === false)
	            break
	        }
	      } else {
	        for (i in obj) {
	          if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
	            break
	          }
	        }
	      }
	    }
	},
	/**
	  * 获取url传过来的参数
	  * @param name 	获取的参数
	  * @param Url 		自定义获取参数的链接
	  * @param return
	*/
	getUrlQuery:function (name,Url){
	  //URL GET 获取值
		const reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i"),
    url = Url || location.href;
		if (reg.test(url))
			return decodeURI(RegExp.$2.replace(/\+/g, " ").split("#")[0].split("?")[0]);
			return "";
	},
	//字数过滤器
	filterString : function (str,len) {
		if(str==null){
			return ' ';
		}else{
			if(str.length>len){
				return str.substring(0,len)+"...";
			}else if(!str.length){
				return '无';
			}else{
				return str;
			}
		}
	},
	removeHTMLTag:function (str) {
	    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
	    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
	    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
	    str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
	    return str;
	},
	baseFn:function () {
		this.setSouce();
		var bp = document.createElement('script');
	    var curProtocol = window.location.protocol.split(':')[0];
	    if (curProtocol === 'https') {
	        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
	    }
	    else {
	        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
	    }
	    var s = document.getElementsByTagName("script")[0];
	    s.parentNode.insertBefore(bp, s);
	},
	baseDomFn:function () {

	},
	addHandler: function (element, type, handler) {
	  if (element.addEventListener) {
	    element.addEventListener(type, handler, false);
	  } else if (element.attachEvent) {
	    element.attachEvent("on" + type, handler);
	  } else {
	    element["on" + type] = handler;
	  }
	},
	getCookie:function (name){
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			return unescape(arr[2]);
		}else{
			return null;
		}
	},
	isLogin:function (type) {
		if(localStorage.meiyi_user){
			let meiyi_user=JSON.parse(localStorage.meiyi_user);
			return meiyi_user;
		}else{
			let meiyi_user={
				uid:'0',
				token:'0'
			};
			localStorage.meiyi_user=JSON.stringify(meiyi_user);
			return meiyi_user;
			//alert("请登录后继续访问！")
			// if(type){
			// 	return false;
			// }
			// location.href="/login/login.html";
		}
	},
	checkPhone:function(phone,error=false){
	  if(!(/^1[3|4|5|7|8|9][0-9]{9}$/.test(phone))){
	    return error;
	  }else{
	   	return true;
	  }
	},
	isCardNo:function(idCard,error=false){
	  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
	  let reg = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/;
	  if(reg.test(idCard) === false){
	    return  error;
	  }else{
	   	return true;
	  }
	},
	compare:function(val,type='desc'){ //type等于desc的时候为降序,默认是降序。
		return function (obj1,obj2) {
			const val1=obj1[val],val2=obj2[val];
			if(type=='desc'){
				return val1 <= val2?1:-1;
			}else{
				return val1 <= val2?-1:1;
			}
		}
	},
	showLoading:function () {
		let loading=`
			<div class="shadow loading_hook">
		        <div class="centerbox">
		          <div class="lds-spinner">
		            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
		          </div>
		        </div>
	      	</div>
      	`;
		document.write(loading);
		//document.body.insertBefore(loading,document.body.firstChild);
	},
	hideLoading:function () {
		// let loading = document.getElementsByTagName('.loading_hook')[0];
		// let removed = document.body.removeChild(loading);
	},
	postUserInfo:function(obj,callBack){
	  this.ajax({
	   	type:'post',
	    url:'/activityuserinfo',
	    data:{
	      phone:obj.phone,
	      name:obj.name||'无名字',
	      sourcePage:location.href,
	      sid:this.getSource(),
	    },
	    success:res=>{
	      if(!callBack){
	      	location.href=`/project/assess.html`;
	      }else{
	      	callBack();
	      }
	    }
	  });
	},
	setSouce(){
		let sid=this.getUrlQuery('sid');
		if(sid){
			sessionStorage.setItem('sid',sid);
		}
	},
	getSource(){
		if(window.__wxjs_environment === 'miniprogram'){
			return '小程序';
		}else{
			let sid=sessionStorage.getItem('sid');
			console.log('sid：'+sid);
			return  sid;
		}
	},
	setSeoFn(title='美移科技',keywords='美移科技',description='美移科技'){
		let head=document.getElementsByTagName('head')[0];
		let oTitle=document.getElementsByTagName('title')[0];
		let oKeywords=document.createElement('meta');
		let oDescription=document.createElement('meta');
		oKeywords['name']='keywords';
		oKeywords['content']=keywords;
		oDescription['name']='description';
		oDescription['content']=description;
		oTitle.innerText=title;
		head.appendChild(oKeywords);
		head.appendChild(oDescription);
	},
	goTop() {
	  var timer=setInterval(function(){
	    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	    var ispeed=Math.floor(-scrollTop/6);
	    if(scrollTop==0){
	      clearInterval(timer);
	    }
	    document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
	  },10);
	}
};
export default Rxports;
