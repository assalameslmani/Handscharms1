import bcrypt from 'bcrypt';


const user = [
    {
        name:"Admin",
        email:"admin@example.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:true,
    },
    {
        name:"Seller",
        email:"seller@example.com",
        password:bcrypt.hashSync("123456", 10),
        isSeller:true,
    },
    {
        name:"User",
        email:"user@example.com",
        password:bcrypt.hashSync("123456", 10),
        address: "123 Main Street", 
    },
];

export default user;