import "./NavBar.css";
import img1 from "./assets/img1.jpg";

function Card(){

    return(
        <>
        <div className="hero">
            <img className="img1" src={img1} alt="food-img"/>
        <div className="overlay">
            <h1>Delicious Food,Deliverd To You</h1>
            <p>Choose your favorite meal from our broad selection of available Meals and enjoy a delicious</p>
            <p>lunch or dinner at home</p>
            <p>All our meals are cooked with high-quality ingredients,just-in-timeand of course by</p>
            <p>experience chef</p>
        </div>
        </div>
        </>
    )
}
export default Card;