import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient();
const app = express();

app.use(express.json());

/* GET ALL USERS */
app.get("/users", async (req, res) => {
  try {
    const users = await client.user.findMany({
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true
      }
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


/* GET TODOS OF USER */
app.get("/todos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const user = await client.user.findUnique({
      where: { id },
      select: {
        username: true,
        todos: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


/* OPTIONAL TEST FUNCTION */
async function readUser() {
  const user = await client.user.findUnique({
    where: { id: 7 },
    include: { todos: true }
  });
  console.log(user);
}

readUser();


/* START SERVER */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});



//first 111111111

// import { PrismaClient } from "@prisma/client";
// import express from "express";

// // Initialize PrismaClient and Express app
// const client = new PrismaClient();
// const app = express();

// // Middleware to parse incoming JSON requests
// app.use(express.json());

// // Route to get all users from the database
// app.get("/users", async (req, res) => {
//     // Fetch all users from the 'user' table
//     const users = await client.user.findMany();
//     // Send the fetched users as a JSON response
//     res.json(users);
// })

// // Route to get a user's todos based on their ID
// app.get("/todos/:id", async (req, res) => {
//     // Extract user ID from the URL parameter
//     const id = req.params.id;
//     // Find the user with the given ID and include their todos, username, and password
//     const users = await client.user.findFirst({
//         where: {
//             id: parseInt(id) // Convert the ID from string to integer
//         },
//         select: {
//             todos: true,  // Fetch the user's todos
//             username: true, // Fetch the user's username
//             password: true  // Fetch the user's password
//         }
//     });
//     // Send the user data as a JSON response
//     res.json(users);
// })

// // Function to read a specific user and their todos (for testing or logging purposes)
// async function readUser() {
//     // Fetch a user with ID 7 and include their todos
//     const user = await client.user.findFirst({
//         where: {
//             id: 7
//         },
//         include: {
//             todos: true  // Include the user's todos in the result
//         }
//     });
//     // Log the fetched user data to the console
//     console.log(user);
// }

// // Call the readUser function to execute it
// readUser();

// // Start the Express server on port 3000
// app.listen(3000);

// seocnd 22222222222


// import { PrismaClient } from "@prisma/client";
// import express from "express";


// const client = new PrismaClient();
// const app = express();


// app.use(express.json());
// async function insertUser() {
//   const res = await client.user.create({
//     data: {
//       username: "admin1",
//       password: "123456",
//       firstName: "harkirat",
//       lastName: "singh"
//     }
//   });

//   console.log(res);
// }

// insertUser();