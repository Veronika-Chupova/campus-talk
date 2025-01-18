import wrapper from "../../utils/objectIdWrapper"
import slotSlicer from "../../utils/slotSlicer"
import clientPromise from "../../lib/mongodb"

const dbName = process.env.db
const collectionName = process.env.TIMESLOTS
const duration = 60

export default async function handler (req, res) {
  console.log("Endpoint handler triggered")
  const {method, body } = req || {}
  const { id, slotDate, slotStart, slotEnd, status } = body || {}
  if (method === 'POST') {
    const client = await clientPromise
    const db = client.db( dbName ).collection( collectionName )
    const chunks = slotSlicer( slotStart, slotEnd, duration )
    const insertReadyObj = {
      userId: wrapper ( id ),
      date: new Date ( slotDate ),
      slotStart: new Date ( slotStart ),
      slotEnd: new Date ( slotEnd ),
      status,
      chunks
    }
    try {
      const slotRecord = await db.insertOne( insertReadyObj, {writeConcern: {w: 1} } )

      if (!slotRecord.acknowledged) {
          throw new error ('DB record insertion failed')
      }
          
      res.status(200).json({ message: "Data received successfully!" })

      } catch (error) {
          console.error("Error processing data:", error)
          res.status(500).json({ error: "Internal Server Error" })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}