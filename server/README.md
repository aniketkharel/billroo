# Billroo

Your Budget allocator.

## Database Queries

```sql

-- table schemas

  -- Create USERS table
CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  _id UUID NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- Create CATEGORY table
CREATE TABLE IF NOT EXISTS Category (
  id SERIAL PRIMARY KEY,
  _id UUID NOT NULL,
  name TEXT NOT NULL
);

-- Create EXPENSES table
CREATE TABLE IF NOT EXISTS Expenses (
  id SERIAL PRIMARY KEY,
  _id UUID NOT NULL,
  amount FLOAT NOT NULL,
  user_id UUID REFERENCES Users(id),
  date DATE DEFAULT CURRENT_DATE NOT NULL
  category_id INTEGER REFERENCES Category(id)
);


```

## References

- [ts-node-starter](https://github.com/microsoft/TypeScript-Node-Starter?tab=readme-ov-file#project-structure)
