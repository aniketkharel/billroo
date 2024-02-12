# Billroo

Your Budget allocator.

## Database Queries

```sql

-- table schemas

  -- Create USERS table
CREATE TABLE IF NOT EXISTS Users (
  id INTEGER PRIMARY KEY
);

-- Create CATEGORY table
CREATE TABLE IF NOT EXISTS Category (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Create EXPENSES table
CREATE TABLE IF NOT EXISTS Expenses (
  id SERIAL PRIMARY KEY,
  amount FLOAT NOT NULL,
  user_id integer REFERENCES Users(id),
  date DATE DEFAULT CURRENT_DATE NOT NULL,
  category_id INTEGER REFERENCES Category(id)
);


```

## References

- [ts-node-starter](https://github.com/microsoft/TypeScript-Node-Starter?tab=readme-ov-file#project-structure)
