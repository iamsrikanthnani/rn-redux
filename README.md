# rn-redux 🚀

Welcome to **rn-redux**! This React Native project has been bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli), and Redux is used for efficient and intuitive state management.

## 📁Project Structure

This project follows a specific folder structure for organization and ease of access. Here is a brief overview:

### 🧩components

This directory contains all reusable React components. Each component has its own folder, with a structure similar to this:

- **text** (example of a component directory)
  - **index.tsx**: The main component file.
  - **styles.tsx**: This file contains all styled-component definitions related to the "text" component.

### 🎨theme

This directory is responsible for all the global style definitions, including theme configurations, spacings, and typography. It consists of:

- **spacing.tsx**: Defines the different spacings used throughout the app.
- **theme.tsx**: Contains the dark and light theme configurations for styled-components.

### 📱app

This directory is where page-specific components, utilities, and styles are located. An example of a page directory ("home") is as follows:

- **home**
  - **index.tsx**: The main component file for the home page.
  - **styles.tsx**: This file contains all styled-component definitions related to the home page.
  - **components**: This directory contains any components that are specific to the home page.
  - **utils**: Any utilities specifically needed for the home page.

### 🔄redux

This directory contains all Redux-related files, organized into subdirectories:

- **actions**: All Redux action files are in this directory. Each action file is named after the feature it is related to (e.g., `todo.actions.tsx`).
- **reducers**: This directory contains all the Redux reducer files. Each reducer file is named after the feature it relates to (e.g., `todo.reducers.tsx`).
- **types**: This directory contains all the Redux types. Each type file is named after the feature it pertains to (e.g., `todo.types.tsx`).
- **store**: This directory contains the global Redux store (`index.tsx`).

### 🖼️assets

This directory contains all the static assets required by the project, such as images or icons.

### 🔗Import Aliases

To streamline imports, this project uses the following import aliases:

- `@components`: Points to the "components" directory.
- `@redux`: Points to the "redux" directory.
- `@pages`: Points to the "app" directory.
- `@navigation`: Points to the "navigation" directory.
- `@theme`: Points to the "theme" directory.
- `@assets`: Points to the "assets" directory.

## 📦 Dependencies

Here's a rundown of the core packages we use in this project:

- **@react-native-async-storage/async-storage** 🗄️: A simple, unencrypted, asynchronous, persistent, key-value storage system for React Native.
- **@react-navigation/native & @react-navigation/native-stack** 🧭: Provides navigation functionality for our React Native app, using platform-native navigation components.
- **react & react-native** ⚛️: These form the core framework, allowing us to build native mobile apps using JavaScript and React.
- **react-native-bootsplash** 🚀: This package is used for managing the display of the launch screen in your app.
- **react-native-reanimated** 🔄: An enhanced, next-gen, supercharged version of Animated library in React Native.
- **react-native-safe-area-context** 🥽: This package handles safe area insets for iOS and Android, enabling us to avoid notches, status bars, and other intrusions.
- **react-redux & redux** 🔄: Enables us to use Redux for state management in our React Native application.
- **redux-thunk** 🌀: Middleware that allows us to write action creators that return a function instead of an action.
- **styled-components** 💅: This package allows us to use component-level styles in our React Native app, increasing the modularity and style scalability of our project.

## 🚀 Running the Application

We use Yarn as the package manager for this project. To run the application, use the following commands:

### Start the Metro Server

First, you'll need to start Metro, the JavaScript _bundler_ that comes with React Native. From the _root_ of your React Native project, run:

```bash
yarn start
```

## 📲 Run the Application

With Metro Bundler running, open a new terminal at the root of your React Native project and execute:

for Android

```bash
yarn android
```

for iOS

```bash
yarn ios
```

If everything is set up correctly, you should see your new app running in your Android Emulator or iOS Simulator shortly. This is one way to run your app - you can also run it directly from within Android Studio and Xcode respectively.

🎉 Congratulations!
You've successfully run your React Native App with Redux. 🥳

## 📚 Learn More

- [React Native Website](https://reactnative.dev/) - Learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/getting-started) - An overview of React Native and environment setup.
- [Learn the Basics](https://reactnative.dev/docs/tutorial) - A guided tour of the React Native basics.
- [Blog](https://reactnative.dev/blog) - Read the latest official React Native blog posts.
- [@facebook/react-native](https://github.com/facebook/react-native) - The open source GitHub repository for React Native.

## ❗ Troubleshooting

Encountered an issue? Check out the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page on the React Native website.
