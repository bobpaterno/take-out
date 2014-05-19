/* jshint unused: false */

// global functions
function ajax(url, type, data={}, success=r=>console.log(r), dataType='html'){
  'use strict';
  $.ajax({url:url, type:type, dataType:dataType, data:data, success:success});
}


(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    initMenu();
    initOrderForm();
    $('#order-form').on('click','#more', addDish);
  }

  function addDish() {
    ajax(`/menus/orderform`, 'get', null, (html)=>{
      $('#more').remove();
      $('#order-form').append(html);
    });
  }

  function initMenu() {
    ajax(`/menus`, 'get', null, (html)=>{
      $('#menu').empty().append(html);
    });
  }

  function initOrderForm() {
    ajax(`/menus/orderform`, 'get', null, (html)=>{
      $('#order-form').empty().append(html);
    });
  }

})();
