

;(function() {

    
    // const cookie = document.cookie;
    if(getCookie('登录成功')){
        alert("欢迎访问");      
    }else{
        alert("请先登录");
        location.href = '../HTML/index.html'
    }

    // 获取元素
    var tbody = document.querySelector("tbody");
    var thead = document.querySelector("thead");
    var panelBody = document.querySelector(".panel-body");
     let dele = document.querySelector("#dele");
     let btn = document.getElementById("btn");

 



    function count() {
        // 获取本地存储中的数据
        var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

        var sum = shoppingCart.filter(function(value) {
            // value.number
            return value.isSelected;
            
        })
        
        .reduce(function(prev, value) {
            console.log(prev, value);
            console.log(value.group_price, value.number);

            return prev +  +value.group_price * value.number;
        }, 0);
        // console.log(sum);

        panelBody.innerHTML = sum / 100;

        

       

    }


    

   


    function render() {
        // 获取本地存储
        var arr = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        // 判断是否都是选中
        var isAllChecked = arr.every(function(value) {
            return value.isSelected;
           
        })

    
        thead.innerHTML = `
        <tr>
            <th class=" text-center"> <input ${isAllChecked ? 'checked' : ""}  type="checkbox">全选 </th>
            <th class=" text-center">商品</th>
            <th class=" text-center">商品信息</th>
            <th class=" text-center">单品总计</th>
            <th class=" text-center">商品价格</th>
            <th class=" text-center">商品数量</th>
            <th class=" text-center">操作</th>
        </tr>
        `;

      
        var str = "";
        arr.forEach(function(value) {
            str += 
            `<tr>
                <td><input class = "ppp" ${value.isSelected ? "checked" : ""} data-id="${value.goods_id}" type="checkbox"></td>
                <td><img style = "width:100px;hegiht:100px" alt="Responsive image" src="${value.hd_thumb_url}"></td>
                <td>${value.goods_name}</td>
                <td>${(value.group_price / 100) * value.number}</td>
                <td>${value.group_price / 100}</td>
                <td>${value.number}</td>
                <td>
                    <button data-id="${value.goods_id}" class="button">+</button>
                    <button data-id="${value.goods_id}" class="button">-</button>
                </td>
            </tr>
        `
        })
        tbody.innerHTML = str;
        
    }

    
    // 调用render()
    render();
    count();

    dele.onclick = function(){
        window.localStorage.clear(); //清除缓存
        render();
count();
 }








    // 通过事件委托 把事件给绑定
    thead.onclick = function(e) {
        // 通过 e.target分辨是否是input
        if (e.target.tagName == "INPUT") {
            var isAllChecked = e.target.checked;
            var shoppingData = JSON.parse(localStorage.getItem('shoppingCart'));
            shoppingData.forEach(function(value) {
                value.isSelected = isAllChecked
            });
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingData))
            count();
            render();
        }
    }


    tbody.onclick = function(e) {
        // 获取本地存储的数据
        var shoppingData = JSON.parse(localStorage.getItem('shoppingCart'));
        if (e.target.tagName === "INPUT") {
            // 获取信息的id
            var id = e.target.getAttribute("data-id");
            console.log('选中一条id为' + id + "的数据");
            // 先找到商品
            var product = shoppingData.find((value) => {
                return value.goods_id == id;
            })
            // // 给它添加一个属性
            product.isSelected = e.target.checked;
            // 存回本地存储
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingData))
            count();
            render();

            console.log(product.isSelected);

            btn.onclick = function(){
                if(product.isSelected == true){
                   alert("请用微信或者支付宝付款");
                }else{
                    alert("请勾选您要付款的商品")
                }
            }
            console.log(product.isAllChecked);





        } else if (e.target.innerHTML === "+") {
            var id = e.target.getAttribute("data-id");
            // 先找到商品
            var product = shoppingData.find((value) => {
                return value.goods_id == id;
                
            })
            console.log(product);
            // 让商品数量加1  
            product.number++;
            // 存回本地存储
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingData))
            render(); 
            count();
        } else if (e.target.innerHTML === "-") {
            var id = e.target.getAttribute("data-id");
            // 先找到商品
            var product = shoppingData.find((value) => {
                return value.goods_id == id;
            })
            // 让商品数量减1  
            product.number--;
            // console.log(shoppingCartInfoo);
            // console.log(product);

            if (product.number === 0) {
                // 获取这个商品的下标
                var idx = shoppingData.indexOf(product);
                shoppingData.splice(idx, 1);
            }
            console.log(product);
            // 存回本地存储
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingData));
            render(); 
            count();
        }
    }
    // localStorage.removeItem('shoppingCartInfooInfoo')
   
})();