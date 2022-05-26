import axios from "axios"
// const userData =async (user_id) =>{

//     const {data:userData} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
//     console.log(`${user_id}.data:`, userData);
// }
export default async function userData(user_id){
    const {data:userData} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    const {data:postData} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    console.log(`${user_id}.data:`, userData);
    console.log(`${user_id}.data:`, postData);
};