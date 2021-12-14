var names=['superman','bat man','spiderman','hal jordan','thor','thing','mr fantastic','invisible woman','human torch',
'captain america','dick greyson','wally west','kyle rayner','barry allen','silver surfer','martian manhunter','super girl'
,'daredevil','ironman'];
// var ran1=Math.floor(Math.random() * 20)+1;
// var ran2=Math.floor(Math.random() * 20)+1;
var t1=0;
var t2=0;
var gleft=0;
var gright=0;
for(let j=0;j<5;j++)
{
document.getElementById('sub').innerHTML='';
for(let i=1;i<10;i++){
    //console.log(names[i]);
    
    var division=document.createElement("div");
    division.setAttribute("id", "Div1");
    var DOM_head = document.createElement("h1");
    var img=document.createElement('img');
    var DOM_txt = document.createElement("p");
    DOM_head.innerHTML=names[i-1];
    img.src="./images/img-"+i+".jpg";
    img.width=150;
    img.height=150;
    var temp=Math.floor(Math.random() * 100)+1;
    DOM_txt.innerHTML=temp ;
    t1=t1+temp;
    division.appendChild(DOM_head);
    division.appendChild(img);
    division.appendChild(DOM_txt);
    document.getElementById("sub").appendChild(division);
}


document.getElementById('sub1').innerHTML='';
for(let i=1;i<10;i++){
    
    //console.log(names[i]);
    var division=document.createElement("div");
    division.setAttribute("id", "Div1");
    var DOM_head = document.createElement("h1");
    var img=document.createElement('img');
    var DOM_txt = document.createElement("p");
    DOM_head.innerHTML=names[i+10-1];
    var s=i+10;
    img.src="./images/img-"+s+".jpg";
    img.width=150;
    img.height=150;
    var temp=Math.floor(Math.random() * 100)+1;
    DOM_txt.innerHTML=temp ;
    t2=t2+temp;
    division.appendChild(DOM_head);
    division.appendChild(img);
    division.appendChild(DOM_txt);
    document.getElementById("sub1").appendChild(division);
}



console.log(t1);
console.log(t2);

if(t1>t2)
{
    gleft++;
}
else
{
    gright++;
}
console.log(gleft);
console.log(gright);

document.getElementById('gl').innerHTML=gleft;
document.getElementById('gr').innerHTML=gright;
}
