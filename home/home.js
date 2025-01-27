let a=0
function serihu(){
    naiyou=document.getElementById('serihu')
    if (a==0) naiyou.textContent='click me!'
    if (a==1) naiyou.textContent='嫌なことをただ堪えるのが我慢、'
    if (a==2) naiyou.textContent='好きなことのために堪えるのが辛抱。'
    if (a==3) naiyou.textContent='我慢には不満があり、'
    if (a==4) naiyou.textContent='辛抱には希望がある。'
    if (a==5) naiyou.textContent='我慢はいずれ爆発し、'
    if (a==6) naiyou.textContent='辛抱はいずれ実る。'
    if (a==7) naiyou.textContent='我慢しなくてよい。'
    if (a==8) naiyou.textContent='辛抱しよう！'
    if (a==9) naiyou.textContent=''
    a+=1
    if (a>9) a=1
}
document.addEventListener('DOMContentLoaded', function() {
    serihu()
})