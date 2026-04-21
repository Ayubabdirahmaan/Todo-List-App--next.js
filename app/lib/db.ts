import { MongoClient, Db, Collection } from "mongodb";

const uri = process.env.MONGODB_URI

if (!uri) {
    throw new Error('MONGODB_URI enviroment variable is not defined')
}

let client: MongoClient
let db: Db;
// connect with database
export async function connectToDatabase() {
    if(!client) {
            client = new MongoClient(uri as string)
            await client.connect();
            db = client.db('todoApplication')
               console.log("Connected to DB:", db);
    }
    return {client, db}
}
// geting to collection
export async function getTodoCollection(): Promise<Collection> {
    if(!db) {
        const {db: database} = await connectToDatabase()
     
        return database.collection('todos')
        
    }
    return db.collection('todos')
}