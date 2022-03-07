//Coded by Simprole
var main=document.querySelector("select")
var img=document.querySelector("img")
var pre=document.getElementById("pre")
var post=document.getElementById("post")
var page_link
var page
var change =new Event('change')
    
    $(document).ready(function(){
        page = main.selectedOptions[0].innerText
     });

    main.addEventListener("change", function() {
        page = this.selectedOptions[0].innerText
    })
    
    pre.onclick  = function(){
        if(page>1){
            page=page-1
            main.selectedIndex=page-1
            main.dispatchEvent(change)
            }else{
                alert("这已经是第一面了！")
            }
        }
    post.onclick  = function(){
        if(page<main.options.length){
            main.selectedIndex=page++
            main.dispatchEvent(change)
            }else{
            alert("这已经是最后一面了！")
         }
    }
    main.onchange=function(){
        img.setAttribute("src",this.value);
    }