// set initial var
let boldButtonClicks = 0;
let itaButtonClicks = 0;
let undaButtonClicks = 0;

// bold
document.getElementById('bold-id').addEventListener('click',function(){
    const text = document.getElementById('txt-area');
    boldButtonClicks += 1;
    if(boldButtonClicks%2==1){
        text.style.fontWeight = 'bold';
    }
    else {
        text.style.fontWeight = 'normal';
    }
    
});

// italic
document.getElementById('ita-id').addEventListener('click',function(){
    const text = document.getElementById('txt-area');
    itaButtonClicks += 1;
    if(itaButtonClicks%2==1){
        text.style.resize = 'none';
        text.style.fontStyle = 'italic';
    }
    else {     
        text.style.fontStyle = 'normal';
    }
    
});

// underline
document.getElementById('unda-id').addEventListener('click',function(){
    const text = document.getElementById('txt-area');
    undaButtonClicks += 1;
    if(undaButtonClicks%2==1){
        text.style.textDecoration = 'underline';
    }
    else {     
        text.style.textDecoration = 'none';
    }
});

// align left
document.getElementById('a-l').addEventListener('click',function(){
    const text = document.getElementById('txt-area');
    text.style.textAlign = 'left';
});

// align middle
document.getElementById('a-m').addEventListener('click',function(){
    const text = document.getElementById('txt-area');
    text.style.textAlign = 'center';
});

// align right
document.getElementById('a-r').addEventListener('click',function(){
    const text = document.getElementById('txt-area');
    text.style.textAlign = 'right';
});

// align justify
document.getElementById('a-j').addEventListener('click',function(){
    const text = document.getElementById('txt-area');
    text.style.textAlign = 'justify';
});

// number i/p
document.getElementById('n-id').addEventListener('keyup',function(event){
    const text = document.getElementById('txt-area');
    const size = event.target.value;
    text.style.fontSize = size + "px";
});

// number click
document.getElementById('n-id').addEventListener('click',function(event){
    const text = document.getElementById('txt-area');
    text.style.fontSize = event.target.value + "px";
});

// color
document.getElementById('c-id').addEventListener('mouseover',function(){
    const text = document.getElementById('txt-area');
    const col = document.getElementById('c-id').value;
    text.style.color = col;
});