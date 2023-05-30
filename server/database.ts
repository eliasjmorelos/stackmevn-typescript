import {connect} from 'mongoose'

export const startConnection = async () => {

    try {
        const db = await connect('mongodb+srv://eliasmorelos:9VV7JBW1pMokZp9Q@cluster0.q9visk9.mongodb.net/?retryWrites=true&w=majority')
        console.log(db.connection.name); 
    } catch (error) {
        console.log(error);
    }
};