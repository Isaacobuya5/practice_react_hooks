import React, {useState} from "react";

const InputElement = () => {
    const [textInput, setTextInput] = useState("");
    const [ historyList, setHistoryList ] = useState([]);
    return (
        <div>
            <input type="text"
             onChange={(e) => {
                 setTextInput(e.target.value);
                 setHistoryList([...historyList,e.target.value])
             }}
             placeholder="Enter some text" 
             />
        <hr/>
        {textInput}
        <br/>
        {historyList.length === 0 ? "List is Empty" : (
        <ul>
            {historyList.map((record, index) => {
                return <div key={index}>{record}</div>
            })}
        </ul>
      
        )}
        </div>
    )
}

export default InputElement;