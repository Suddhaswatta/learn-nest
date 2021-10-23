import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts/1'

interface User {
    userId: number,
    id: number,
    title: string,
    body: string
}


axios.get(url)
    .then(res => res.data as User)
    .then((user: User) => {
        console.log(`User Details : \n${JSON.stringify(user, null, 4)}`);
    })