// let banner = document.querySelector('.banner')
// let text = document.getElementById('text')
// let send = document.getElementById('send')
// let clear = document.getElementById('clear')

// send.addEventListener('click', function(){
//    let textValue = text.value;
//    banner.innerText = textValue
// })

// clear.addEventListener('click', function(){
//     banner.innerText = '';
//     text.value = '';
// })

// let banner = document.querySelector('.banner'),
// text = document.getElementById('text'),
// send = document.getElementById('send'),
// clear = document.getElementById('clear')

// send.addEventListener('click', function(){
//     let textValue = text.value
//     banner.innerText = textValue
// })

// clear.addEventListener('click', function(){
//     banner.innerText = ''
//     text.value = ''
// })

let banner = document.querySelector('.banner'),
text = document.getElementById('text'),
send = document.getElementById('send'),
clear = document.getElementById('clear')

send.addEventListener('click', function(){
    let textValue = text.value
    banner.innerText = textValue
})

clear.addEventListener('click', function(){
    banner.innerText = ''
    text.value = ''
})
