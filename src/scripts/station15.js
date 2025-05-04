function displayList() {
    let fruits = document.getElementById("fruits");
    let items = fruits.getElementsByTagName("p");
    var replace = "<ul>";
    for (var i = 0; i < items.length; i++) {
        replace += "<li>" + items[i].innerText + "</li>";
    }
    replace += "</ul>";
    fruits.innerHTML = replace;
}