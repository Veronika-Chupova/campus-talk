import syntheticData from "./syntheticData"
import dbSchemas from "./dbSchemas"

export default async function getValidatedCollection ( db, collectionName ) {

    // Check if the collection exists
    const collections = await db.listCollections({ name: collectionName }).toArray()
    if (collections.length === 0) {
  
      // Create collection with validation
      if ( dbSchemas[collectionName] ) {
          await db.createCollection(collectionName, {
              validator: { $jsonSchema: dbSchemas[collectionName] },
              validationAction: "error", // Reject invalid documents
            })
            console.log("Collection created with validation")
      } else {
          console.log ("There is no schema with the given name")
      }
  
    } 
    // else {
    //   const collection = db.collection( collectionName )
    //   const recordCount = await collection.countDocuments()
    //   if (recordCount === 0) {
    //     try {
    //       await collection.insertMany ( syntheticData[collectionName] )
    //     } catch (err) {
    //       console.error("Validation Error:", err)
    //     } 
    //   } else {
    //     console.log ("Data exists")
    //   }
    // }
  
    return db.collection(collectionName)
  }