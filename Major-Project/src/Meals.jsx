
import "./NavBar.css";

function Meals(props){
    const arr=[
        {item:"Sushi",About:"Finest fish and veggies",price:"$22.99"},
        {item:"Schnitzel",About:"A german speciality",price:"$16.50"},
        {item:"Barbecue Burger",About:"American,raw,meaty",price:"$20.22"}
    ]
    return(
        <>
        <div className="list">
           <ul>
            {arr.map((value,index)=>(
                <li key={index}>
                <h1>{value.item}</h1>
                <p>{value.About}</p>
                <h2>{value.price}</h2>
                {props.children}
                <hr></hr>
                </li>
            ))} 
           </ul>
        </div>
        </>
    )
}
export default Meals;