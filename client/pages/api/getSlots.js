import clientPromise from "../../lib/mongodb"

const dbName = process.env.db
const collectionName = process.env.TIMESLOTS

export default async function handler (req, res) {
    console.log("getSlots endpoint handler triggered")
    const { method } = req || {}

      if (method === 'GET') {
        const client = await clientPromise
        const db = client.db(dbName).collection(collectionName)

          try {
            const slots = await db.find({ status: "active" }).toArray()
            res.status(200).json(slots)
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