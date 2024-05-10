# Frontend Monorepo

Sample project to identify components used to make a monorepo for a frontend project with as few moving parts as possible.

## Components

- Yarn
- Vite

## Notes

- There is no configuraiton for TypeScript, React or Vite. Vite's defaults are used at the moment.
- When adding a workspace as dependency 'workspace: ' is added.
- To install a dependency in a package
  - Go to the package folder and run `yarn add 'library-name'` or
  - Run `yarn workspace 'workspace-name' add 'library-name'`
- node_modules are installed in the root folder by yarn
- vite is creating a node_modules folder in each package it is used. That folder is ignored in .gitignore now. But they are visible in the editor. Mabye we can find a way to new
- Shared library is not trainspiled. The TypeScript is directly imported by the importing modules.
- Changes to shared components are automatically reflected when running the dev server of other packages
- Yarn workspaces are not working without version numbers in package.json files.
