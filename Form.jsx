import React, {useState} from 'react'
import './Form.css'
function Form(){

    const [name, setName] = useState("User");
    const [quantity, setQuantity] = useState(0);
    const [food, setFood] = useState("none");
    const [send, setSend] = useState("Delivery");
    const [comment, setComment] = useState("none");
    const [result, setResult] = useState("");
    
    function handleChangeName(event){
        setName(event.target.value);
    }
    function handleChangeQuantity(event){
        setQuantity(event.target.value);
    }
    function handleChangeFood(event){
        setFood(event.target.value);
    }
    function handleChangeSend(event){
        setSend(event.target.value);
    }
    function handleChangeComment(event){
        setComment(event.target.value);
    }
    function submitForm(){
        setResult(`[${name}] ordered [${quantity}] of [${food}] with sending type of [${send}] and with following instructions: [${comment}]`);
    }

    return(
        <div className='form'>
            <h2>Online Food Ordering</h2>

            <p>Name: {name}</p>
            <input type="text" onChange={handleChangeName}/>
            <hr />

            <p>Quantity: {quantity}</p>
            <input type="number" onChange={handleChangeQuantity}/>
            <hr />

            <p>Food: {food}</p>
            <select onChange={handleChangeFood}>
                <option value="">Select a Food</option>
                <option value="Pizza">Pizza</option>
                <option value="Hamburger">Hamburger</option>
                <option value="Pasta">Pasta</option>
            </select>
            <hr />

            <p>Sending Type: {send}</p>
            <p><input type="radio" className='radioBtn' value="Delivery" checked={send === "Delivery"} onChange={handleChangeSend}/> Delivery</p>
            <p><input type="radio" className='radioBtn' value="Pick Up" checked={send === "Pick Up"} onChange={handleChangeSend}/> Pick Up</p>
            <hr />

            <p>Additional Adjustments: {comment}</p>
            <textarea onChange={handleChangeComment} placeholder='Additional Adjustments:'></textarea>
            
            <br />
            <button id='submitBtn' type="submit" onClick={submitForm}>Submit</button>
            <p>{result}</p>
        </div>
    );
}

export default Form