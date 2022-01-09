


$('.faq__question').click((event)=>{

    let target = event.target;

    if (!target.classList.contains('faq__question')) {
        target = target.parentNode;
    }

    target.classList.toggle('accordion_open');
})