import { Grid, Container } from "semantic-ui-react"
import Product from "./Product"

function Products({ products }) {
    return (
        <Container style={{marginLeft: "auto", marginRight: "auto", border: "solid black", padding: "20px"}}>
            <Grid doubling columns={6} centered verticalAlign="middle">
                {products.map((product) => {
                    return (
                        <Product
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            type={product.type}
                            key={product.id}
                        />
                    );
                })}
            </Grid>
        </Container>
    )
}

export default Products