import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        //setToDos((currentArray) => [...currentArray, toDo]); // 이렇게도 가능
        setToDo("");
    };
    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} text="text" placeholder="Write your to do..."></input>
                <button>Add To Do</button>
            </form>
            <hr />
            {toDos.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    );
}

export default App;
