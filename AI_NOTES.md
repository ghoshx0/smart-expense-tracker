# AI Usage Notes

## AI Tools Used

- ChatGPT

---

## 1. AI-Generated vs. Manually Written

### AI Assistance

AI was primarily used for:

- Designing the overall project architecture.
- Deciding the folder structure and separation of concerns.
- Generating the initial implementation for:
  - Express setup
  - Repository layer
  - Service layer
  - Controller layer
  - Route configuration
  - Validation using express-validator
  - Jest and Supertest test cases
- Generating documentation (`README.md` and `AI_NOTES.md`).

### Written and Implemented by Me

I was responsible for:

- Creating the project from scratch.
- Setting up the Node.js environment.
- Installing and configuring all dependencies.
- Creating every folder and file.
- Implementing the generated code into the project.
- Debugging runtime issues.
- Configuring Jest for ES Modules.
- Running the application.
- Manually testing every API endpoint using Postman.
- Running and verifying the automated test suite.
- Verifying that the JSON file was updated correctly after each operation.

---

## 2. Validation, Testing, and Changes

I reviewed and validated all generated code before considering it complete.

The following checks were performed:

- Verified that the Express server started successfully.
- Tested expense creation.
- Tested retrieving all expenses.
- Tested filtering expenses by category.
- Tested calculating total expenses.
- Tested deleting an expense.
- Tested deleting a non-existent expense.
- Tested validation for invalid request bodies.
- Verified that data was correctly persisted in `expenses.json`.
- Executed the Jest test suite and confirmed all tests passed.
- Implemented the optional bonus feature to search expenses by title.
- Added automated tests to verify the search endpoint.

### Changes Made

During development, the following adjustments were made:

- Configured Jest to work with ES Modules by adding `jest.config.js`.
- Updated the `npm test` script to support ES Module execution.
- Renamed files to maintain a consistent naming convention across the project.
- Verified the architecture after implementation to ensure each layer had a single responsibility.

---

## 3. AI Suggestions Not Used

Some suggestions generated during development were intentionally not implemented.

Examples include:

- Creating a separate global error middleware file.
- Adding repository methods that were not required by the assignment (such as retrieving an expense by ID).
- Introducing additional abstractions or utility classes beyond the assignment requirements.

These suggestions were not implemented because the goal was to keep the project simple, focused, and aligned with the assignment requirements while avoiding unnecessary complexity.