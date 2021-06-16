import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Table, Icon, Button } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/actions/cartActions"
import { toast } from 'react-toastify';

export default function ProductList() {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success('Sepete Eklendi')
    }


    return (
        <div>
            <Table celled>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map((product) => (
                        <Table.Row key={product.id}>
                            <Table.Cell><Link to={`/products/${product.id}`}>{product.attributes.email}</Link></Table.Cell>
                            <Table.Cell><Button onClick={() => handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
