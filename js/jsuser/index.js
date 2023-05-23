var sj = [
    {
        id: 1,
        imgurl: "image/image_icon02/nvzhuang_icon.png",
        imgurl2: "image/image_icon02/nvzhuang01_icon.png",
        a1: "女装",
        a2: "内衣",
        a3: "奢品"
    }, {
        id: 1,
        imgurl: "image/image_icon02/nanzhuang_icon.png",
        imgurl2: "image/image_icon02/nanzhuang01_icon.png",
        a1: "女鞋",
        a2: "男鞋",
        a3: "箱包"
    }, {
        id: 1,
        imgurl: "image/image_icon02/nanzhuang_icon.png",
        imgurl2: "image/image_icon02/nanzhuang01_icon.png",
        a1: "女鞋",
        a2: "男鞋",
        a3: "箱包"
    }, {
        id: 1,
        imgurl: "image/image_icon02/nanzhuang_icon.png",
        imgurl2: "image/image_icon02/nanzhuang01_icon.png",
        a1: "女鞋",
        a2: "男鞋",
        a3: "箱包"
    }, {
        id: 1,
        imgurl: "image/image_icon02/nanzhuang_icon.png",
        imgurl2: "image/image_icon02/nanzhuang01_icon.png",
        a1: "女鞋",
        a2: "男鞋",
        a3: "箱包"
    }, {
        id: 1,
        imgurl: "image/image_icon02/nanzhuang_icon.png",
        imgurl2: "image/image_icon02/nanzhuang01_icon.png",
        a1: "女鞋",
        a2: "男鞋",
        a3: "箱包"
    }, {
        id: 1,
        imgurl: "image/image_icon02/nanzhuang_icon.png",
        imgurl2: "image/image_icon02/nanzhuang01_icon.png",
        a1: "女鞋",
        a2: "男鞋",
        a3: "箱包"
    }, {
        id: 1,
        imgurl: "image/image_icon02/nanzhuang_icon.png",
        imgurl2: "image/image_icon02/nanzhuang01_icon.png",
        a1: "女鞋",
        a2: "男鞋",
        a3: "箱包"
    }

]
var html = '';
for (var i = 0; i < sj.length; i++) {
    html += "<div>"
    html += "<img src=" + sj[i].imgurl + " alt=\"\">"
    html += "<img src=" + sj[i].imgurl2 + " alt=\"\">"
    html += "<a href=\"\">" + sj[i].a1 + "</a>"
    html += "<b>/</b>"
    html += "<a href=\"\">" + sj[i].a2 + "</a>"
    html += "<b>/</b>"
    html += "<a href=\"\">" + sj[i].a3 + "</a>"
    html += "</div>"
}
$(".con_top_classify div:nth-child(2)").html(html);




$(".con_top_classify div:nth-child(2) div a").hover(function () {
    // over
    $(this).siblings().css("color", "rgb(255,80,0)")
    $(this).css("color", "rgb(255,80,0)")
    // var img=$(".con_top_classify div:nth-child(2) div img").attr("src");
    $(this).css("text-decoration", "underline");
    // $(".con_top_classify div:nth-child(2)").css("color", "rgb(255,80,0)");
    // $(".con_top_classify div:nth-child(2) div a").css("color", "rgb(255,80,0)");
}, function () {
    // out
    $(this).siblings().css("color", "#000")
    // $(".con_top_classify div:nth-child(2)").css("color", "#000");
    // $(".con_top_classify div:nth-child(2) div a").css("color", "#000");
    $(this).css("text-decoration", "none");
    $(this).css("color", "#000")
}
);


var img = document.getElementsByClassName("lbt");
for (var i = 1; i < img.length; i++) {
    img[i].style.display = "none"
}


var t = 0;

function imglbt() {
    for (var i = 0; i < img.length; i++) {
        if (i != t) {
            img[i].style.display = "none"
        }
    }
    if (t >= 4) {
        t = 0;
        img[t].style.display = "block"
    } else {
        img[t].style.display = "block"
    }
    t++;
}

var ta = function () {
    setInterval(imglbt, 2000)
}()




var sj2 = [
    {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }, {
        aurl:"html/xpxqy.html",
        imgurl: "image/image/shangpin1.jpg",
        p1: "沃玛养鸡场warma短袖T恤上衣卡通动漫男女情侣宽松衣服体恤",
        span: "收藏上千",
        p2: "￥59"
    }
]


var html2 = ""

for (var i = 0; i < sj2.length; i++) {
    html2 += " <div class=\"commdit_a\">"
    html2 += " <a href=\""+sj2[i].aurl+"\">"
    html2 += " <div class=\"commdit_b\">"
    html2 += " <div class=\"commdit_c\">"
    html2 += "<img src=\""+sj2[i].imgurl+"\" alt=\"\">"
    html2 += " <div class=\"commdit_d\">"
    html2 += " <p>"+sj2[i].p1+"</p>"
    html2 += "<div class=\"commdit_e\"><span>"+sj2[i].span+"</span></div>"
    html2 += " <p class=\"commdit_f\">"+sj2[i].p2+"</p>"
    html2 += "</div>"
    html2 += " </div>"
    html2 += " </div>"
    html2 += "</a>"
    html2 += " </div>"
}

$(".commdity_n").html(html2);