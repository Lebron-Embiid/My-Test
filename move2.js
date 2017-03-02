//获取元素的属性
function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}

function move(obj,json,fnEnd){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var oStop = true;  //假设所有的属性值都已经是目标值
        for(var attr in json){
            var cur = 0;
            if(attr == "opacity"){
                cur = Math.round(parseFloat(getStyle(obj,attr))*100);
            }
            else{
                cur = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr]-cur)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur != json[attr]){
                oStop = false;
            }

            if(attr == 'opacity'){
                obj.style.filter = "alpha(opacity:'+(cur+speed)+')";
                obj.style.opacity = (cur+speed)/100;
            }
            else{
                obj.style[attr] = cur+speed+"px";
            }
        }
        if(oStop){
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();
        }
    },30)
}
