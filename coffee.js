var sidenav=document.querySelector(".side-navbar")

function shownavbar(){
     sidenav.style.left="0"   //for navbar transition it comes -40% to 0 so the black screen willbe appear
}

function closenavbar(){
sidenav.style.left="-40%"  // again the blackscreen(navbar) will disappear
}

// popup-box 
var addPopup=document.getElementById("popup-btn")
 
var popupOverlay= document.querySelector(".popup-overlay");

var popupBox=document.querySelector(".popup-box");

var cancelbtn=document.querySelector(".cancel")



addPopup.addEventListener("click", function(){
     popupBox.style.display="block";
     popupOverlay.style.display="block";
})

cancelbtn.addEventListener("click", function(){
     popupBox.style.display="none";
     popupOverlay.style.display="none";
})



