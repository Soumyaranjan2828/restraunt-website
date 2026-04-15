import "./NavBar.css";
function Form(){
    return(
        <>
        <form className="form-box">
            <label htmlFor="quant">Amount:</label>
             <input type="number" id="quant" className="amount-input"></input>
             <br></br>
            <button type="submit" className="sub-btn">+Add</button>
        </form>
        </>
    )
}
export default Form;