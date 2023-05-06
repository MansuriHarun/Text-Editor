        console.log("Welcome to M.H TextEditor");
        let button = document.getElementById("save-button");
        button.addEventListener("click", function() {
        button.classList.toggle("clicked");
        });
        function run(){
            let htmlCode = document.getElementById('html-code');
            let cssCode = document.getElementById('css-code');
            let jsCode = document.getElementById('js-code');
            let output = document.getElementById('output');
 
            output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";
            output.contentWindow.eval(jsCode.value);
        }
    var htmlCode = document.getElementById("html-code");
    var cssCode = document.getElementById("css-code");
    var jsCode = document.getElementById("js-code");
    var saveButton = document.getElementById("save-button");
    var outputFrame = document.getElementById("output");
    saveButton.addEventListener("click", function(){
        localStorage.setItem("htmlCode", htmlCode.value);
        localStorage.setItem("cssCode", cssCode.value);
        localStorage.setItem("jsCode", jsCode.value);
    });
    if(localStorage.getItem("htmlCode")) {
        htmlCode.value = localStorage.getItem("htmlCode");
        run();
    }
    if(localStorage.getItem("cssCode")) {
        cssCode.value = localStorage.getItem("cssCode");
        run();
    }
    if(localStorage.getItem("jsCode")) {
        jsCode.value = localStorage.getItem("jsCode");
        run();
    }
