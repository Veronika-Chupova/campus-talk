import clientPromise from "../../lib/mongodb"
import wraper from '../../utils/objectIdWrapper'

const dbName = process.env.db
const collectionName = process.env.PROFILES

export default async function handler (req, res) {
    console.log("getUserData endpoint handler triggered")
    const { method, query } = req || {}
    const { id } = query || null

      if (method === 'GET') {
        const client = await clientPromise
        const db = client.db(dbName).collection(collectionName)

          try {
            const user = await db.findOne (
                { userId: wraper(id) },
                { projection: { userId: 0, _id: 0 } }
            )
            res.status(200).json(user)
          } catch (error) {
            console.error("Error processing data:", error)
            res.status(500).json({ error: "Internal Server Error" })
          }
      } else {
          // Handle other HTTP methods (optional)
          res.setHeader('Allow', ['POST'])
          res.status(405).end(`Method ${req.method} Not Allowed`)
      }
  }