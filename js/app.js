
var header = document.createElement("HEADER");
var para = document.createElement("P");
var label = document.createElement("LABEL");
var t = document.createTextNode("Name-");
var text = document.createElement("INPUT");
var radioContainer=document.createElement("SPAN");
var radioText=document.createElement("SPAN");
var radio=document.createElement("INPUT");
var radioContainer1=document.createElement("SPAN");
var radioText1=document.createElement("SPAN");
var radio1=document.createElement("INPUT");
var checkContainer=document.createElement("SPAN");
var checkText=document.createElement("SPAN");
var check=document.createElement("INPUT");
var checkContainer1=document.createElement("SPAN");
var checkText1=document.createElement("SPAN");
var check1=document.createElement("INPUT");
var button = document.createElement("INPUT");
var inputArea = document.querySelector("#form");

inputArea.setAttribute("style","clear: both;")
header.textContent="JavaScript Form";
header.setAttribute("style","background-color:grey;color: white;padding: 15px;");
para.textContent="Hie!! Welcome to this page.You may fill the form.";
para.setAttribute("style","padding:45px;width:75%;");
  
label.setAttribute("for", "name");
label.appendChild(t);
//radioButton
radioContainer.classList.add("radioContainer");
radio.setAttribute("type","radio");
radio.setAttribute("style","padding:45px;");
radioText.textContent="Beginner";
radioContainer.appendChild(radio);
radioContainer.appendChild(radioText);
//radioButton2
radioContainer1.classList.add("radioContainer1");
radio1.setAttribute("type","radio");
radio1.setAttribute("style","padding:45px;");
radioText1.textContent="Advanced";
radioContainer1.appendChild(radio1);
radioContainer1.appendChild(radioText1);
//checkbox
checkContainer.classList.add("checkContainer");
check.setAttribute("type","checkbox");
checkText.textContent="Level1";
checkContainer.appendChild(check);
checkContainer.appendChild(checkText);
//checkbox2
checkContainer1.classList.add("checkContainer1");
check1.setAttribute("type","checkbox");
checkText1.textContent="Level2";
checkContainer1.appendChild(check1);
checkContainer1.appendChild(checkText1);

text.setAttribute("type","text");
text.setAttribute("value", "Hello Coder!");
text.setAttribute("style","margin-right: 10px;");

button.setAttribute("type","button");
button.setAttribute("value", "Hello Coder!");
button.setAttribute("style"," background-color:blue;color:white;padding: 15px 32px;text-align: center;display: inline-block;font-size: 16px;margin: 4px 2px;");


button.onclick=function(){
  inputArea.style.backgroundColor = "#FFFFE0";
   var x = document.getElementsByTagName("BODY")[0];
   x.style.backgroundColor="blue";
}

inputArea.appendChild(header);
inputArea.appendChild(para);
inputArea.appendChild(label);
inputArea.appendChild(text);
inputArea.appendChild(radioContainer);
inputArea.appendChild(radioContainer1);
inputArea.appendChild(checkContainer);
inputArea.appendChild(checkContainer1);
inputArea.appendChild(button);


