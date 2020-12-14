;(function() {
    // 获取URL
    var arr = location.search.slice(1).split("&");
    var id = "";
    arr.forEach(function(value) {
        if (value.split('=')[0] === "id") {
            id = value.split('=')[1];
        }
    });

    var allData = [];
    console.log(id);
 
    let sell = document.querySelector(".sell");
    let sall = document.querySelector(".sall");

    pAjax({
            url: '/api?tf_id=TFM00R0_254&page=1&size=100',
         }).then(res => {
                res = JSON.parse(res);
                allData = res.result;
                var sum = res.result.filter(function(value) {
                    return value.goods_id == id;
                });
            console.log(sum[0]);



            let str = `
                <div class="product-item text-center">
                    <div class="logo">
                        <img  alt="Responsive image" src="${sum[0].hd_thumb_url}">
                    </div>
                   
                </div>
            `;
            sell.innerHTML += str;


            let stt = `
            <div style = "height:302px; width:300px;">
            <p class="h4">${sum[0].goods_name}</p>
            <p class="intro">
            
            </p>
           
        </div>
        
        <p>
         <p style="color:red; font-size:24px;">
                ￥${sum[0].group_price / 100}
                <a style =text-decoration:none;font-size:20px;margin-left:16px>${sum[0].sales_tip}</a>
            </p>
            <a class="btn btn-default addToCart" style = " float:left;" id="addToCart" role="button" data-id="${sum[0].goods_id}">加入购物车</a>
        </p> `;
        sall.innerHTML += stt;


        let addToCart = document.querySelector("#addToCart");
        console.log(addToCart);


           addToCart.onclick = function(e) {
                // 获取当前商品的信息ID
                var goods_id = e.target.getAttribute('data-id');
    
                // 拿着ID去本地存储里看一看有没有
                var arr = JSON.parse(localStorage.getItem('shoppingCart')) || [];
         
    
                var goods_item = arr.find(function(value) {
                    return value.goods_id == goods_id;
                });
    
    
             
    
     
         
                // 判断
                
                if (goods_item) {
                    // 如果为真 说明已经存在 
                // carArr.push(goods_item);
    
                    goods_item.number++;
                } else {
                    // 说明不存在
                    // 拿着id去大数组里找 
                    goods_item = allData.find(function(value) {
                        return value.goods_id == goods_id;
                    });
                    // 设置一个sales属性为1 然后直接往本地存储数组里存储就好了
                    goods_item.number = 1;
                    arr.push(goods_item);
    
                    // console.log(goods_item);
                }
                // 将修改之后的数据放回本地存储
                // localStorage.setItem("CartInfoo", JSON.stringify(arr));
                localStorage.setItem("shoppingCart", JSON.stringify(arr));
    
             
            
        }

        });


})();