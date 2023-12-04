const navDiv = document.getElementById("nav");
const subDiv = document.getElementById("sub");

const generateClick=(curr)=>{
    navDiv.innerText=" ";
    subDiv.innerText = " ";
    const h1 = document.createElement("h1");
    h1.innerText = curr ;
    subDiv.appendChild(h1);
}
generateNav=()=>{
    arrNav.forEach((item)=>{
       const btn = document.createElement("buttton");
       const func = `generateClick('${item}')`;
       btn.setAttribute("onclick",func);
       btn.innerText = item ;
       navDiv.appendChild(btn)
    })
}

generateNav(["Pune","Nanded","Mumbai","Lonavala","Nagpur","Hyderabad","Warangal","Karimnagar","Wanaparthy"]);
