import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Card } from 'semantic-ui-react'
import ProductService from '../services/productService';

export default function ProductDetail() {

    let { id } = useParams()

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService()
        productService.getProductsById(id).then(result => setProduct(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid="strong">
                    <Card.Content>
                        <Card.Header>{product.attributes}</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                        </Button>
                            <Button basic color='red'>
                                Decline
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
