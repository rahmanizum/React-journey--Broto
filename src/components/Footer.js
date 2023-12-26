import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <p>Created by: {this.props.author}</p>

            </div>)
    }
}

export default Footer;