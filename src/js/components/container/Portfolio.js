import * as React from "react";
import * as ReactDOM from "react-dom";
import SkillList from "../presentational/SkillList";
import Information from "../presentational/Information";
import skills from "../presentational/Skills";
import Certifications from "../presentational/Certifications";
import Navbar from "../presentational/navbar";
import Projects from "../presentational/Projects"
import Contact from "../presentational/contact";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
            <div className={"portfolio"}>

                <div className={"info"} id={"info"}>
                    <Information/>
                </div>
                <div className={'obj-al-row'} id={'skills-div'}>
                    <div className={"skills"} id={"skills"}>
                        <img src="http://wallpapercrafter.com/uploads/posts/56428-open-laptop-on-coffee-table-displaying-coding-beside-chocolate-cake-in-living-room-with-couch___laptop-coding-cake-interior.jpg" alt="skills"
                             height="400" width="500"/>
                        <div className={'obj-al-row'} id={'skill-div'}>
                            <h4>Skills</h4>
                            <ul>
                                {skills.map(obj => <SkillList id={obj.id} name={obj.name}/>)}
                            </ul>
                        </div>

                    </div>

                    <div className={"certificate"} id={"certificate"}>
                        <div className={'obj-al-row'} id={'cert-div'}>
                            <h4>Certificates</h4>
                            <ul>
                                {Certifications.map(obj => <SkillList id={obj.id} name={obj.name}/>)}
                            </ul>
                        </div>
                        <img src="https://c.pxhere.com/photos/c4/b5/computer_laptop_in_the_workplace_coffee_coffee_mug_pen_notebook_office-1087858.jpg!d" alt="certificates" height="400" width="500"/>
                    </div>
                </div>
                <div className={'projects'} id={"projects"}>
                    <h4>Projects</h4>
                    <Projects/>
                </div>
                <div className={'obj-al-col'} id={'contact'}>
                    <h3>Contact</h3>
                    <Contact/>
                </div>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<Portfolio/>, document.getElementById("proj"));
export default Portfolio;