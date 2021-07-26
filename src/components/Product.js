import { Grid, Card, Icon } from "semantic-ui-react"

function Product({ name, description, price, image, type }) {
    return (
        <Grid.Column style={{padding: "10px"}} 
        >
            <Card centered style={{width: "150px",  overflow: "hidden"}}>
                <img alt="product" src={image} style={{objectFit: "cover"}} height={100} width={150}/>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{`$${price}`}</span>
                    </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Card.Description>
                        {type}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}

export default Product