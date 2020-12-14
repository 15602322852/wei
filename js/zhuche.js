let user = document.querySelector("#username");
let pass = document.querySelector("#password");
let loginBtns = document.querySelector("#loginBtns");




  // 定义用户名和密码锁
  let usernames_lock = false;
  let passwords_lock = false;
  // 用户名验证正则
  user.onblur = function () {
      // 获取值
      let val = this.value;
      // 定义正则表达式
      let reg = /^[^\d]\w{6,12}$/;
      // 验证
      if (reg.test(val)) {
          usernames_lock = true;
          this.style.borderColor = "green";
      } else {
          usernames_lock = false;
          this.style.borderColor = "red"
      }
      console.log(usernames_lock);
  }


    // 密码验证正则
    pass.onblur = function () {
      // 获取用户的密码
      let val = this.value;
      // 定义正则表达式
      let reg = /^[^\d]\w{6,12}$/;
      // 验证
      if (reg.test(val)) {
          passwords_lock = true;
          this.style.borderColor = "green";
      } else {
          passwords_lock = false;
          this.style.borderColor = "red"
      }
      console.log(passwords_lock)
  }


  loginBtns.onclick = function(){
    if(passwords_lock && usernames_lock){
        ajax({
            url: '../php/zhuce.php',
            data: {
                usernames: user.value,
                 passwords: pass.value,
            },
            success:function(res){
                console.log(res);
            //  alert(res)
                if (res === "注册成功") {
                   alert("注册成功")
                   window.location = "../HTML/index.html" 
                 
                }else{
                    alert("注册失败")
                }
            }
        
        })
    }
    }