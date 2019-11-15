// Show Password Icon
function showPassword() {
  var xB = document.getElementById("password");
  if (xB.type === "password") {
    xB.type = "text";
  } else {
    xB.type = "password";
  }
}

// Phone mask
$('#phone').mask('+7 (000) 000-00-00');

$.extend($.featherlight.defaults, {
  openSpeed: 250,
  closeSpeed: 250,
  persist: false,
  variant: 'l-modal-form',
});
$('.modal-link').featherlight($('#vypusk-form-zapros'), {persist: 'shared'});



// lightGallery Call
lightGallery(document.getElementById("photo-gallery"),{
  thumbnail:!0,
  counter:!1,
  download:!1,
  toggleThumb:!1,
  mode:"lg-fade",
  hideBarsDelay:3e4,
  thumbWidth:130,
  thumbMargin:10,
  thumbContHeight:130
});
lightGallery(document.getElementById("review-gallery-1"),{
  thumbnail:!0,
  counter:!1,
  download:!1,
  toggleThumb:!1,
  mode:"lg-fade",
  hideBarsDelay:3e4,
  thumbWidth:130,
  thumbMargin:10,
  thumbContHeight:130
});
lightGallery(document.getElementById("review-gallery-2"),{
  thumbnail:!0,
  counter:!1,
  download:!1,
  toggleThumb:!1,
  mode:"lg-fade",
  hideBarsDelay:3e4,
  thumbWidth:130,
  thumbMargin:10,
  thumbContHeight:130
});

// Vypusk Reviews Carousel
$(document).ready(function(){
  $(".review-carousel").owlCarousel({
  nav:true,
  mouseDrag: false,
  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  responsive:{
    250:{
        items:1,
        loop:true,
        nav:false
    },
    550:{
        nav:false,
        items:1,
        margin:20
    },
    1030:{
        items:2,
        nav:true,
        margin:42,
        loop:true
    }
    }
  });
});

// jQuery Form Tabs + Validation
if (window.matchMedia("(max-width: 560px)").matches) {
$(function () {
  var $sections = $('.l-tab');

  function navigateTo(index) {
    $sections
      .removeClass('current')
      .eq(index)
        .addClass('current');
    $('#prevBtn').toggle(index > 0);
    var atTheEnd = index >= $sections.length - 1;
    $('#nextBtn').toggle(!atTheEnd);
    $('.m-button[type=submit]').toggle(atTheEnd);
  }

  function curIndex() {
    return $sections.index($sections.filter('.current'));
  }

  $('#prevBtn').click(function() {
    navigateTo(curIndex() - 1);
  });

  $('#nextBtn').click(function() {
    $('#l-vypuskForm').parsley().whenValidate({
      group: 'block-' + curIndex()
    }).done(function() {
      navigateTo(curIndex() + 1);
    });
  });

  $sections.each(function(index, section) {
    $(section).find(':input').attr('data-parsley-group', 'block-' + index);
  });
  navigateTo(0);
});
}

// Vypusk Tabs
var radioTab;
var tabContent;
var bannerTabs

window.onload = function() {
    tabContent = document.getElementsByClassName('tab-wrapper');
    radioTab = document.getElementsByClassName('tab');
    bannerTabs = document.getElementsByClassName('bs-tabs');
    document.getElementById('bs2').click();
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
    }
}

document.getElementById('type-tab').onclick = function (event)   {
    var target = event.target;
    var targetParent = target.parentNode;
    if (targetParent.className == 'tab') {
       for (var i = 0; i < radioTab.length; i++) {
           if (targetParent == radioTab[i]) {
               showTabsContent(i);
               break;
}}}}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

document.getElementById('bs').onclick = function (bsSwitcher) {
  var banner = document.getElementById('intro');
  var bClass = banner.classList.value;
  var bTarget = event.target;
  var bTargetID = bTarget.id;
  if (bTarget.classList.contains('bs-tabs')) {
    for (var i = 0; i < bannerTabs.length; i++) {
      bannerTabs[i].classList.remove("active");
    }
    banner.className = 'banner ' + bTargetID;
    bTarget.className = 'bs-tabs active';
  }
}

const howtoTabLinks = document.querySelectorAll("#howto-tabs li");
const howtoTabPanels = document.querySelectorAll("#howto-panels div");
document.getElementById('howto-tabs').onclick = function () {
  var tTarget = event.target;
  var activeTabID;
  for (var i = 0; i < howtoTabLinks.length; i++) {
    howtoTabLinks[i].classList.remove("active");
    howtoTabPanels[i].classList.remove("active");
  }
  tTarget.className = 'active';
  for (var i = 0; i < howtoTabLinks.length; i++) {
    if (howtoTabLinks[i].classList.contains('active')) {
      activeTabID = i;
      howtoTabPanels[i].className = 'active';
    }
  }
}

// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
