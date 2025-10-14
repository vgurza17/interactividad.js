const themeToggleBtn = document.getElementById("theme-toggle-btn");
const colorPicker = document.getElementById ("color-picker");

themeToggleBtn.addEventListener ("click", function() {
document.body.classList.toggle("dark"); 
});
colorPicker.addEventListener ("change",function(){
    document.body.style.color= colorPicker.value;
})
/*
setTimeout(() =>) 
    alert("me diste click");   
    toggleThemeBtn.classList.add("ejemplo")
*/

