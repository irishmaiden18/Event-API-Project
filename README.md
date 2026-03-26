# EventHub API Project

## Project Overview

You will design and build the backend for **EventHub**, a basic event management system.
You will:

- Design MongoDB models for key entities
- Build a RESTful API using Node.js, Express, and Mongoose
- Implement filtering and sorting on event listings
- Handle relationships between collections using Mongoose references
- Develop clean and modular code with proper error handling

---

## Key Features

### Events

- CRUD operations
- Fields:
  - `title` *(string)*
  - `description` *(string)*
  - `date` *(date)*
  - `location` *(string)*
  - `category` *(string)* *(e.g., concert, conference, workshop)*
  - `price` *(number)*
  - `availableTickets` *(number)*
- Events should support **filtering and sorting** through query parameters:
  - Filter by category, date, and price range
  - Sort by date or price (ascending or descending)

#### Example Query:

```
GET /events?category=conference&minPrice=10&maxPrice=100&startDate=2025-01-01&sort=-date
```

---

### Users

- CRUD operations
- Fields:
  - `name` *(string)*
  - `email` *(string)*
  - `phone` *(string)*

---

### Bookings

- Users can book tickets for events
- Fields:
  - `user` *(reference to User)*
  - `event` *(reference to Event)*
  - `quantity` *(number)*
  - `totalPrice` *(calculated from event price and quantity)*
  - `status` *("confirmed", "cancelled")*
- Endpoints should allow:
  - Creating a booking
  - Updating or cancelling a booking
  - Viewing all bookings for a user
- Decrease available tickets when a booking is made

---

## Project Guidelines

- Structure your project using **Models**, **Routes**, and **Controllers** OR **Bookings**, **Events**, and **Users** inside a routes folder.
- Use Mongoose references to relate bookings to users and events
- Use `.populate()` where appropriate to return related data

---
