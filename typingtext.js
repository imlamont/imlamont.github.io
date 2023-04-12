const splitWord = id => {
    const elem=document.getElementById(id);
    const text=elem.innerText.split("");

    elem.innerText="";

    var c=1;
    text.forEach(ltr => {
        const spn=document.createElement("span");
        spn.className="letter";
        spn.innerText=ltr;
        spn.style.animationDuration=c++;
        elem.appendChild(spn);
    });
}

splitWord("name");