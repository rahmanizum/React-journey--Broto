function Footer(props){
    return(
        <div>
            <p>The author of this blog is {props.author}</p>
        </div>
    )
}
Footer.defaultProps ={
    author:"Anonymous"
}
export default Footer;