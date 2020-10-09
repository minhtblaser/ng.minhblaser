const map_img = "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/53/Summoner%27s_Rift_Update_Map.png/revision/latest?cb=20170223053555";
let body = document.getElementById('body2');
body.insertAdjacentHTML('afterbegin', `<img src = ${map_img} id="mapImg"  ></img>`);
 

// by MINH

    document.getElementById ("all-table").style.display="none"
    document.getElementById ("map1").style.display="none"

    document.getElementById ("btn-top").onclick = function () {
    document.getElementById ("map").style.display="none"
    document.getElementById ("mapImg").style.display="none"
    document.getElementById ("map1").style.display="block"
}
document.getElementById ("btn-mid").onclick = function () {
    document.getElementById ("map").style.display="none"
    document.getElementById ("mapImg").style.display="none"
    document.getElementById ("map1").style.display="block"
}


document.getElementById ("btn-sp").onclick = function () {
    document.getElementById ("map").style.display="none"
    document.getElementById ("mapImg").style.display="none"
    document.getElementById ("map1").style.display="block"
}


document.getElementById ("btn-ad").onclick = function () {
    document.getElementById ("map").style.display="none"
    document.getElementById ("mapImg").style.display="none"
    document.getElementById ("map1").style.display="block"
}

document.getElementById ("btn-jungle").onclick = function () {
    document.getElementById ("map").style.display="none"
    document.getElementById ("mapImg").style.display="none"
    document.getElementById ("map1").style.display="block"
}

document.getElementById ("map123").onclick=function () {
    
    document.getElementById ("map").style.display="block";
    document.getElementById ("mapImg").style.display="block";
    document.getElementById ("map1").style.display="block"
}