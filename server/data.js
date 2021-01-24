import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
          name: 'kiben',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456', 8),
          isAdmin: true,
        },
        {
           //customer
          name: 'Ralph',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456', 8),
          isAdmin: false,
        },
      ],
    products:[
        {
            name:"John Allen",
            category: "Male",
            image: '/images/allen.jpg',
            price: 69,
            rating: 1.5,
            numReview: 69,
            description: "Master Minecrafter",
            countInStock: 0
        },
        {
            name:"Clea Bernadette",
            category: "Female",
            image: '/images/clea.jpg',
            price: 96,
            rating: 2.5,
            numReview: 10,
            description: "Bingot",
            countInStock: 10
        },
        {
            name:"Franz Arvae",
            category: "Male",
            image: '/images/franz.jpg',
            price: 669,
            rating: 1,
            numReview: 96,
            description: "Anthony Look a like",
            countInStock: 10
        },
        {
            name:"Jan Calvin",
            category: "Male",
            image: '/images/jc.jpg',
            price: 150,
            rating: 3.5,
            numReview: 59,
            description: "ML",
            countInStock: 10
        },
        {
            name:"Kevin Ralph Lauren",
            category: "Male",
            image: '/images/kevin.jpg',
            price: 500,
            rating: 4,
            numReview: 12,
            description: "happy birthday kiben",
            countInStock: 10
        },
        
    ]
}

export default data;