//w3 schools
var newItem = document.createElement("li");
var textnode = document.createTextNode("cream");
newItem.appendChild(textnode);
var list = document.querySelector('ul');
list.appendChild(newItem);

var lastitem = document.createElement("li");
var textnode2 = document.createTextNode("kale");
lastitem.appendChild(textnode2);
list.insertBefore(lastitem, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var cool = document.querySelectorAll('li');
var count = cool.length;
var i;
var attribute = document.createAttribute("cool");
for(i=0; i < count; i++)
{
  var temp = cool[i];
  temp.classList.add("cool");
  temp.style.backgroundColor = "light green";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var h2span = document.createElement("span");
var textinsidespan = document.createTextNode(count);
h2span.appendChild(textinsidespan);
var h2 = document.querySelector('h2');
h2.appendChild(h2span);
console.log(h2span);
