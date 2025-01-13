import { ObjectId } from 'mongodb'

const dateString = new Date('2014-12-31T15:00:00')
const syntheticData = {
    user_auth: [
        {
          email: "user1@user.com",
          passwordHash: "user1password",
          salt: "user1salt",
          createdAt: dateString,
          updatedAt: dateString,
          lastLogin: dateString,
          status: "active",
          roles: ["user"],
        },
            {
          email: "user2@user.com",
          passwordHash: "user2password",
          salt: "user2salt",
          createdAt: dateString,
          updatedAt: dateString,
          lastLogin: dateString,
          status: "active",
          roles: ["user"],
        },
        {
            email: "user3@user.com",
            passwordHash: "user3password",
            salt: "user3salt",
            createdAt: dateString,
            updatedAt: dateString,
            lastLogin: dateString,
            status: "active",
            roles: ["user"],
        },
        {
            email: "user4@user.com",
            passwordHash: "user4password",
            salt: "user4salt",
            createdAt: dateString,
            updatedAt: dateString,
            lastLogin: dateString,
            status: "active",
            roles: ["user"],
        },
        {
            email: "user5@user.com",
            passwordHash: "user5password",
            salt: "user5salt",
            createdAt: dateString,
            updatedAt: dateString,
            lastLogin: dateString,
            status: "active",
            roles: ["user"],
        },
        {
            email: "user6@user.com",
            passwordHash: "user6password",
            salt: "user6salt",
            createdAt: dateString,
            updatedAt: dateString,
            lastLogin: dateString,
            status: "active",
            roles: ["user"],
        },
        {
            email: "user7@user.com",
            passwordHash: "user7password",
            salt: "user7salt",
            createdAt: dateString,
            updatedAt: dateString,
            lastLogin: dateString,
            status: "active",
            roles: ["user"],
        },
        {
            email: "user8@user.com",
            passwordHash: "user8password",
            salt: "user8salt",
            createdAt: dateString,
            updatedAt: dateString,
            lastLogin: dateString,
            status: "active",
            roles: ["user"],
        },
        {
            email: "user9@user.com",
            passwordHash: "user9password",
            salt: "user9salt",
            createdAt: dateString,
            updatedAt: dateString,
            lastLogin: dateString,
            status: "active",
            roles: ["user"],
        },
        {
            email: "user10@user.com",
            passwordHash: "user10password",
            salt: "user10salt",
            createdAt: dateString,
            updatedAt: dateString,
            lastLogin: dateString,
            status: "active",
            roles: ["user"],
        }
    ],
    user_profiles:[
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2a'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Olivia",
          lastName: "Brown",
          department: "Computer Science",
          research: "Artificial Intelligence and Machine Learning",
          interests: "Exploring algorithms, neural networks, and deep learning to improve automation, predictive modeling, and problem-solving across industries like healthcare, finance, and robotics."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2b'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Liam",
          lastName: "Smith",
          department: "Computer Science",
          research: "Cybersecurity and Cryptography",
          interests: "Examining encryption methods, threat detection, and secure network protocols to ensure data protection, mitigate cyber threats, and uphold privacy regulations."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2c'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Emma",
          lastName: "Jones",
          department: "Psychology",
          research: "Cognitive Behavioral Therapy for Anxiety Disorders",
          interests: "Investigating effective CBT techniques, patient outcomes, and how therapy can be personalized to treat generalized anxiety, panic attacks, and phobias."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2d'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Noah",
          lastName: "Williams",
          department: "Psychology",
          research: "Neuroplasticity and Cognitive Rehabilitation",
          interests: "Studying brain's ability to reorganize itself, the effects of learning on brain structure, cognitive training, and how to enhance memory and recovery after neurological injury."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2e'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Ava",
          lastName: "Davis",
          department: "Biology",
          research: "Gene Editing and CRISPR Technology",
          interests: "Exploring gene editing techniques, potential medical applications, ethical concerns, and how CRISPR technology can be used to cure genetic disorders and enhance crop resilience."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2f'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Ethan",
          lastName: "Miller",
          department: "Environmental Science",
          research: "Conservation and Biodiversity",
          interests: "Assessing human impact on ecosystems, conservation strategies, species adaptation to environmental changes, and climate policies for sustainable ecosystems."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc30'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Sophia",
          lastName: "Wilson",
          department: "Business",
          research: "Sustainable Business Practices",
          interests: "Researching eco-friendly business models, corporate social responsibility, green innovation, and how sustainability can drive economic growth while reducing environmental footprints."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc31'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "James",
          lastName: "Moore",
          department: "Business",
          research: "Digital Transformation in Business",
          interests: "Exploring the impact of digital technologies, cloud computing, AI, and automation on business models, consumer behavior, and operational efficiency in modern enterprises."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc32'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Mia",
          lastName: "Taylor",
          department: "History",
          research: "Archaeology and Ancient Civilizations",
          interests: "Investigating the social structures, technologies, and cultural practices of ancient societies, using excavations, artifacts, and historical records to understand human history."
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc33'),
          avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png",
          firstName: "Lucas",
          lastName: "Anderson",
          department: "History",
          research: "Post-Colonial Studies and Global Politics",
          interests: "Analyzing how colonial histories shaped political, economic, and social structures, addressing issues like inequality, cultural identity, and post-colonial legacies in modern societies."
        }
    ],
    timeslots: [
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2a'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2b'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                },
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2c'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2d'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2e'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc2f'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc30'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc31'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc32'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        },
        {
          userId: new ObjectId('678519bf11ea1f191b7cfc33'),
          date: new Date('2025-01-23T09:00:00'),
          slotStart: new Date('2025-01-23T09:00:00'),
          slotEnd: new Date('2025-01-23T11:00:00'),
          status: "active",
          chunks: [
              {
                  chunkStart: null,
                  chunkEnd: null,
                  durationMinutes: null,
                  booked: null,
                }
          ],
        }
    ],
}

export default syntheticData