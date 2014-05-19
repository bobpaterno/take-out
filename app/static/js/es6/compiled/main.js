function ajax(url, type) {
  'use strict';
  var data = arguments[2] !== (void 0) ? arguments[2] : {};
  var success = arguments[3] !== (void 0) ? arguments[3] : (function(r) {
    return console.log(r);
  });
  var dataType = arguments[4] !== (void 0) ? arguments[4] : 'html';
  $.ajax({
    url: url,
    type: type,
    dataType: dataType,
    data: data,
    success: success
  });
}
(function() {
  'use strict';
  $(document).ready(initialize);
  function initialize() {
    initMenu();
    initOrderForm();
    $('#order-form').on('click', '#more', addDish);
  }
  function addDish() {
    ajax("/menus/orderform", 'get', null, (function(html) {
      $('#more').remove();
      $('#order-form').append(html);
    }));
  }
  function initMenu() {
    ajax("/menus", 'get', null, (function(html) {
      $('#menu').empty().append(html);
    }));
  }
  function initOrderForm() {
    ajax("/menus/orderform", 'get', null, (function(html) {
      $('#order-form').empty().append(html);
    }));
  }
})();

//# sourceMappingURL=main.map
