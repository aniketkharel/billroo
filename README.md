# Brillo Assessment

## Stack

- Deno
- NextJs
- PostgreSQL

## Tech Requirements

- **Must** use Typescript and React for the frontend
- **Must** use Typescript with or without any framework for the backend
- **Must** use SQL based engine for the DB, ideally Postgres. SQLite cannot be used.
- May use NextJS Typescript + API routes for the frontend/backend
- May use MaterialUI for layout and components
- May use any other querying or state management libraries
- Prefer to not use an ORM like TypeORM or Prisma for the DB, instead prefer using SQL or strongly typed SQL builder

## Requirements

- Home Page (first page in prototype)
  - UI and Layout follows prototype
  - User sees their average spend per week, and an indicator of how it compares against average per expense type
    - Take the average for each type as all expenses for that type over the last 7 days
    - If the user does not have any expense yet for the expense type, then show a reasonable empty state
  - User can Add daily expense, or edit if already added
- Add/Edit Expenses (second page in prototype)
  - UI and Layout follows prototype
  - User can add or edit expense for each type
  - Add reasonable input validation. Amounts should be between $1 and $100.
  - After adding expenses, user should be taken back to Home page
- Each user can only add one expense per day and per type
- Assume a static user id like `101010` for this tech assessment (i.e. there is no need to implement login and user creation)
- Seed your DB with data from this Google sheet: https://docs.google.com/spreadsheets/d/1R1GD1BniCMrWMo9ruQdA9Qh1jhhVeuP7vdHdBxnHdpY/edit?pli=1#gid=0
- Use reasonable empty states and loaded states when needed
- You may adjust the layout to suit your needs, but the requirements stated above must be met.

## Hints and Tips

- Keep query patterns and performance in mind when designing your Database schema and queries
- Keep security and safety in mind when designing backend endpoints and db queries
- Points will be given to how well the app satisfies requirements above, correctness, code structure
- Points will also be given to adding unit tests for your backend endpoints and/or db queries.