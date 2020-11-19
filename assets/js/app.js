console.log("tabs");
console.log("modal");


$(function(){
    $(".click__phone").click(function(){
        $(".header__num").slideToggle(1000);
    });
});



$(function(){
    var input = document.querySelectorAll(".result");
    document.querySelectorAll("#plus").forEach((elem,index)=>{
        elem.onclick=e=>{
            input[index].value = Number(input[index].value) + 1;
        }
    });

    document.querySelectorAll("#minus").forEach((elem,index)=>{
        elem.onclick=e=>{
            input[index].value = Number(input[index].value) - 1;
        }
    });
});