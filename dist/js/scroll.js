function elem_in_visible_area(selector) {
 
    let elem_p = $(selector),
    elem_p_height = elem_p.height(),
    offset_top_el = elem_p.offset().top,
    offset_bottom_el = offset_top_el + elem_p.height(),
    scrolled = $(window).scrollTop(),
    scrolled_bottom = scrolled + $(window).height();
   
if (scrolled_bottom > offset_top_el && offset_bottom_el > scrolled) {
    return true;
}
return false;
 
      
    }
    
    $(document).scroll(function() {
      if ($(window).scrollTop() > 104) {
        if (elem_in_visible_area('#vis-1')) {
          $('.sidebar-menu__first').addClass('active');
          $('.sidebar-menu__second').removeClass('active');
        }
        else if (elem_in_visible_area('#vis-2')) {
          $('.sidebar-menu__second').addClass('active');
          $('.sidebar-menu__first').removeClass('active');
          $('.sidebar-menu__third').removeClass('active');
        }
      
        else if (elem_in_visible_area('#vis-3')) {
          $('.sidebar-menu__third').addClass('active');
          $('.sidebar-menu__second').removeClass('active');
          $('.sidebar-menu__fourth').removeClass('active');
        }
        else if (elem_in_visible_area('#vis-4')) {
          $('.sidebar-menu__fourth').addClass('active');
          $('.sidebar-menu__third').removeClass('active');
          $('.sidebar-menu__fifth').removeClass('active');
          
        }
      
        else if (elem_in_visible_area('#vis-5')) {
          $('.sidebar-menu__fifth').addClass('active');
          $('.sidebar-menu__fourth').removeClass('active');  
        }
      }
      
    });
    
    
    
    
    
    $('.login-form__reg').click(function () {
        $('.reg-form').addClass('active');
        $('.login-form').addClass('hide');
        $('.members-box__second-title-form h2').html('Регистрация');
    });