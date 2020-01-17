import { ReplaySubject } from "rxjs/ReplaySubject";

var subject = new ReplaySubject(30, 500);

subject.subscribe(
    (data:any) => addItem("observer 1: "+data),
    (error:any) => addItem(error),
    () => addItem("observer one completed !"),
)

var i = 1;
var int = setInterval(()=> subject.next(i++), 100)

setTimeout(()=>{
    var observer2 = subject.subscribe(
        (data:any) => addItem("observer 2: "+data)
    )
}, 500)

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}