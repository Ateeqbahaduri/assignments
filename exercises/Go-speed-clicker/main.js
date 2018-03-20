var cnt = 0;

function CountFun() {
    count = parseInt(cnt) + parseInt(1);
    var divData = document.getElementById("showCount");
    divData.innerHTML = "Number of clicks: (" + count + ")";
    localStorage.setItem("countFun", CountFun);
}
