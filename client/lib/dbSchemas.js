const dbSchemas = {
    user_auth: {
        bsonType: "object",
        required: ["email", "passwordHash", "salt", "createdAt", "lastLogin", "status"],
        properties: {
          email: {
            bsonType: "string",
            pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
            description: "Email must be a valid email address and is required",
          },
          passwordHash: {
            bsonType: "string",
            description: "Must be a hash of the password string and is required",
          },
          salt: {
            bsonType: "string",
            description: "Must be a random string and is required",
          },
          createdAt: {
            bsonType: "date",
            description: "Must be an ISODate and is required",
          },
          updatedAt: {
            bsonType: "date",
            description: "Must be an ISODate and is required",
          },
          lastLogin: {
            bsonType: "date",
            description: "Must be an ISODate and is required",
          },
          status: {
            bsonType: "string",
            enum: ["active", "suspended", "deleted"],
            description: "Must be one of the three values is required",
          },
          roles: {
            bsonType: "array",
            items: {
              bsonType: "string",
              enum: ["user", "admin"],
              description: "Each element in the array must be a string",
            },
            description: "Must be an array of strings",
          },
      },
    },
    user_profiles: {
        bsonType: "object",
        required: ["userId", "avatar", "firstName", "lastName", "department", "research"],
        properties: {
            userId: {
                bsonType: "objectId",
                description: "Must be a valid ObjectId referencing a user in the user_auth collection",
              },
            avatar: {
                bsonType: "string",
                pattern: "^(https?:\\/\\/.*\\.(?:png|jpg|jpeg|svg))$",
                description: "Must be a valid URL pointing to an image (png, jpg, jpeg, svg)",
            },
            firstName: {
                bsonType: "string",
                description: "Must be a string and is required",
            },
            lastName: {
                bsonType: "string",
                description: "Must be a string and is required",
            },
            department: {
                bsonType: "string",
                description: "Must be a string and is required",
            },
            research: {
                bsonType: "string",
                minLength: 1,
                maxLength: 1000,
                description: "Must be a non-empty string",
            },
            interest: {
                bsonType: "string",
                minLength: 1,
                maxLength: 1000,
                description: "Must be a non-empty string",
            },
        },
    },
    timeslots: {
        bsonType: "object",
        required: ["userId", "date", "slotStart", "slotEnd", "status", "chunks"],
        properties: {
            userId: {
                bsonType: "objectId",
                description: "Must be a valid ObjectId referencing a user in the user_auth collection",
            },
            date: {
                bsonType: "date",
                description: "Must be an ISODate and is required",
            },
            slotStart: {
                bsonType: "date",
                description: "Must be a valid ISODate object representing a timestamp",
            },
            slotEnd: {
                bsonType: "date",
                description: "Must be a valid ISODate object representing a timestamp",
            },
            status: {
                bsonType: "string",
                enum: ["active", "cancelled"],
                description: "Must be one of the three values is required",
            },
            chunks: {
                bsonType: "array",
                items: {
                    bsonType: "object",
                    required: ["chunkStart", "chunkEnd", "durationMinutes"],
                    properties: {
                        chunkStart: {
                            bsonType: "date",
                            description: "Must be a valid ISODate object representing a timestamp",
                        },
                        chunkEnd: {
                            bsonType: "date",
                            description: "Must be a valid ISODate object representing a timestamp",
                        },
                        durationMinutes: {
                            bsonType: "int",
                            enum: [60, 30],
                            description: "Must be an integer representing the duration of the chunk in minutes",
                        },
                        booked: {
                            bsonType: "objectId",
                            description: "Must be a valid ObjectId referencing a user in the user_auth collection",
                        },
                    },
                },
            },
        },
    },
}

export default dbSchemas