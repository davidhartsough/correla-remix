# Correla

Built from the [Blues](https://github.com/remix-run/blues-stack) [Remix Stack](https://remix.run/stacks).

## Scripts

### start db

Start the Postgres Database in [Docker](https://www.docker.com/get-started):

```sh
npm run docker
```

**Note:** The npm script will complete while Docker sets up the container in the background. Ensure that Docker has finished and your container is running before proceeding.

### initial setup

```sh
npm run setup
```

### update db

```sh
npm run db:update
```

### seed db

```sh
npm run db:seed
```

### build

```sh
npm run build
```

### start dev

Start dev server:

```sh
npm run dev
```

Starts the app in dev mode, rebuilding assets on file changes.

## Deployment

See the GitHub Actions that handle automatically deploying the app to production.

## Testing

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory. As you make changes, add to an existing file or create a new file in the `cypress/e2e` directory to test your changes.

We use [`@testing-library/cypress`](https://testing-library.com/cypress) for selecting elements on the page semantically.

To run these tests in development, run `npm run test:e2e:dev` which will start the dev server for the app as well as the Cypress client. Make sure the database is running in docker as described above.

We have a utility for testing authenticated features without having to go through the login flow:

```ts
cy.login();
// you are now logged in as a new user
```

We also have a utility to auto-delete the user at the end of your test. Just make sure to add this in each test file:

```ts
afterEach(() => {
  cy.cleanupUser();
});
```

That way, we can keep your local db clean and keep your tests isolated from one another.

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).
