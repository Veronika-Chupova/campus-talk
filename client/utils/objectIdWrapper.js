import { ObjectId } from 'mongodb'

export default function wrapper (id) {
    const objectId = ObjectId.createFromHexString(id)
    return objectId
}