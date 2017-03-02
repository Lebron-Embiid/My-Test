/**
 * Created by Administrator on 2016/12/15.
 */
function LimitDrag(id){
    Drag.call(this,id);    //继承属性
}

for(var i in Drag.prototype){
    LimitDrag.prototype[i] = Drag.prototype[i];
}

LimitDrag.prototype.fnMove = function(ev) {
    var ev = ev || event;
    var l = ev.clientX - this.DisX;
    var t = ev.clientY - this.DisY;
    if(l<0){
        l = 0;
    }
    if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth){
        l = document.documentElement.clientWidth-this.oDiv.offsetWidth;
    }
    if(t<0){
        t = 0;
    }
    if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight){
        t = document.documentElement.clientHeight-this.oDiv.offsetHeight;
    }
    this.oDiv.style.left = l+"px";
    this.oDiv.style.top = t+"px";
};
