"use strict";function Pagination(e,t){if(!e)throw new Error("方法必须传递参数，第一个为dom元素，第二个为对象");this.ele=e,this.options=t||{},console.log(1),this.default={pageInfo:{pagenum:1,pagesize:10,total:1e3,totalpage:100},textInfo:{first:"first",prev:"prev",list:"",next:"next",last:"last"}},this.change=this.options.change||function(){},this.list=null,this.init()}function setCss(e,t){for(var n in t)e.style[n]=t[n]}Pagination.prototype.init=function(){this.setDefault(),this.setStyle(),this.dongcidaci()},Pagination.prototype.setDefault=function(){if(this.options.pageInfo)for(var e in this.options.pageInfo)this.default.pageInfo[e]=this.options.pageInfo[e];if(this.options.textInfo)for(var t in this.options.textInfo)this.default.textInfo[t]=this.options.textInfo[t]},Pagination.prototype.setStyle=function(){this.ele.innerHTML="",setCss(this.ele,{display:"flex",justifyContent:"center",alignItems:"center"}),this.createEle(),this.creteList(),this.go(),this.isDis(),this.change(this.default.pageInfo.pagenum)},Pagination.prototype.createEle=function(){for(var e in this.default.textInfo){var t=document.createElement("div");"list"===(t.className=e)?setCss(this.list=t,{display:"flex",justifyContent:"center",alignItems:"center"}):setCss(t,{border:"1px solid #333",padding:"0 5px",margin:"0 5px"}),t.innerHTML=this.default.textInfo[e],this.ele.appendChild(t)}},Pagination.prototype.creteList=function(){var e=this.default.pageInfo.pagenum,t=this.default.pageInfo.totalpage;if(t<=9)for(var n=1;n<=this.default.pageInfo.totalpage;n++){var i=this.crealeP(n);this.list.appendChild(i)}else if(e<5){for(var a=1;a<=5;a++)this.list.appendChild(this.crealeP(a));var s=document.createElement("span");s.innerHTML="...",this.list.appendChild(s);for(var l=t-1;l<=t;l++)this.list.appendChild(this.crealeP(l))}else if(5===e){for(var o=1;o<=7;o++)this.list.appendChild(this.crealeP(o));var p=document.createElement("span");p.innerHTML="...",this.list.appendChild(p);for(var r=t-1;r<=t;r++)this.list.appendChild(this.crealeP(r))}else if(5<e&&e<t-4){for(var f=1;f<=2;f++)this.list.appendChild(this.crealeP(f));var d=document.createElement("span");d.innerHTML="...",this.list.appendChild(d);for(var h=e-2;h<=e+2;h++)this.list.appendChild(this.crealeP(h));var u=document.createElement("span");u.innerHTML="...",this.list.appendChild(u);for(var g=t-1;g<=t;g++)this.list.appendChild(this.crealeP(g))}else if(e===t-4){for(var c=1;c<=2;c++)this.list.appendChild(this.crealeP(c));var m=document.createElement("span");m.innerHTML="...",this.list.appendChild(m);for(var v=t-6;v<=t;v++)this.list.appendChild(this.crealeP(v))}else if(t-4<e){for(var I=1;I<=2;I++)this.list.appendChild(this.crealeP(I));var C=document.createElement("span");C.innerHTML="...",this.list.appendChild(C);for(var y=t-4;y<=t;y++)this.list.appendChild(this.crealeP(y))}},Pagination.prototype.crealeP=function(e){var t=document.createElement("p");return t.innerHTML=e,setCss(t,{border:"1px solid #333",margin:"0 5px",padding:"0 5px"}),e===this.default.pageInfo.pagenum&&setCss(t,{backgroundColor:"orange"}),t},Pagination.prototype.go=function(){var e=document.createElement("input"),t=document.createElement("button");setCss(e,{outline:"none",width:"50px",height:"20px"}),e.value=this.default.pageInfo.pagenum,e.type="number",e.setAttribute("min","1"),e.setAttribute("max",this.default.pageInfo.totalpage),setCss(t,{outline:"none",width:"30px",height:"24px",marginLeft:"5px"}),t.innerHTML="go",this.ele.appendChild(e),this.ele.appendChild(t)},Pagination.prototype.isDis=function(){1===this.default.pageInfo.pagenum&&(this.ele.children[0].style.backgroundColor="#ccc",this.ele.children[1].style.backgroundColor="#ccc"),this.default.pageInfo.pagenum===this.default.pageInfo.totalpage&&(this.ele.children[3].style.backgroundColor="#ccc",this.ele.children[4].style.backgroundColor="#ccc")},Pagination.prototype.dongcidaci=function(){var n=this;this.ele.addEventListener("click",function(e){var t=(e=e||window.event).target;"first"===t.className&&1!==n.default.pageInfo.pagenum&&(n.default.pageInfo.pagenum=1,n.setStyle()),"prev"===t.className&&1!==n.default.pageInfo.pagenum&&(n.default.pageInfo.pagenum--,n.setStyle()),"next"===t.className&&n.default.pageInfo.pagenum!==n.default.pageInfo.totalpage&&(n.default.pageInfo.pagenum++,n.setStyle()),"last"===t.className&&n.default.pageInfo.pagenum!==n.default.pageInfo.totalpage&&(n.default.pageInfo.pagenum=n.default.pageInfo.totalpage,n.setStyle()),"P"===t.nodeName&&t.innerHTML-0!==n.default.pageInfo.pagenum&&(n.default.pageInfo.pagenum=t.innerHTML-0,n.setStyle()),"BUTTON"===t.nodeName&&t.previousElementSibling.value-0!==n.default.pageInfo.pagenum&&(n.default.pageInfo.pagenum=t.previousElementSibling.value-0,n.setStyle())})};