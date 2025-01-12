import clientPromise from "../../lib/mongodb"
import getValidatedCollection from "../../lib/dbColections"

const dbName = process.env.db

export default async function handler (req, res) {
    const client = await clientPromise
    const db = client.db(dbName)

    const authCollection = await getValidatedCollection ( db, "user_auth")
    const profileCollection = await getValidatedCollection ( db, "user_profiles")
    const timeslotsCollection = await getValidatedCollection ( db, "timeslots")

    switch (req.method) {
        case "GET": 
            const users = await profileCollection.find({}).toArray()
            res.status(200).json(users)
            break
        default:
            res.setHeader("Allow", ["GET"])
            res.status(405).end('Method is not allowed')
    }
}
