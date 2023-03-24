function sayHello() {
    let inp = document.getElementById("inpName");

    if(inp.value.trim() == "") {
        return;
    }

    let hello = document.getElementById("helloText");
    hello.innerHTML = `Hello ${inp.value}. This is my first CF app.`;
    hello.style.display = "block";
}