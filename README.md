# Vite + React TS Starter Template

This project contains a starter template to scaffold the bare necessities for a React TS project, built with Vite.

## Usage

You can clone and copy the contents of the repo, or you can use `degit` to it for you:

```sh
npx degit russelldutton/react-starter my-app
```

Replace `my-app` with the name of your project/app name.

Then to run:

```sh
cd my-app
npm install
npm run dev
```

## Technologies used

- React + Typescript
- Vite
- ESLint + Prettier
- Vitest
- React Testing Library
- React Hook Form
- React Router v6
- React-Query v5
- Zod
- Remeda
- Jotai
- Docker

This project intentionally leaves out any sort of styling packages and state management libraries, as that tends to be project-dependant.

## Getting Started

This project has a simple Blog post page with some mock data to illustrate some of the intended ways to add pages, child routes, and fetch data from some external source.
All source code is located in the `src` directory and further references to folders are relative to this path, unless otherwise stated.

### Project Structure

All files follow the kebab-case naming convention, except for React Components, which follow the PascalCase naming convention.

Below is a breakdown of the sources directories:

- **`api`**: All code relating to fetching data from an API goes here. The `client` directory holds types and functions to fetch data from an API. They are co-located as you would generally want to generate types from a spec, and keep them here. The `hooks` folder holds custom React Query hook wrappers or the exported [options builder functions](https://tanstack.com/query/latest/docs/framework/react/guides/query-options).
- **`assets`**: Public assets files go here (images, fonts, etc.)
- **`components`**: All components are stored here, and organisation follows the [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- **`contexts`**: All context providers and/or global stores are located here.
- **`hooks`**: All React hooks remain here, including their tests.
- **`routes`**: All Routers defined for the project can be found here.
- **`types`**: All types for the project go here

### Environment Configuration

This project uses a combination of build-time defaults and environment variables and features, set at runtime. The variables set at runtime are defined in the [`public/__ENV.js`](./public/__ENV.js) file. The variables are defined on a custom `env` property on the window object.

To add a runtime variable:

1. Add a property to the object in the `__ENV.js` file.
2. Add a parsing rule to the schema defined in [`src/types/env.type.ts`](./src/types/env.type.ts).
3. Optionally add a default value to the default config object defined in [`src/contexts/EnvProvider.tsx`](./src/contexts/EnvProvider.tsx).

Now you can read your variable from the Env Context, in a type-safe manner, like so:

```javascript
const { yourProperty } = useEnvContext();
```

The Zod schema ensures that static types and runtime parsing remain in sync.

#### Feature Flags

A sub-property on the object in the `__ENV.js` file is the `featureFlags` property. This is reserved for grouping all feature flags together, and used to seed the Feature Flags Provider. All properties should be boolean types.

Adding a feature flag follows a similar approach to adding an environment variable:

1. Add a property to the object in the `__ENV.js` file.
2. Add a parsing rule to the schema defined in [`src/types/feature-flags.type.ts`](./src/types/feature-flags.type.ts).
3. Optionally add a default value to the default config object defined in [`src/contexts/EnvProvider.tsx`](./src/contexts/EnvProvider.tsx).

### Adding Pages

The application's routing definition can be found in [`src/routes/Routes.tsx`](./src/routes/Routes.tsx), and uses React Router's new Data Routers API to leverage their loaders and actions for each route.

Here's how you can add a new page:

1. Define your Page component in `src/components/pages/<your-page>`.
2. Optionally, define loaders or actions for your page in the same folder.
3. Define a route in [`src/routes/Routes.tsx`](./src/routes/Routes.tsx) for your new page.
4. Optionally, add a link to navigate there in [`src/components/molecules/navbar/NavBar.tsx`](./src/components/molecules/navbar/NavBar.tsx)

## License

MIT
