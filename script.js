// let header = document.createElement('h3');
// let headerText = document.createTextNode('Accusation 1');
// header.appendChild(headerText);
// document.body.appendChild(header);

var friends = ["David", "Melissa", "Sam", "CJ", "Vic"];
var place = ["crawlspace", "wine cellar", "walk-in humidor", "widow's walk", "foyer", "tanning room", "garage", "attic", "bedroom", "kitchen"];
var object = ["bed of nails", "rack", "human blender", "jumper cables", "terrible joke", "bad attitude", "unkind words", "glance", "pop culture references", "subpoena", "cat turd that the dog puked up", "gin and tonic", "water heater", "headphones", "box of newt gingrich books", "bicycle tube", "thermonuclear warhead", "unarmed ICBM", "zircon encrusted tweezers", "cadbury creme egg"];
var funcs = {};
document.addEventListener('DOMContentLoaded', function () {



    for (var j = 1; j < 101; j++) {
        var p = document.createElement("h3");
        p.textContent = ("Accusation " + j);
        p.setAttribute("id", j);
        p.addEventListener("click", clickhandler(j));
        document.body.appendChild(p);
    }
    
    function clickhandler(j) {
        return function () {
            alert("Accusation " + j + "I accuse " + friends[j % friends.length] + 
            "with the " + object[j % object.length] + " in the " + place[j % place.length]);
        }
    }


})

