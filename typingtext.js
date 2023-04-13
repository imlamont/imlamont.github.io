const typingSpeed=0.1;

const makeTyped = id => {
    const elem=document.getElementById(id);
    const text=elem.innerText.split("");

    elem.innerText="";
    elem.setAttribute("data-length",text.length);

    var c=0;
    text.forEach(ltr => {
        c+=typingSpeed;
        const spn=document.createElement("span");
        spn.className="letter monoFont";
        spn.style.setProperty("--ltr",ltr)
        spn.innerText=ltr;
        spn.style.animationDuration=`${c}s`;
        elem.appendChild(spn);
    });

    const cursor=document.createElement("span");
    cursor.className="cursor";
    cursor.innerText="_";
    cursor.style.display="inline-block";
    cursor.style.animationDuration=`${c+typingSpeed}s`;
    cursor.style.animationTimingFunction=`steps(${text.length},end)`;
    
    elem.appendChild(cursor);
}

var typedElems=document.getElementsByClassName("typed");
Array.from(typedElems).forEach((elem)=>makeTyped(elem.id));
