let bg = $('.bg');
let moon = $('.moon');
let mountain = $('.mountain');
let road = $('.road');
let text = $('#text');

$(window).on('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    bg.css('top', value * 0.5 + 'px');
    moon.css('left', -value * 0.5 + 'px');
    mountain.css('top', -value * 0.15 + 'px');
    road.css('top', value * 0.15 + 'px');
    text.css('top', value * 1 + 'px');
})