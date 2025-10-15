const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const colorPicker = document.getElementById ("color-picker");
const bgPicker = document.getElementById("bg-picker");

toggleThemeBtn.addEventListener("click", function () {
document.body.classList.toggle("dark"); 
if (document.body.classList.contains("dark")){
    toggleThemeBtn.innerHTML = "<i class='fa-solid fa-face-smile'></i>" ;
} else {
toggleThemeBtn.innerHTML = "<i class='fa-regular fa-face-smile'></i>" ;
}
});

colorPicker.addEventListener ("change",function(){
    document.body.style.color= colorPicker.value;
});
bgPicker.addEventListener ("change",function(){
    document.body.style.backgroundColor= bgPicker.value;
});
/*
setTimeout(() =>) 
    alert("me diste click");   
    toggleThemeBtn.classList.add("ejemplo")
*/

