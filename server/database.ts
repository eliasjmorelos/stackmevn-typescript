import {connect} from 'mongoose'
const variablesEntorno =  require("./config.ts");
export const startConnection = async () => {

    try {
        const db = await connect(variablesEntorno.CONEXIONDB)
        console.log(db.connection.name); 
    } catch (error) {
        console.log(error);
    }
};