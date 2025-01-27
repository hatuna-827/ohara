document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName('body')[0].innerHTML='<div id="main">'+document.getElementsByTagName('body')[0].innerHTML+'</div>'
    document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin','<div id="header"></div>')
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend','<div id="footer"></div>')
    var tag_target=document.getElementsByTagName('h2')
    if (tag_target.length!=0){
    for (i=0;i<tag_target.length;i++){
        tag_target[i].setAttribute("id",tag_target[i].innerText)
    }
    document.getElementsByTagName('h1')[0].insertAdjacentHTML('afterend','<div id="tag"></div>')
    for (i=0;i<tag_target.length;i++){
        document.getElementById('tag').insertAdjacentHTML('beforeend','<a href="#'+tag_target[i].id+'">'+(i+1)+'.'+tag_target[i].id+'</a>\n')
    }
    document.getElementById('tag').insertAdjacentHTML('beforebegin','<h2>目次<h2>')
    }
})
