const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const User = require("./models/User"); // Adjust the path as necessary
const Business = require("./models/Business"); // Adjust the path as necessary
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    seedDatabase();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    const userDeletionResult = await User.deleteMany({});
    const businessDeletionResult = await Business.deleteMany({});
    console.log(`Deleted ${userDeletionResult.deletedCount} users`);
    console.log(`Deleted ${businessDeletionResult.deletedCount} businesses`);

    // Create sample users
    const users = [];
    for (let i = 0; i < 10; i++) {
      const user = new User({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        plan: faker.helpers.arrayElement(["Standard", "Gold", "Platinum"]),
      });
      users.push(user);
    }
    const insertedUsers = await User.insertMany(users);
    console.log(`Inserted ${insertedUsers.length} users`);

    // Create sample businesses
    const businesses = [];
    for (let i = 0; i < 20; i++) {
      const business = new Business({
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        category: faker.commerce.department(),
        owner: faker.helpers.arrayElement(users)._id,
        subscribers: [],
        reviews: [],
      });
      businesses.push(business);
    }
    const insertedBusinesses = await Business.insertMany(businesses);
    console.log(`Inserted ${insertedBusinesses.length} businesses`);

    console.log("Database seeding completed");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};
