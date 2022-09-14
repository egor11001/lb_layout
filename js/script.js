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
  $('.header_menu').css({ 'box-shadow': '0px 30px 22px -20px rgba(196, 196, 196, 0.3)' });
}

function toggleHeaderDropdownMenu(dropdownId) {
  $('.header_menu').css({ 'box-shadow': '0px 30px 22px -20px rgba(196, 196, 196, 0.1)' });
  let dropdown = document.getElementById(dropdownId);
  $('.header_menu__dropdown').css({ display: 'none' });
  dropdown.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function hoverHeaderDropdownMenuNode(dropdownId) {
  let parent = document.getElementById(dropdownId);
  parent.classList.add('header_dropdown_list_item-active');
  let dropDownNodeId = `${dropdownId}-dropdown`;
  let dropdown = document.getElementById(dropDownNodeId);
  $('.header_dropdown_list_more').css({ display: 'none' });
  dropdown.style.display = 'flex';
}

function unHoverHeaderDropdownMenuNode(dropdownId) {
  $('.header_dropdown_list_more').css({ display: 'none' });
  let parent = document.getElementById(dropdownId);
  parent.classList.remove('header_dropdown_list_item-active');
}

function toggleHeaderBrandsAlphabet() {
  let eng = document.getElementById('brands-eng-alphabet');
  let ru = document.getElementById('brands-ru-alphabet');

  if (eng.style.display === 'flex') {
    eng.style.display = 'none';
    ru.style.display = 'flex';
    $('#brands-toggle-lang-alphabet').text('A-Z');
  } else {
    eng.style.display = 'flex';
    ru.style.display = 'none';
    $('#brands-toggle-lang-alphabet').text('А-Я');
  }
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
  /*  if (!$(this).hasClass('header__search_btn-active')) {
    $(this).toggleClass('header__search_btn-active');
    $('#header-logo').hide();
    $('#header-location').hide();
    $('#header-burger').hide();
    $('#header-search-input').show();
    $('#header-search-result').show('fast');
    $('#header-close-search').show();
    let menu = document.getElementById('header-nav');
    let burger = document.getElementById('header-burger');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
      document.body.style.overflow = 'auto';
      burger.style.transform = 'rotate(0deg)';
    }
  } else { */
  if (!$(this).hasClass('header-search-btn-active')) {
    $(this).toggleClass('header-search-btn-active');
    $('.header-search').css({ display: 'flex' });
    let menu = document.getElementById('header-nav');
    let burger = document.getElementById('header-burger');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
      document.body.style.overflow = 'auto';
      burger.style.transform = 'rotate(0deg)';
    }
  } else {
    $('.header-search-btn').toggleClass('header-search-btn-active');
    $('#header-search-input').val('');
    $('.header-search').hide();
  }
});

$('#header-search-close').click(function () {
  $('.header-search-btn').toggleClass('header-search-btn-active');
  $('#header-search-input').val('');
  $('.header-search').hide();
});

$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active-dropdown');
  $(this).find('.dropdown-menu').slideToggle(150);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active-dropdown');
  $(this).find('.dropdown-menu').slideUp(150);
});
$('.dropdown .dropdown-menu li').click(function (e) {
  if ($(this).hasClass('disable')) {
    e.stopPropagation();
    return;
  }
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

$('.sort-popup').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.sort-popup-dropdown').slideToggle(150);
});
$('.sort-popup').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.sort-popup-dropdown').slideUp(150);
});
$('.sort-popup .sort-popup-dropdown .sort-popup-dropdown_item').click(function () {
  $(this).parents('.sort-popup').find('.sort-popup-title').text($(this).text());
  $(this).parents('.sort-popup').find('input').attr('value', $(this).attr('id'));
  $('.sort-popup-dropdown').find('.sort-popup-active-item').removeClass('sort-popup-active-item');
  $(this).toggleClass('sort-popup-active-item');
});

$('.item-like-btn').click(function (e) {
  e.preventDefault();
  if ($(this).hasClass('item-like-btn-active')) {
    $(this).toggleClass('item-like-btn-active');
  } else {
    $(this).toggleClass('item-like-btn-active');
  }
});

$('#btn-modal').click(function () {
  $('#overlay').toggleClass('is-visible');
  $('#modal-sizes').toggleClass('is-visible');
  document.body.style.overflow = 'hidden';
});

$('#close-btn').click(function () {
  $('#overlay').removeClass('is-visible');
  $('#modal-sizes').removeClass('is-visible');
  document.body.style.overflow = 'auto';
});

$('.on-subscribe-size').click(function () {
  $('#overlay').toggleClass('is-visible');
  $('#modal-size-notif').toggleClass('is-visible');
  document.body.style.overflow = 'hidden';
});

$('#close-btn-size-notif').click(function (e) {
  e.preventDefault();
  $('#overlay').removeClass('is-visible');
  $('#modal-size-notif').removeClass('is-visible');
  document.body.style.overflow = 'auto';
});

$('#modal-size-notif-submit').click(function (e) {
  if ($('#modal-size-notif-value').val() === '') {
    e.preventDefault();
    return;
  }
});

$('#profile-change-pass').click(function (e) {
  e.preventDefault();
  $('#overlay').toggleClass('is-visible');
  $('#modal-profile-pass').toggleClass('is-visible');
  document.body.style.overflow = 'hidden';
});

$('#close-btn-profile-pass').click(function (e) {
  e.preventDefault();
  $('#overlay').removeClass('is-visible');
  $('#modal-profile-pass').removeClass('is-visible');
  document.body.style.overflow = 'auto';
});

$('#create-address').click(function () {
  $('#overlay').toggleClass('is-visible');
  $('#modal-addresses-create').toggleClass('is-visible');
  document.body.style.overflow = 'hidden';
});

$('#close-btn-addresses-create').click(function (e) {
  e.preventDefault();
  $('#overlay').removeClass('is-visible');
  $('#modal-addresses-create').removeClass('is-visible');
  document.body.style.overflow = 'auto';
});

$('.delete-address').click(function () {
  $('#overlay').toggleClass('is-visible');
  $('#modal-addresses-delete').toggleClass('is-visible');
  document.body.style.overflow = 'hidden';
});

$('#close-btn-addresses-delete').click(function (e) {
  e.preventDefault();
  $('#overlay').removeClass('is-visible');
  $('#modal-addresses-delete').removeClass('is-visible');
  document.body.style.overflow = 'auto';
});

$('#overlay').click(function () {
  $('#overlay').removeClass('is-visible');
  $('#modal-addresses-delete').removeClass('is-visible');
  $('#modal-profile-pass').removeClass('is-visible');
  $('#modal-size-notif').removeClass('is-visible');
  $('#modal-sizes').removeClass('is-visible');
  document.body.style.overflow = 'auto';
});

$('#copy-form-bonus-link').click(async function (e) {
  e.preventDefault();
  let val = $('#form-bonus-link').val();
  await navigator.clipboard.writeText(val);
  $('#copy-form-bonus-link').text('Скопировано!');
});

$('.custom-checkbox-click').click(function () {
  let input = $(this).find('input');
  if (input.is(':checked')) {
    input.prop('checked', false);
    $(this).find('.custom-checkbox').removeClass('custom-checkbox-active');
  } else {
    input.prop('checked', true);
    $(this).find('.custom-checkbox').toggleClass('custom-checkbox-active');
  }
});

$('.faq_item_name').click(function () {
  if ($(this).hasClass('active')) {
    $(this).parent().find('.faq_item_desc').slideUp(150);
    $(this).removeClass('active');
  } else {
    $(this).parent().find('.faq_item_desc').slideToggle(150);
    $(this).toggleClass('active');
  }
});

$('.notif-check-btn').click(function (e) {
  e.preventDefault();
  $(this).find('.custom-checkbox').toggleClass('custom-checkbox-active');
  $(this)
    .parent()
    .animate(
      { 'margin-right': '+=600', opacity: 0 },
      {
        complete: () =>
          $(this)
            .parent()
            .css({ opacity: '0', width: '0', height: '0', postition: 'absolute', left: '0', bottom: '0' }),
        duration: 400,
      },
    );
});

$('#address-search-value').on(
  'input',
  _.debounce(async function (e) {
    console.log(e.target.value);
    let res = await ymaps.suggest(e.target.value, { results: 6 });
    console.log(res);
    await $('#address-search-options').empty();
    for (let i = 0; i < res.length; i++) {
      await $('#address-search-options').append(`<div id='${res[i].value}' class='search-option'>
      <h3>${res[i].displayName}</h3>
    </div>`);
    }
    $('.search-option').click(function () {
      $('#address-search-value').val($(this).attr('id'));
      $('#address-search-options').empty();
      $('#address-search-value').focusout();
    });

    $(document).click(function (e) {
      if (!$(e.target).is('#address-search-options, .search-option')) {
        $('#address-search-options').empty();
      }
    });
  }, 400),
);
