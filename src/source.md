to start App
bun dev


** To pull Request from Git
git pull origin main

** To Push Into repository





React does not render 'false', 'null', 'undefined', or 'NaN' in the DOM. These values, when used in JSX, will result in nothing being displayed.

However, '0' and empty strings (`""`) are exceptions.

- ** '0' ** is rendered in the DOM because it is considered valid React Node. This means that if '0' is teh result expression, it will appear in your UI.
- **Empty Strings** (`""`) are also considered valid 

// * 1. Variables
//? You can embed JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

// * 2. Expressions
//? JSX allows you to write Javascript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

// * 3. Function Calls
//? Functions, especially those that return JSX, can be invoked directly within your JSX.

## Import And Export

Default Export: A file can have only one default export.
Default Import: When importing a default export you can name the import whatever you likke,

Named Export:
A file can have multiplr named exports.
Each named exports must be explicitly exported.

Named Import:
When importing named exports, the import names must watch the export names exactly.
Named imports must be enclosed in curly braces.


## Part 1: Simple Todo list in react

**Title** Creating a Simple Todo List in React with best Practices.

**Overview** 
In This Video, we'll start with the basics of building a simple Todo List in React. We'll focus in setting up the project, creating the components, and managing states effectively.

**What will we do Today**

- Set up the React Project
- Create teh main 'Todo' Component
- Build the "TodoForm' Component for adding tasks.
- Use the 'useState' hook to manage list of tasks.
- Implement basic form validation to ensure tasks are not empty.
- Discuss best practices for component structure and state management.