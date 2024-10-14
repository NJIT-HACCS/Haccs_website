import Container from "react-bootstrap/Container";
import "./sponsors_style.css";
import audibleLogo from "../resources/sponsorsImages/audibleLogo.jpg"
const SponsorsPage = () =>{
    return (
        <>
        <Container className="mainContainer">
            <h1>A special thank you to our 24’-25’ Sponsors</h1>
            <Container className="sponsorsContainer">
               <img src={audibleLogo} alt=""></img>
            </Container>
        </Container>
        
        </>
    )
}

export default SponsorsPage;