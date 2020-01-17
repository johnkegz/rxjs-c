import { BehaviorSubject } from "rxjs/BehaviorSubject";

var subject = new BehaviorSubject("First");

subject.subscribe(
    (data:any) => addItem("observer 1: "+data),
    (error:any) => addItem(error),
    () => addItem("observer one completed !"),
)
subject.next("the first thing has been sent")
subject.next("the second observer is about to start .....")

var observer2 = subject.subscribe(
    (data:any) => addItem("observer 2: "+data)
)

subject.next("the second thing has been sent")
subject.next("the third thing has been sent")

observer2.unsubscribe()
subject.next("the final thing has been sent")

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}