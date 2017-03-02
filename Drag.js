/**
 * Created by Administrator on 2016/12/15.
 */
function Drag(id) {
    var _this = this;
    this.DisX = 0;
    this.DisY = 0;
    this.oDiv = document.getElementById(id);
    this.oDiv.onmousedown = function(ev){
        _this.fnDown(ev);
        return false;
    };
}

Drag.prototype.fnDown = function(ev) {
    var _this = this;
    var ev = ev || event;
    this.DisX = ev.clientX - this.oDiv.offsetLeft;
    this.DisY = ev.clientY - this.oDiv.offsetTop;

    document.onmousemove = function (ev) {
        _this.fnMove(ev);
    };
    document.onmouseup = function () {
        _this.fnUp();
    };
};
Drag.prototype.fnMove = function(ev) {
    var ev = ev || event;
    var l = ev.clientX - this.DisX;
    var t = ev.clientY - this.DisY;
    this.oDiv.style.left = l+"px";
    this.oDiv.style.top = t+"px";
};
Drag.prototype.fnUp = function() {
    document.onmousemove = null;
    document.onmouseup = null;
};
