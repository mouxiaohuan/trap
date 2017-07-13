var travel={
    //index
    idList:["travel-clearance","travel-hot","travel-star"],
    switchItem:function (event) {
        this.idList.map(function(val,index,arr){
            document.getElementById(arr[index]).setAttribute("style","display:none");
            document.getElementById(arr[index]+'-tag').setAttribute("class","");
        });
        document.getElementById(event.target.id.slice(0,-4)).setAttribute("style","display:block");
        event.target.className="active"
    },
    openNewPage:function (url) {
        window.location.href=url;
    },
    switchFromMap:function (flag) {
        if(flag)
            document.getElementById('setfromId').setAttribute("style","display:block");
        else
            document.getElementById('setfromId').setAttribute("style","display:none");
    },
    // classify
    classifyDistrictList:["china-line","around-line","internation-line","internation-line","self-line"],
    classifyDistrictFn:function (e) {
        this.classifyDistrictList.map(function(val,index,arr){
            document.getElementById(arr[index]).setAttribute("style","display:none");
            document.getElementById(arr[index]+'-tag').setAttribute("class","");
        });
        document.getElementById(event.target.id.slice(0,-4)).setAttribute("style","display:block");
        event.target.className="active"
        
    }

};