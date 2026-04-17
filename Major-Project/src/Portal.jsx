
import ReactDom from "react-dom";
import "./NavBar.css";

function Portal(){
    return ReactDom.createPortal(
        <div className="portal">
            <div>
            <p>Sushi</p>
            <h2>Total Amount</h2>
            </div>
            <div className="doub-btn">
            <button>Close</button>
            <button>Order</button>
            </div>
        </div>,
        document.getElementById("root")
    );
}
export default Portal;