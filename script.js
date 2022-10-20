// Navbar=============================================

// Hightlights nav-item of the current page
let current_url = document.location;
document.querySelectorAll(".link").forEach(function(e){
   if(e.href == current_url){
    e.classList = " link current";
   }
});


// onclick dropdown function 
function dropdown() {
    document.getElementById("nav-icon").classList.toggle("fa-xmark");
    document.getElementById("nav-icon").classList.toggle("fa-bars");
    if ( document.getElementById("link-container").classList.contains('wide-menu') ){
        document.getElementById("link-container").classList = 'mobile-menu';
    } else {
        document.getElementById("link-container").classList = 'wide-menu';
    }
  }


//   Close dropdown on resize 
  window.addEventListener('resize', (e)=>{
    if (window.innerWidth < "636px"){
        document.getElementById("link-container").classList = 'mobile-menu';
        document.getElementById("nav-icon").classList= "fa fa-bars";
    } else {
        document.getElementById("link-container").classList = 'wide-menu';
        document.getElementById("nav-icon").classList= "fa fa-bars";
    }
  });