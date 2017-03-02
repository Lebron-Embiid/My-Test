/**
 * Created by Administrator on 2016/12/14.
 */
function ajax(url,fnSucc,fnFaild){
    var oAjax;
    if(window.XMLHttpRequest){
        oAjax = new XMLHttpRequest();
    }
    else{
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    oAjax.open("GET",url+"?t="+new Date().getTime(),true); //阻止缓存
    oAjax.send();
    oAjax.onreadystatechange = function () {
        if(oAjax.readyState == 4 && oAjax.status == 200){
            fnSucc(oAjax.responseText);
        }
        else{
            if(fnFaild){
                fnFaild(oAjax.status+" "+oAjax.statusText);
            }
        }
    }
}
