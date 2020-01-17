import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/share"

var observable = Observable.create((observer:any) => {
    try{
    observer.next('Hey guys~')
    observer.next('How are you')
    setInterval(()=>{
        observer.next('i am good')
    }, 2000)

    }catch(err){
        observer.error(err)
    }
}).share();

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem("completed"),
    )



// observer.add(observer2)

setTimeout(() => {
    var observer2 = observable.subscribe(
        (x:any) => addItem("SUbscriber 2: " +x),
        )
}, 1000)

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}