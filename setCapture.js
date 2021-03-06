/**
 * Created by Administrator on 2016/12/13.
 */
window.onload = function () {
    var oDiv = document.getElementById("div1");

    oDiv.onmousedown = function (ev) {
        var oEvent = ev||event;
        var disX = oEvent.clientX - oDiv.offsetLeft;
        var disY = oEvent.clientY - oDiv.offsetTop;
        //事件捕获 setCapture  取消事件捕获 releaseCapture
        if(oDiv.setCapture){
            oDiv.onmousemove = mouseMove;
            oDiv.onmouseup = mouseUp;
            oDiv.setCapture();
        }
        else {
            document.onmousemove = mouseMove;
            document.onmouseup = mouseUp;
        }
        function mouseMove(ev) {
            var oEvent = ev||event;
            var l = oEvent.clientX - disX;
            var t = oEvent.clientY - disY;
            if(l<10){
                l=0;
            }
            else if(l>document.documentElement.clientWidth-oDiv.offsetWidth-10){
                l=document.documentElement.clientWidth-oDiv.offsetWidth;
            }
            if(t<10){
                t=0;
            }
            else if(t>document.documentElement.clientHeight-oDiv.offsetHeight-10){
                t=document.documentElement.clientHeight-oDiv.offsetHeight;
            }
            oDiv.style.left = l+"px";
            oDiv.style.top = t+"px";
        }
        function mouseUp() {
            this.onmousemove = null;
            this.onmouseup = null;
            if(oDiv.releaseCapture){
                oDiv.releaseCapture();
            }
        }
        return false;
    }
};
