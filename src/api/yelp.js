import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer bgmp4g5ddSQBPjTy1uGIs-V36IRnQl0nDc2tactgDcdDRPIW5BcbFU9AVCqc5wTqS5tS4i8TnFt2hYE9FbwZtoEk529M5OQEUZNbwFObrFZrNX0Z9rqfo80r1kj5XXYx'
    }
})