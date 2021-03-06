//faker data
import faker from 'faker';
// uuid
import { v4 as uuidv4 } from 'uuid';
//images
import imgp1 from '../assets/images/imgp1.jpeg';
import imgp2 from '../assets/images/imgp2.jpeg';
import imgp3 from '../assets/images/imgp3.jpeg';
import imgp4 from '../assets/images/imgp4.jpeg';

const products = [
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp1,
        inStock:faker.random.arrayElement([2,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp2,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp3,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp4,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp1,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp2,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp3,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp4,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp1,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp2,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp3,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp4,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp1,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp2,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp3,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp4,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp1,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp2,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp3,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    {
        id:uuidv4(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        img:imgp4,
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        raitings:faker.random.arrayElement([1,2,3,4,5])
    },
    
]

export default products