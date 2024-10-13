import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./sponsors_style.css";
import audibleLogo from "../resources/sponsorsImages/audibleLogo.jpg"
const SponsorsPage = () =>{
    const sponsorsList = ["amazon","audible","google"]
    return (
        <>
        <Container className="mainContainer">
            <h1>A special thank you to our 24’-25’ Sponsors</h1>
            <Container className="sponsorsContainer">
               <img src={audibleLogo}></img>
            </Container>
        </Container>
        
        </>
    )
}

export default SponsorsPage;