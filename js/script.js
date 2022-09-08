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
  const swiperMain = new Swiper('#swiper-main', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.main-banner-next',
      prevEl: '.main-banner-prev',
    },
    pagination: {
      el: '.main-banner-pagination',
    },
  });

  const swiperMainProducts = new Swiper('#swiper-main-products', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    watchOverflow: true,
    spaceBetween: 24,
    navigation: {
      nextEl: '.main-products-next',
      prevEl: '.main-products-prev',
    },
  });

  const swiperMainNews = new Swiper('#swiper-main-news', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    spaceBetween: 144,
    navigation: {
      nextEl: '.main-news-next',
      prevEl: '.main-news-prev',
    },
  });

  const swiperProduct = new Swiper('#swiper-product', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.product-photo-next',
      prevEl: '.product-photo-prev',
    },
    pagination: {
      el: '.product-photo-pagination',
    },
  });
});

function toggleHeaderMenu() {
  let menu = document.getElementById('header-nav');
  let burger = document.getElementById('header-burger');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    document.body.style.overflow = 'auto';
    burger.style.transform = 'rotate(0deg)';
  } else {
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
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

function toggleInfoTabs(tabId) {
  let el1 = document.getElementById('product-info-1');
  let el2 = document.getElementById('product-info-2');
  let el3 = document.getElementById('product-info-3');
  let target = document.getElementById('product-info-target');

  if (tabId === 'product-info-1') {
    if (el1.classList.contains('product__info_btn-active')) {
      return;
    } else {
      el1.classList.add('product__info_btn-active');
      el2.classList.remove('product__info_btn-active');
      el3.classList.remove('product__info_btn-active');
      target.textContent =
        'Хлопок 100%. Лайкра 100%. Резина 100%. Хлопок 100%. Лайкра 100%. Резина 100% Хлопок 100%. Лайкра 100%. Резина 100%. Хлопок 100%. Лайкра 100%. Резина 100% Хлопок 100%. Лайкра 100%. Резина 100%. Хлопок 100%. Лайкра 100%. Резина 100% Хлопок 100%. Лайкра 100%. Резина 100%. Хлопок 100%. Лайкра 100%. Резина 100% Хлопок 100%. Лайкра 100%. Резина 100%. Хлопок 100%. Лайкра 100%. Резина 100%';
    }
  }

  if (tabId === 'product-info-2') {
    if (el2.classList.contains('product__info_btn-active')) {
      return;
    } else {
      el2.classList.add('product__info_btn-active');
      el1.classList.remove('product__info_btn-active');
      el3.classList.remove('product__info_btn-active');
      target.textContent = 'Уход уход уход уход уход уход уход уход уход уход уход уход уход уход';
    }
  }

  if (tabId === 'product-info-3') {
    if (el3.classList.contains('product__info_btn-active')) {
      return;
    } else {
      el3.classList.add('product__info_btn-active');
      el1.classList.remove('product__info_btn-active');
      el2.classList.remove('product__info_btn-active');
      target.textContent = 'Доставка доставка доставка доставка доставка доставка';
    }
  }
}

$('.header-search-btn').click(function () {
  if (!$(this).hasClass('header__search_btn-active')) {
    $(this).toggleClass('header__search_btn-active');
    $('#header-logo').hide();
    $('#header-location').hide();
    $('#header-burger').hide();
    $('#header-search-input').show();
    $('#header-search-result').show('fast');
    $('#header-close-search').show();
  } else {
    $(this).toggleClass('header__search_btn-active');
    $('#header-logo').show();
    $('#header-location').show();
    $('#header-burger').show();
    $('#header-search-result').hide('fast');
    $('#header-search-input').hide();
    $('#header-close-search').hide();
  }
});

$('#header-close-search').click(function () {
  $('.header-search-btn').toggleClass('header__search_btn-active');
  $('#header-logo').show();
  $('#header-location').show();
  $('#header-burger').show();
  $('#header-search-result').hide('fast');
  $('#header-search-input').hide();
  $('#header-search-input').val('');
  $('#header-close-search').hide();
});

$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(150);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(150);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

document.getElementById('btn-modal').addEventListener('click', function () {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
  document.body.style.overflow = 'hidden';
});
document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
  document.body.style.overflow = 'auto';
});
document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
  document.body.style.overflow = 'auto';
});
