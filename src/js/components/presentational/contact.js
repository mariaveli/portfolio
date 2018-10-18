import * as React from "react";

class Contact extends React.Component{
    render(){
        return(
            <div className={'obj-al-row'} id={'contact-div'}>

                <a className={'fa fa-linkedin'} id={'social'} target="_blank" href="https://www.linkedin.com/in/maria-veli-417470ba/" />
                <a className={'fa fa-github'} id={'social'} target="_blank" href="https://github.com/mariaveli" />
                <a className={'fa fa-codepen'} id={'social'} target="_blank" href="https://codepen.io/MaraAC/#" />
                <a className={'fab fa-free-code-camp'} target="_blank" id={'social'} href="https://www.freecodecamp.org/mariaveli" />


            </div>
        )
    }
}

export default Contact;