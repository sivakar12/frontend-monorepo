# Frontend Monorepo

Sample project to identify components used to make a monorepo for a frontend project with as few moving parts as possible.

## Components

- pnpm
- Vite

## Notes

- There is no configuraiton for TypeScript, React or Vite. Vite's defaults are used at the moment.
- When adding a workspace as dependency 'workspace: ' is added.
- To install a dependency in a package
  - Go to the package folder and run `pnpm add 'library-name'` or
  - Run `pnpm --filter 'workspace-name' add 'library-name'`
- node_modules folders are there in each workspace but they don't take up space. They are linked to root node_modules.
  - Links are created for workspace dependencies also.
- If dependencies are not identified by IDE, run `pnpm install` in root to create links
- Shared library is not trainspiled. The TypeScript is directly imported by the importing modules.
- Changes to shared components are automatically reflected when running the dev server of other packages