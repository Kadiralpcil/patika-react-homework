import axios from "axios"

export default async function userData(user_id){
    const {data:userData} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    const {data:postData} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    console.log(userData);
    console.log(postData[0]);
};