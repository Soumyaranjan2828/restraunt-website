import "./NavBar.css";

function NavBar(props){
    return(
        <>
        <div className="Nav">
        <div><span>React Meals</span>
        {props.children}
        </div>
        <div></div>
        </div>
        </>
    )
}
export default NavBar;