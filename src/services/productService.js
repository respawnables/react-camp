import axios from 'axios'

export default class ProductService {

    getProducts() {
        return axios.get("http://localhost:3000/api/v1/users")
    }

    getProductsById(id){
        return axios.get("http://localhost:3000/api/v1/users/" + id)
    }
}