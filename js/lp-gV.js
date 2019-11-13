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

// jQuery Form Tabs + Validation
if (window.matchMedia("(max-width: 560px)").matches) {
$(function () {
  var $sections = $('.l-tab');

  function navigateTo(index) {
    // Mark the current section with the class 'current'
    $sections
      .removeClass('current')
      .eq(index)
        .addClass('current');
    // Show only the navigation buttons that make sense for the current section:
    $('#prevBtn').toggle(index > 0);
    var atTheEnd = index >= $sections.length - 1;
    $('#nextBtn').toggle(!atTheEnd);
    $('.m-button[type=submit]').toggle(atTheEnd);
  }

  function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter('.current'));
  }

  // Previous button is easy, just go back
  $('#prevBtn').click(function() {
    navigateTo(curIndex() - 1);
  });

  // Next button goes forward iff current block validates
  $('#nextBtn').click(function() {
    $('#l-vypuskForm').parsley().whenValidate({
      group: 'block-' + curIndex()
    }).done(function() {
      navigateTo(curIndex() + 1);
    });
  });

  // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
  $sections.each(function(index, section) {
    $(section).find(':input').attr('data-parsley-group', 'block-' + index);
  });
  navigateTo(0); // Start at the beginning
});
}

// Form Tabs

/*

//if (window.matchMedia("(max-width: 560px)").matches) {
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("l-tab");
  x[n].style.display = "block";
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("l-tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease t he current tab by 1:
  currentTab = currentTab + n;
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, xt, i, valid = true;
  x = document.getElementsByClassName("l-tab");
  y = x[currentTab].getElementsByTagName("input");
  xt = document.getElementById("amount-field");
  // Value Checker
  if (xt.value < 10) {
    xt.className += " invalid";
    valid = false;
  }
  return valid;
}
//}
/*
function tabReset() {
  currentTab = 0;
  var x = document.getElementsByClassName("l-tab");
  x[0].style.display = "block";
}
*/



// Vypusk JS
$(document).ready(function(){
  $(".review-carousel").owlCarousel({
  nav:false,
  mouseDrag: false,
  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  //navContainer: '.custom-nav',
  responsive:{
    250:{
        items:1,
        loop:true
    },
    480:{
        nav:true,
        margin:20
    },
    1030:{
        items:2,
        margin:50,
        loop:true
    }
    }
  });
});

// Tabs Self
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
  banner.className = 'banner ' + bTargetID;

  for (var i = 0; i < bannerTabs.length; i++) {
    bannerTabs[i].classList.remove("active");
  }
  bTarget.className = 'bs-tabs active';
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
