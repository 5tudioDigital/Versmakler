(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PT4V7D6');


var Webflow = Webflow || [];
function getCookie(e) {
    for (var t = e + "=", o = document.cookie.split(";"), c = 0; c < o.length; c++) {
        for (var n = o[c];
            " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
    }
    return null
}

function setCookie(e, t, o) {
    var c = "";
    if (o) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), c = "; expires=" + n.toUTCString()
    }
    document.cookie = e + "=" + (t || "") + c + "; path=/"
}

    
document.getElementById("consentBtn").onclick = function () {
    window.localStorage.setItem("CB", "true"), checkSettings()
}, 
    
document.getElementById("consentBtnCheck").onclick = function () {
    window.localStorage.setItem("CB", "true"), checkSettings()
}, 
    
document.getElementById("DeleteCookies").onclick = function () {
    deletecookies()
}, 
    
document.getElementById("NoCookies").onclick = function () {
    nocookies()
}, 
    
document.getElementById("NoCookiesSettings").onclick = function () {
    nocookies()
};


var AN_cookie = getCookie("AN_DS"),
    alreadyLoaded = "true" === window.localStorage.getItem("CB");


function checkSettings() {
    document.getElementById("AN_Check").checked ? setCookie("AN_DS", "true", 999) : setCookie("AN_DS", "false", 999), 
    location.reload()
}


function deletecookies() {
    for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
        var o = e[t].split("=");
        document.cookie = o[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;"
    }
    
    localStorage.clear(), 
    location.reload()
}


function nocookies() {
    deletecookies(), 
    setCookie("AN_DS", "false", 999), 
    setCookie("NOCO", "true", 999), 
    window.localStorage.setItem("CB", "true"), 
    location.reload()
}



"true" == AN_cookie && (document.getElementById("AN_Check").checked = !0), 


    
    
"false" == AN_cookie && (document.getElementById("AN_Check").checked = !1), 



                                                                               
    AN_cookie || (document.getElementById("AN_Check").checked = !0), 



alreadyLoaded ? document.getElementById("consentPopup").style.display = "none" : (document.getElementById("consentPopup").style.display = "block") 
