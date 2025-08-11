## Here's a summary of the steps used to implement a Dark/Light mode toggle in React:

### Create a Context:

const ThemeContext = createContext();
This Contect will store the current theme and the function to toggle it

## Create a Provider Component
Define a ThemeProvider component that wraps its children with the ThemeContext.Provider.
Inside ThemeProvider, use the useState Hook to Manage the theme state, initialized to "Light".
Define a toggleTheme function that switches the theme between "Light" and "dark".

## Provide Context Values
Pass the theme State and toggleTheme function as the value of the ThemeContext.Provider.
This allows any child conponent to access and manipulate the theme.

## Consume the Context in a Component:
In the Darklight component, use the hook to consume the ThemeContext. Destructure the theme and toggleTheme from the context.

## Apply Conditioning Styling
Use Consitional class names to apply differnt styles based on the current theme value.
Adjust the background color, text color, and button label according to the Current theme.

## Toggle the Theme:
Attact the toggleTheme function to a button's onClick event.
This allows the user to switch between light and dark modes by the click of the button.