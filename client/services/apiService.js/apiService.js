export async function newSlotSubmitAPI (data) {
    console.log("newSlotSubmitAPI Service triggered")
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    }

    try {
        const res = await fetch('/api/submitNewSlot', options )

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return true
      } catch (error) {
        console.error('API call failed:', error)
        throw error // Propagate the error to the caller
      }
}

export async function getUserDataAPI (userId) {
    console.log("getUserDataAPI Service triggered")
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await fetch(`/api/getUserData?id=${userId}`, options )
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        return await res.json()

      } catch (error) {
        console.error('API call failed:', error)
        throw error // Propagate the error to the caller
      }
}

export async function getSlotsAPI () {
  console.log("getSlotsAPI Service triggered")
  const options = {
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
      }
  }
  try {
      const res = await fetch(`/api/getSlots`, options )
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      return await res.json()
      
    } catch (error) {
      console.error('API call failed:', error)
      throw error // Propagate the error to the caller
    }
}