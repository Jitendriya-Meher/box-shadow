
const elem = document.querySelector(".element");
const code = document.querySelector(".code-wrapper textarea");
const inputs = document.querySelectorAll(".sliders input");


function generateShadow(){
    console.log("changed");

    const hShadow = document.querySelector("#h-shadow").value;
    const vShadow = document.querySelector("#v-shadow").value;
    const blurRadius = document.querySelector("#blur-radius").value;
    const spreadRadius = document.querySelector("#spread-radius").value;
    const shadowColor = document.querySelector("#shadow-color").value;
    const shadowColorOpacity = document.querySelector("#shadow-color-opacity").value;
    const shadowInset = document.querySelector("#shadow-inset").checked;

    const rgba = hexToRgba(shadowColor,shadowColorOpacity);
    console.log(rgba);

    const boxShadow = shadowInset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${rgba}` : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${rgba}`;

    console.log(boxShadow);

    elem.style.boxShadow = boxShadow;
    code.innerHTML = boxShadow;
}

generateShadow();

function hexToRgba( shadowColor, shadowColorOpacity){

    const r = parseInt( shadowColor.substr(1,2),16);
    const g = parseInt( shadowColor.substr(3,2),16);
    const b = parseInt( shadowColor.substr(5,2),16);

    return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}


inputs.forEach( (inp) => {
    inp.addEventListener("input",generateShadow);
});

const copyBtn = document.querySelector(".code-wrapper button");

copyBtn.addEventListener("click",() => {
    navigator.clipboard.writeText(code.value);
});