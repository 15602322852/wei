"use strict";var user=document.querySelector("#username"),pass=document.querySelector("#password"),loginBtns=document.querySelector("#loginBtns"),usernames_lock=!1,passwords_lock=!1;user.onblur=function(){var s=this.value;/^[^\d]\w{6,12}$/.test(s)?(usernames_lock=!0,this.style.borderColor="green"):(usernames_lock=!1,this.style.borderColor="red"),console.log(usernames_lock)},pass.onblur=function(){var s=this.value;/^[^\d]\w{6,12}$/.test(s)?(passwords_lock=!0,this.style.borderColor="green"):(passwords_lock=!1,this.style.borderColor="red"),console.log(passwords_lock)},loginBtns.onclick=function(){passwords_lock&&usernames_lock&&ajax({url:"../php/zhuce.php",data:{usernames:user.value,passwords:pass.value},success:function(s){console.log(s),"注册成功"===s?(alert("注册成功"),window.location="../HTML/index.html"):alert("注册失败")}})};