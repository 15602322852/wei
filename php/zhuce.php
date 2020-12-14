<?php

    $name = $_GET['usernames'];
    $pass = $_GET['passwords'];

    $con = mysqli_connect('localhost', "root", "123456","studens");


    $sql1 = "SELECT * FROM `login` WHERE username = '$name';";
    $sql2 = "INSERT INTO `login` (`username`, `password`)VALUES ('$name','$pass');";

    $res1 = mysqli_query($con,$sql1);
    $row = mysqli_fetch_assoc($res1);

    if($row){
        print_r('注册失败,该用户名已注册');
        }else{
            $new = mysqli_query($con,$sql2);
            if($new){
                print_r('注册成功');

            }
            };
        ?>