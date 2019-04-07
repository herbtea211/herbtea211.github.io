

// 在每個頁面上面都出現nav
$(document).ready(function(){
    $("body").prepend('<header id="top-bar" class="navbar-fixed-top animated-header"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><div id="logo" class="navbar-brand hidden-xs"><a href="index.html" ><img src="img/LOGO.svg" alt=""></a></div></div><nav class="collapse navbar-collapse navbar-right" role="navigation"><div class="main-menu"><ul class="nav navbar-nav navbar-right"><li><a href="index.html" >Home</a></li><li><a href="about.html">About</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Graphic Design<span class="caret"></span></a><div class="dropdown-menu"><ul><li><a href="Miss-Q.html">MissQ</a></li><li><a href="puyi.html">puyi</a></li><li><a href="center.html">center</a></li></ul></div></li><li><a href="contact.html" class="dropdown-toggle" data-toggle="dropdown">App&Web&nbsp;UI<span class="caret"></span></a><div class="dropdown-menu"><ul><li><a href="shoppingcartdemo2.html">線上開店</a></li><li><a href="appdemo1.html">尚青購</a></li></ul></div></li></ul></div></nav></div></header>'
    );
});


// 點擊側邊欄標題,滑動至同頁面相關內容

// 點擊側邊欄的連結
$(".sidenav a").click(
    function(){
        // 抓取相對應內容的與頁面TOP的距離
        var target = $($(this).attr("href")).offset().top;
        // 距離減一點點,為了閃header
        // 注意!!!!!!距離單位不能亂改!!只能用預設(pixel),要跟定義的target一樣
        target -= 110;
        //頁面的跳轉用滑動的方式 
        $("html").animate({scrollTop:target},500);
        // $("html") = $("html,body")

        return false;
    });




