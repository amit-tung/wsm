import {MongoClient} from "mongodb"
// import clientPromise from "../../lib/mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

export default async (req:any, res:any) => {
    try {
        const client = await( new MongoClient(uri,options));
        const db = client.db("sample_mflix");
 
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
 
        res.json(movies);
    } catch (e) {
        console.error(e);
    }
 };