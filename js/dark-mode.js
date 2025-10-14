const themeToggleBtn = document.getElementById("theme-toggle-btn");
const colorPicker = document.getElementById ("color-picker");
const bgPicker = document.getElementById("bg-picker");

themeToggleBtn.addEventListener ("click", function() {
document.body.classList.toggle("dark"); 
});
colorPicker.addEventListener ("change",function(){
    document.body.style.color= colorPicker.value;
})
bgPicker.addEventListener ("change",function(){
    document.body.style.backgroundColor= bgPicker.value;
})
/*
setTimeout(() =>) 
    alert("me diste click");   
    toggleThemeBtn.classList.add("ejemplo")
*/

