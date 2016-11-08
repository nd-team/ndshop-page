/**
 * Created by ike on 2016/11/5.
 */
window.onload = function (){
 var oStar = document.getElementById("shop-start");
    var aLi = oStar.getElementsByTagName("li");
    var oUl = oStar.getElementsByTagName("ul")[0];
    var oSpan = oStar.getElementsByTagName("span")[0];
    var oP = oStar.getElementsByTagName("p")[0];
    var i = iScore = iStar = 0;
    var aMsg = [
        "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
        "不满意|部分有破损，与卖家描述的不符，不满意",
        "一般|质量一般，没有卖家描述的那么好",
        "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
        "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
    ]

    for (i = 1; i <= aLi.length; i++){
        aLi[i - 1].index = i;

        aLi[i - 1].onmouseover = function (){
            fnPoint(this.index);
        };


        aLi[i - 1].onmouseout = function (){
            fnPoint();

        };

        aLi[i - 1].onclick = function (){
            iStar = this.index;
            oSpan.innerHTML = "<strong>" + (this.index) + " 分</strong> (" + aMsg[this.index - 1].match(/\|(.+)/)[1] + ")"
        }
    }

    //评分处理
    function fnPoint(iArg){
        iScore = iArg || iStar;
        for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : "";
    }

};

