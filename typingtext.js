const splitWord = id => {
    const elem=document.getElementById(id);
    const text=elem.innerText.split("");

    elem.innerText="";

    text.forEach(ltr => {
        const spn=document.createElement("span");
        spn.className="letter";
        spn.innerText=ltr;
        elem.appendChild(spn);
    });
}

splitWord("name");