function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("applications/json")
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if (xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
}
}
xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
   career(data.career);
   education(data.education);
   skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=p.designation;
  left.append(h3);
  var h4=document.createElement("h4");
    h4.textContent=p.rollno;
    left.append(h4);
    var h5=document.createElement("h5");
    h2.textContent=p.mail;
    left.append(h5);


}
var right=document.querySelector(".right");

function career(ca){
    var hell=document.createElement("h1");
    // console.log("asdjhasj");
    hell.innerHTML="career objective";
    right.appendChild(hell);
    var hr=document.createElement("hr");
    right.append(hr);
    var p=document.createElement("p");
    p.textContent=ca.info;
    right.append(p);
}
function education(edu){
  var hell=document.createElement("h1");
  hell.innerHTML="education detail";
  right.appendChild(hell);
  var hr=document.createElement("hr");
  right.append(hr);
var table=document.createElement("table");
//table.border="2"
right.append(table);
var tr1="<tr><th>sno</th><th>college</th><th>affiliated</th><th>precentage</th><th>passing</th></tr>"
var tr2=" ";
for(i=0;i<edu.length;i++)
{
  tr2=tr2+"<tr><td>"+edu[i].sno+"</td><td>"+edu[i].college+"</td><td>"+edu[i].affiliated+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].passing+"</td></tr>";

}
table.innerHTML=tr1+tr2;
right.append(table);
}
function skills(s) {
  var hell=document.createElement("h1");
  hell.innerHTML="skills";
  right.appendChild(hell);
  var hr=document.createElement("hr");
  right.append(hr);
var ul =document.createElement("ul");
for(var i in s){
  var li=document.createElement("li");
  li.innerHTML=s[i].name+":"+s[i].info;
  ul.append(li);
}
  right.append(ul);
}
