import Information from "./Information";
import SkillList from "./SkillList";


class Navbar extends React.Component{
    render(){
        return(
            <div className={"navbar fixed-top"}>
                <ul className={"nav"}>
                <li className={"home-nav"}><a href={"#"}>Home</a></li>
                <li className={"info-nav"}><a href={"#info"}>Information</a></li>
                <li className={"skil-nav"}><a href={"#skills-div"}>Skills</a></li>
                <li className={"project-nav"}><a href={"#projects"}>Projects</a></li>
                <li className={"contact-nav"}><a href={"#contact"}>Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;