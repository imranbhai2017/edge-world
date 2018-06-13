"use strict";
var bodyparser = require('body-parser');
var fs = require("fs");
var express = require('express');
var app = express();


var apiError = {
	status: "FAILED",
    statusMessage: "Unable to Get mdm data",
    data:[]
};

console.log('test ------------');
/* get mdm auth */
function getService(req, res, next) {
    var res = res;
    var data = {
        "productList": [{
            "phonename": "iphone6",
            "picture": "https://cdn.macrumors.com/article-new/2018/01/iphone-6s-plus-front-back.jpg",
            "model": "iphone6 plus",
            "Rating":2.5,
            "price": 32999
        },
        {
            "phonename": "iphone7",
            "picture": "https://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg",
            "model": "iphone7 plus",
            "Rating":3.5,
            "price": 46999
        },
        {
            "phonename": "RedMi Note4",
            "picture": "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/03/28/source-img/20170328091012_15113.jpg",
            "model": "RedMiNote4",
            "Rating":5,
            "price": 22222
        },
        {
            "phonename": "Samsung",
            "picture": "http://images.samsung.com/is/image/samsung/br-galaxy-j7-pro-sm-j730gzkczto-frontblack-77958255?$PD_GALLERY_JPG$",
            "model": "Samsung S7",
            "Rating":3.5,
            "price": 35777
        },
        {
            "phonename": "vivo",
            "picture": "https://www.91-img.com/gallery_images_uploads/9/0/9016aa75ad75c36061ab296b2131a3f46f6af41d.jpg?w=0&h=901&q=80&c=1",
            "model": "vivo s7",
            "Rating":3.5,
            "price": 22222
        },
        {
            "phonename": "honor",
            "picture": "https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=UM292a1e",
            "model": "honor 9 lite",
            "Rating":4.5,
            "price": 22222
        },
        {
            "phonename": "Moto",
            "picture": "https://d2giyh01gjb6fi.cloudfront.net/phone_front/0002/37/thumb_136622_phone_front_big.jpeg",
            "model": "Moto G6 Splus",
            "Rating":4,
            "price": 22222
        },
        {
            "phonename": "RedMi",
            "picture": "https://img2.smartprix.com/mobiles/1101lur5owg/n-1/xiaomi_redmi_note_5_pro_3gb_ram_32gb.jpg",
            "model": "RedMi Note 5 PRO",
            "Rating":4.5,
            "price": 22222
        },
        {
            "phonename": "Nokia",
            "picture": "https://nokiapoweruser.com/wp-content/uploads/2018/02/Nokia-7-Plus-front-image.jpg",
            "model": "Nokia 7 plus",
            "Rating":4,
            "price": 22222
        },
        {
            "phonename": "Huawei",
            "picture": "https://d2giyh01gjb6fi.cloudfront.net/phone_front/0002/34/thumb_133059_phone_front_big.jpeg",
            "model": "Huawei pro",
            "Rating":3.5,
            "price": 22222
        },
        {
            "phonename": "Honor",
            "picture": "https://www.91-img.com/pictures/121716-v1-honor-7x-mobile-phone-large-1.jpg",
            "model": "Honor 7 X",
            "Rating":4.5,
            "price": 22222
        },
        {
            "phonename": "Samsung",
            "picture": "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s8-.jpg",
            "model": "Samsung S8",
            "Rating":4.5,
            "price": 22222
        },
        {
            "phonename": "iphone",
            "picture": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009787_sd.jpg;maxHeight=640;maxWidth=550",
            "model": "iphone X",
            "Rating":5,
            "price": 22222
        },
        {
            "phonename": "Panasonic",
            "picture": "https://cdn2.gsmarena.com/vv/pics/panasonic/panasonic-eluga-ray-max.jpg",
            "model": "Panasonic Eluga",
            "Rating":4,
            "price": 22222
        },
        {
            "phonename": "Lenovo",
            "picture": "https://cdn2.gsmarena.com/vv/pics/lenovo/lenovo-k8-note-5.jpg",
            "model": "Lenovo K8 Note",
            "Rating":3,
            "price": 22222
        },
        {
            "phonename": "Huawei",
            "picture": "https://cdn2.gsmarena.com/vv/pics/huawei/huawei-p20-lite-1.jpg",
            "model": "Huawei P20 Lite",
            "Rating":4,
            "price": 22222
        },
        {
            "phonename": "Karbonn",
            "picture": "https://cdn2.gsmarena.com/vv/pics/karbonn/karbonn-titanium-mach-two.jpg",
            "model": "Karbonn K9 Smart",
            "Rating":3.5,
            "price": 22222
        },
        {
            "phonename": "OnuPlus",
            "picture": "https://www.theandroidsoul.com/wp-content/uploads/2017/12/OnePlus-6-1-1.jpg",
            "model": "OnuPlus 6",
            "Rating":4.5,
            "price": 22222
        },
        {
            "phonename": "OnuPlus",
            "picture": "https://cdn2.gsmarena.com/vv/pics/oneplus/oneplus-5t-1.jpg",
            "model": "OnuPlus 5T",
            "Rating":4,
            "price": 22222
        },{
            "phonename": "Jiophone",
            "picture": "https://static.digit.in/product/03447ae1309cf99fb746351749ab2c229f338b49.png",
            "model": "Jiophone",
            "Rating":2.5,
            "price": 22222
        }
    ],
    
    
        
    }
    return res.json(data);
    };
    
    function loginService(req, res, next) {
        var tempUser = [
        {userName:'user1', password:'pass1'},
        {userName:'user2', password:'pass2'},
        {userName:'user3', password:'pass3'}
        ]
        for(var i in tempUser){
        if(req.body.userName == tempUser[i].userName && req.body.password == tempUser[i].password ){
        var result = {
        message:'success',
        userData: tempUser[i]
        }
        return res.json(result);
        }else{
        var result = {
        message:'invalid',
        }
        return res.json(result);
        }
        }
        } 
        

/* get mdm auth */

// public api
module.exports = function (app) {
    app.use(bodyparser.json());
    app.get('/getService', getService);
    app.post('/postLogindata',loginService);
    //app.post('/postService', postService);
}

