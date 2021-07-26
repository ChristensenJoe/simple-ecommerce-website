import {Container, Header} from "semantic-ui-react"

function HeaderComponent() {
    return (
        <Container style={{border: "solid black", height: "100px"}}>
            <Header style={{marginTop: "15px", fontSize: "40px"}}
                size="huge" 
                content="Simple E-Commerce Website" 
                textAlign="center"
            />
        </Container>
    )
}

export default HeaderComponent