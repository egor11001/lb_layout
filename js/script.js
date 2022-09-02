/* var data = {
    "menu":[
            {"name": "Node 1", "link":"#", "submenu": [
          {"name": "Node 1", "link":"#", "submenu": null},
          {"name": "Node 2", "link":"#", "submenu": null},
          {"name": "Node 3", "link":"#", "submenu": null},
          {"name": "Node 4", "link":"#", "submenu": null},
          {"name": "Node 5", "link":"#", "submenu": null}
      ]},
      {"name": "Node 2", "link":"#", "submenu": [
          {"name": "Node 1", "link":"#", "submenu": null},
          {"name": "Node 2", "link":"#", "submenu": null},
          {"name": "Node 3", "link":"#", "submenu": null},
          {"name": "Node 4", "link":"#", "submenu": null},
          {"name": "Node 5", "link":"#", "submenu": null}
      ]},       
      {"name": "Node 3", "link":"#", "submenu": [
          {"name": "Node 1", "link":"#", "submenu": null},
          {"name": "Node 2", "link":"#", "submenu": null},
          {"name": "Node 3", "link":"#", "submenu": null},
          {"name": "Node 4", "link":"#", "submenu": null},
          {"name": "Node 5", "link":"#", "submenu": null}
      ]},
      {"name": "Node 4", "link":"#", "submenu": [
          {"name": "Node 1", "link":"#", "submenu": null},
          {"name": "Node 2", "link":"#", "submenu": null},
          {"name": "Node 3", "link":"#", "submenu": null},
          {"name": "Node 4", "link":"#", "submenu": null},
          {"name": "Node 5", "link":"#", "submenu": null}
      ]},
      {"name": "Node 5", "link":"#", "submenu": [
          {"name": "Node 1", "link":"#", "submenu": null},
          {"name": "Node 2", "link":"#", "submenu": null},
          {"name": "Node 3", "link":"#", "submenu": null},
          {"name": "Node 4", "link":"#", "submenu": null},
          {"name": "Node 5", "link":"#", "submenu": null}
      ]}
  ]
};

// Parses the data and creates the menu
function parseMenu(element, menu) {
    for (var i=0; i<menu.length; i++) {
      var nestedli = document.createElement('li');
      nestedli.setAttribute('style', 'display:none;');
      nestedli.setAttribute('onmouseenter', "showNodes(this)");
      nestedli.setAttribute('onmouseleave', "hideNodes(this)");
        var link = document.createElement('a');
        link.setAttribute('href', menu[i].link);
        link.appendChild(document.createTextNode(menu[i].name));
      nestedli.appendChild(link);
        if (menu[i].submenu!=null) {
          var subul = document.createElement('ul');
            nestedli.appendChild(subul);
            parseMenu(subul, menu[i].submenu);
        }
        element.appendChild(nestedli);

    }
}
// Shows the drop down elements 
function showNodes(element){

  var menu = document.getElementById('drop-down');
  menu.style.display = "block";
  var lis = element.querySelectorAll("ul > li");
  for (var i=0;i<lis.length;i++) {
    lis[i].style.display = "block";
  }  
}

// Hides the drop down elements
function hideNodes(element){

  var lis = element.querySelectorAll("ul > li");
  for (var i=0;i<lis.length;i++) {
    lis[i].style.display = "none";
  }  
} */

$(document).ready(function () {
  const swiper = new Swiper('.swiper_main', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});

function toggleHeaderMenu() {
  let menu = document.getElementById('header-nav');
  let burger = document.getElementById('header-burger');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    burger.style.transform = 'rotate(0deg)';
  } else {
    menu.style.display = 'block';
    burger.style.transform = 'rotate(90deg)';
  }
  /* var lis = document.querySelectorAll("#drop-down > li");
    for (var i=0;i<lis.length;i++) {
      lis[i].style.display = "block";
    }   */
}

// Shows the drop down
function showHeaderMenu() {
  var menu = document.getElementById('header-nav');
  menu.style.display = 'block';
  /* var lis = document.querySelectorAll("#drop-down > li");
  for (var i=0;i<lis.length;i++) {
    lis[i].style.display = "block";
  }   */
}

// Hide the drop down
function hideHeaderMenu() {
  let menu = document.getElementById('header-nav');
  menu.style.display = 'none';
}

function showHeaderMenuNode() {
  var menu = document.getElementById('header-dropdown-node');
  menu.style.display = 'flex';
}

// Hide the drop down
function hideHeaderMenuNode() {
  let menu = document.getElementById('header-dropdown-node');
  menu.style.display = 'none';
}
