/*=====x=====x===== Hide Function =====x=====x===== */
$(document).ready(function(){
    $('.button1').click(function(){
        $('.hide').hide(1000);  /* 1000 mean 1 second, just a timing function */
    });
})

/*=====x=====x===== Show Function =====x=====x===== */
$(document).ready(function(){
    $('.button2').click(function(){
        $('.show').show('slow');  /* slow mean it show slowly, just a timing function */
    });
})

/*=====x=====x===== Hide and Show Button Function =====x=====x===== */
$(document).ready(function(){
    $('.hide_button').click(function(){
        $('.hide_show').hide('slow');
    })
    $('.show_button').click(function(){
        $('.hide_show').show('fast');
    })
})

/*=====x=====x===== On Click Toggle Function =====x=====x===== */
$(document).ready(function(){
    $('.button_on_click_toggle').on('click',function(){
        $('.on_click_toggle').toggle('fast');  /* fast mean it work fast, just a timing function */
    });
})

/*=====x=====x===== Single Click Toggle Function =====x=====x===== */
$(document).ready(function(){
    $('.button3').click(function(){
        $('.toggle').toggle('fast');  /* fast mean it work fast, just a timing function */
    });
})

/*=====x=====x===== Double Click Toggle Function =====x=====x===== */
$(document).ready(function(){
    $('.button4').dblclick(function(){
        $('.double_click_toggle').toggle();
    });
})

/*=====x=====x===== Mouse Enter Alert Function =====x=====x===== */
$(document).ready(function(){
    $('.button5').mouseenter(function(){
        alert('if you click, you will be H4ck3d!');
    });
})

/*=====x=====x===== Mouse Leave Alert Function =====x=====x===== */
$(document).ready(function(){
    $('.button6').mouseleave(function(){
        alert('if you leave mouse, you are H4ck3d!');
    });
})

/*=====x=====x===== Magic Button Function =====x=====x===== */
$(document).ready(function(){
    $('.button7').hover(function(){
        $(this).hide();
    });
})

/*=====x=====x===== On Focus Function =====x=====x===== */
$(document).ready(function(){
    $('.on_focus_input').on('focus',function(){
        $('.on_focus_content').css('background-color','red');
    });
})

/*=====x=====x===== Fade In/Out Toggle Function =====x=====x===== */
$(document).ready(function(){
    $('.fade_in_out_button').click(function(){
        $('.box1').fadeIn(1000);
        $('.box2').fadeOut(1500);
        $('.box3').fadeToggle(2000);
    })
})

/*=====x=====x===== slideUp, slideDown, slideToggle Function =====x=====x===== */
$(document).ready(function(){
    $('.slide_toggle_button').click(function(){
        $('.slide_toggle_content').slideToggle(); /* slideUp, slideDown, slideToggle */
    })
})

/*=====x=====x===== slideUp, slideDown, slideToggle Function with stop Button =====x=====x===== */
$(document).ready(function(){
    $('.start_slide_toggle_button').click(function(){
        $('.start_slide_toggle_content').slideToggle(3000); /* slideUp, slideDown, slideToggle */
    })
    $('.stop_slide_toggle_button').click(function(){
        $('.start_slide_toggle_content').stop();
    })
})

/*=====x=====x===== Call Back Function =====x=====x===== */
$(document).ready(function(){
    $('.call_back_button').click(function(){
        $('.call_back_content').hide(function(){
            alert('Hello World!')
        });  /* 3000 timing function */
    })
})

/*=====x=====x===== Jquery Chainning Function =====x=====x===== */
$(document).ready(function(){
    $('.chaining_button').click(function(){
        $('.chaining_content').css('color','green')
        .slideUp()
        .slideDown()
        .css('background','#ddd')
    })
})

/*=====x=====x===== Append, Prepend Function =====x=====x===== */
$(document).ready(function(){
    $('.append_prepend_button').click(function(){
        $('.append_prepend_content').append('<b>This is append Text</b>')
        .prepend('<b>This is prepend text</b>')
        .before('<b>This is before text</b>')
        .after('<b>This is after text</b>');
    })
})

/*=====x=====x===== Remove Function =====x=====x===== */
$(document).ready(function(){
    $('.remove_button').click(function(){
        $('.remove_content').remove();
    })
})

/*=====x=====x===== Empty Function =====x=====x===== */
$(document).ready(function(){
    $('.empty_button').click(function(){
        $('.empty_content').empty();
    })
})

/*=====x=====x===== Add Class, Remove Class, Toggle Class Function =====x=====x===== */
$(document).ready(function(){
    $('.add_class_button').click(function(){
        $('.add_class_content').toggleClass('add_background_color');
    })
})

/*=====x=====x===== Add Class, Remove Class, Toggle Class Function =====x=====x===== */
$(document).ready(function(){
    $('.add_class_button').click(function(){
        $('.add_class_content').toggleClass('add_background_color');
    })
})/*=====x=====x===== Using Css Property Function =====x=====x===== */
$(document).ready(function(){
    $('.css_button').click(function(){
        $('.css_content').css({
            'background':'#ccc',
            'color' : 'red',
            'padding': '10px',
            'font-size': '20px',
            'text-align': 'center',
        });
    })
})

/*=====x=====x===== Animation Function =====x=====x===== */
$(document).ready(function(){
    $('.animation_button').click(function(){
        $('.animation_content').animate({
            left:'250px',
            opacity: 0.5,
            width:'400px',
        }, 3000 );  /* 3000 timing function */
        $('.animation_content').css({
            background: 'blue',
        });
    })
})