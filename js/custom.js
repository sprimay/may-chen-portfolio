$(function () {
    //next btn
    $('.next_btn').click(function(){
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
    //home btn
    $('.home_btn').click(function(){
        $('html, body').animate({ scrollTop:0 }, 500, 'linear');
    });
    //tabChange
    let $li = $('ul.tab-title li');
    $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();

    $li.click(function () {
        $($(this).find('a').attr('href')).show().siblings('.tab-inner').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
    //smoove
    $('.offset').smoove({
        offset:'50%'
    });
});