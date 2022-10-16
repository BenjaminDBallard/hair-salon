// Navbar

// Hightlights nav-item of the current page
let current_url = document.location;
document.querySelectorAll(".link-container .link").forEach(function(e){
   if(e.href == current_url){
      e.classList += " current";
   }
});