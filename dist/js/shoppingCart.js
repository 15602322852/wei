"use strict";!function(){getCookie("登录成功")?alert("欢迎访问"):(alert("请先登录"),location.href="../HTML/index.html");var o=document.querySelector("tbody"),r=document.querySelector("thead"),e=document.querySelector(".panel-body"),t=document.querySelector("#dele"),c=document.getElementById("btn");function i(){var t=(JSON.parse(localStorage.getItem("shoppingCart"))||[]).filter(function(t){return t.isSelected}).reduce(function(t,e){return console.log(t,e),console.log(e.group_price,e.number),t+ +e.group_price*e.number},0);e.innerHTML=t/100}function a(){var t=JSON.parse(localStorage.getItem("shoppingCart"))||[],e=t.every(function(t){return t.isSelected});r.innerHTML='\n        <tr>\n            <th class=" text-center"> <input '+(e?"checked":"")+'  type="checkbox">全选 </th>\n            <th class=" text-center">商品</th>\n            <th class=" text-center">商品信息</th>\n            <th class=" text-center">单品总计</th>\n            <th class=" text-center">商品价格</th>\n            <th class=" text-center">商品数量</th>\n            <th class=" text-center">操作</th>\n        </tr>\n        ';var n="";t.forEach(function(t){n+='<tr>\n                <td><input class = "ppp" '+(t.isSelected?"checked":"")+' data-id="'+t.goods_id+'" type="checkbox"></td>\n                <td><img style = "width:100px;hegiht:100px" alt="Responsive image" src="'+t.hd_thumb_url+'"></td>\n                <td>'+t.goods_name+"</td>\n                <td>"+t.group_price/100*t.number+"</td>\n                <td>"+t.group_price/100+"</td>\n                <td>"+t.number+'</td>\n                <td>\n                    <button data-id="'+t.goods_id+'" class="button">+</button>\n                    <button data-id="'+t.goods_id+'" class="button">-</button>\n                </td>\n            </tr>\n        '}),o.innerHTML=n}a(),i(),t.onclick=function(){window.localStorage.clear(),a(),i()},r.onclick=function(t){if("INPUT"==t.target.tagName){var e=t.target.checked,n=JSON.parse(localStorage.getItem("shoppingCart"));n.forEach(function(t){t.isSelected=e}),localStorage.setItem("shoppingCart",JSON.stringify(n)),i(),a()}},o.onclick=function(t){var e=JSON.parse(localStorage.getItem("shoppingCart"));if("INPUT"===t.target.tagName){var n=t.target.getAttribute("data-id");console.log("选中一条id为"+n+"的数据"),(o=e.find(function(t){return t.goods_id==n})).isSelected=t.target.checked,localStorage.setItem("shoppingCart",JSON.stringify(e)),i(),a(),console.log(o.isSelected),c.onclick=function(){1==o.isSelected?alert("请用微信或者支付宝付款"):alert("请勾选您要付款的商品")},console.log(o.isAllChecked)}else if("+"===t.target.innerHTML){n=t.target.getAttribute("data-id");var o=e.find(function(t){return t.goods_id==n});console.log(o),o.number++,localStorage.setItem("shoppingCart",JSON.stringify(e)),a(),i()}else if("-"===t.target.innerHTML){n=t.target.getAttribute("data-id");if((o=e.find(function(t){return t.goods_id==n})).number--,0===o.number){var r=e.indexOf(o);e.splice(r,1)}console.log(o),localStorage.setItem("shoppingCart",JSON.stringify(e)),a(),i()}}}();