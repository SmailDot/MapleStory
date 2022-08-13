document.write("<h1>這裡是楓之谷遊玩的遊戲紀錄</h1>");
//創建一個變數 名稱為"Game_name" 後面是讓這個變數代表什麼
var Game_name = "Smail離夜";

inputItem.forEach(function(item){
    item.addEventListener('input', changeCondition);
});

function changeCondition (event) {
    //取得觸發事件的input元素
    let changeInput = event.target;
    //取得input元素的name屬性
    let conditionName = changeInput.name;
    //取得input元素的值   
    let conditionValue = changeInput.value;
    //將影片屬性值改為input元素的值
    selectVideo[conditionName] = conditionValue;   
};