let counter = 1;
let letter = 65;
let cssProps = Object.getOwnPropertyNames(document.body.style);


// fontColor =========>> font-color
String.prototype.ObjectToCss = function(){
    let property = "";
    this.split("").forEach(function(item){
        if (item.match(/[A-Z]/g)) {
            property += "-" + item.toLowerCase();
        }else{
            property += item
        }
    })
    return property;
}

cssProps = cssProps.map((item) => item.ObjectToCss());

function count(type){
    if(type == "increase" && counter < 26){
        counter++;
        letter++;
    }else if(type == "decrease" && counter > 1){
        counter--;
        letter--;
    }
    displayCounter();
    displayAlphabet();
    displayProperties();
}

function displayCounter(){
    document.querySelector(".counter-text").innerHTML = formatNumber(counter);
}

function displayAlphabet() {
    document.querySelector(".alphabet").innerHTML = String.fromCharCode(letter);
}

function displayProperties(){
    let filterProps = cssProps.filter( function(item){
        return item.startsWith(String.fromCharCode(letter).toLowerCase());
    } )
    let txt = "";
    filterProps.forEach(function(item){
        txt += `<p>${item}</p>`;
    });

    document.querySelector(".bottom-level").innerHTML = txt;
}

function formatNumber(num) {
    if(num < 10){
        return "0" + num;
    }
    return num;
}


window.onload = function(){
    displayCounter();
    displayAlphabet();
    displayProperties();
}