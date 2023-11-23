// for nav scroll 
let sectionOffset = $("#about").offset().top;
$(window).scroll(function(){

    let windowScroll = $(window).scrollTop();



    if(windowScroll>sectionOffset){
        $(".navbar").css("backgroundColor","#595c5f");
        $(".navbar a").css("color","#fff");
        $("#btnUp").fadeIn(500)
    }
    else{
        $(".navbar a").css("color","black");
        $(".navbar").css("backgroundColor","white")
        $("#btnUp").fadeOut(500)
        
    }
})
// for nav scroll 



//start  scroll smooth
$("a").click(function(eventInfo){
    let Herf = $(eventInfo.target).attr("href");
    let spaceTop = $(Herf).offset().top;
    $("html, body").animate({scrollTop:spaceTop},1000);
})
// end scroll smooth



// start loading
$(document).ready(function(){
    $(".spinner").fadeOut(10,function(){
        $(".loading").fadeOut(10,function(){
            $("body").css("overflow", "auto")
            $(".loading").remove();

        });
    })
    

})
// end loading












// start sideBare
let colorBox = $(".color-box");
colorBox.eq(0).css("backgroundColor","blue");
colorBox.eq(1).css("backgroundColor","gray");
colorBox.eq(2).css("backgroundColor","gold");
colorBox.eq(3).css("backgroundColor","#09c");
colorBox.eq(4).css("backgroundColor","green");


$(".color-box").click(function(eventInfo){
    let itemColor = $(eventInfo.target).css("backgroundColor");
    $("#changeColor").css("color",`${itemColor}`);
})

$("#imges").click(function(eventInfo){
   let src =  $(eventInfo.target).attr("src");
   $(".home").css("backgroundImage",`url(${src})`)

})

let sliderWidht = $(".sideBarInner").innerWidth();
$("#sideBar").css("left",-sliderWidht)

$(".sidebar i").click(function(){

   if($("#sideBar").css("left")=="0px"){
       $("#sideBar").animate({left:-sliderWidht},1000)
    }
    else{
        $("#sideBar").animate({left:"0px"},1000)
   }
})
// end sideBare



