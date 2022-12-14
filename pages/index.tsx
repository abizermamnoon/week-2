import { stringify } from 'querystring';
import {useState} from 'react';

export default function Index() {
    
    const [items, setItems] = useState<{name: string, completed: boolean}[]>([]);
    const [newItemName, setNewItemName] = useState("");

    function onAdd() {
        const newItem = {
            name: newItemName,
            completed: false,
        };

        setItems([newItem, ...items]);

        setNewItemName("");
    }

    function onDone(i: number){
        let newItems = [...items];
        newItems[i].completed = !newItems[i].completed;
        setItems(newItems);
    }

    function onDelete(i : number){
        let newItems = [...items];
        newItems.splice(i,1);
        setItems(newItems);
    }

    function onDeleteAll(){
        setItems([]);
    }

    return (
        <>
            <div className ="max-w-sm mx-auto my-16">
                <input className = "p-2 border" value = {newItemName} onChange={e => setNewItemName(e.target.value)}/>
                <button className = "p-2 bg-gray-700 text-white" onClick = {onAdd}>Add</button>
                <button className = "p-2 bg-red-500 text-white"onClick = {onDeleteAll}>Delete All</button>
                {items.map((d,i) => (
                <>
                    <div className = "p-4 shadow-md my-8">
                        <p className = {d.completed ? "line-through" : ""}>{i} {d.name} </p>
                        <button className = "p-2 mr-2 bg-green-700 text-white" onClick = {() => onDone(i)}>Mark done</button>
                        <button className = "p-2 bg-red-500 text-white" onClick={() => onDelete(i)}>Delete</button>
                    </div>
                </>
                ))}
            </div>
        </>
    );
}
