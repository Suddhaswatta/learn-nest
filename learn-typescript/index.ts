import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts/1'

interface IUser {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IPayload {
    createdDate: Date,
    user: IUser
}

class Payload implements IPayload {

    createdDate: Date;
    user: IUser;

    constructor(createdDate: Date, user: IUser) {
        this.createdDate = createdDate
        this.user = user
    }

}

const today = new Date()

today.getDay()


axios.get(url)
    .then(res => res.data as IUser)
    .then((user: IUser) => new Payload(new Date, user))
    .then((payload: IPayload) => {
        console.log(`${JSON.stringify(payload,null,4)}`);
    })