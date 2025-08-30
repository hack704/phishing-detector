let btn = document.querySelector("button");
let url = document.querySelector("#urlinput");


btn.addEventListener("click", function () {
    let isDangerous = false;
    let counta = 0;
    let countb = 0;
    let input = document.querySelector("#urlinput").value;
    for (let i = 0; i < url.value.length; i++) {
        if (url.value[i] == "<" || url.value[i] == ">" || url.value[i] == "{" || url.value[i] == "}" || url.value[i] == "|" || url.value[i] == "\\\\" || url.value[i] == " ") {
            isDangerous = true;
            break;
        }
    }
    for (let i = 0; i < url.value.length; i++) {
        if (url.value[i] == "@") {
            counta++;
        }
        else if (url.value[i] == "%") {
            countb++
        }
    }

    if (url.value.length > 75) {
        alert("dangerous");
    }
    else if (isDangerous) {
         alert("dangerous");
    }
    else if (counta > 1) {
        alert("dangerous");
    }
    else if (countb > 1) {
         alert("dangerous");
    }
    else if (input) {
        try {
            let parsed = new URL(input);
            let hostname = parsed.hostname;
            let parts =hostname.split(".");
            let tld =parts[parts.length-1];
            if(parsed.protocol!="https:"){
                alert("dangerous");

            }
            else if(tld=="com"|| tld=="in" || tld=="org"){
                alert("safe");
            }
            else{
                 alert("dangerous");
            }
        }
        catch(e){
             alert("dangerous");
        }
    }
    else {
         alert("safe");
    }
});
