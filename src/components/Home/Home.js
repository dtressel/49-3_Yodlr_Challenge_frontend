import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-headers">
        <h1>Yodlr Design Challenge</h1>
        <h3>by Daniel Tressel</h3>
      </div>
      <div>
        Thank you for reviewing my completion of Yodlr's design challenge! I will be using this home page to outline how I completed this challenge and what features I included. Use the links in the navbar to visit the required signup and admin pages.
      </div>
      <h4>Backend</h4>
      <ul>
        <li>Used the supplied backend</li>
        <li>Use with client-side rendering</li>
        <li>One modification: Installed and used the cors NPM package to allow Cross-Origin Resource Sharing</li>
      </ul>
      <h4>Technologies Used (Frontend)</h4>
      <ul>
        <li>React</li>
        <li>React Router (client-side routing)</li>
        <li>Material UI</li>
        <li>Core Languages: JavaScript, HTML, CSS</li>
      </ul>
      <h4>File Organization</h4>
      <ul>
        <li>Split files into components, hooks, and helpers folders with base files directly in src directory</li>
        <li>Each React component is placed in it's own file with corresponding CSS and index.js files</li>
        <li>Each component folder can act as a module that can be taken out of this context and used elsewhere</li>
        <li>ApiLink file in helpers encapsulates api communication</li>
      </ul>
      <h4>Page Layout</h4>
      <ul>
        <li>Layout Components: Layout with children components NavBar and Footer</li>
        <li>Layout component sets where NavBar, Footer, and content (Outlet component) should be placed</li>
        <li>Every page uses this layout</li>
        <li>Footer component sticks to the bottom of the page with custom CSS</li>
        <li>Design is fully response, every page displays well on computer and mobile</li>
      </ul>
      <h4>Routing</h4>
      <ul>
        <li>I use React Router for client-side routing</li>
        <li>I use createBrowserRouter, the newest version of the browser router released in version 6.4 about a year ago</li>
        <li>Routes are defined in App.js</li>
        <li>4 pages: Home ('/'), Signup ('/signup), Admin('/admin'), and Success('/success')</li>
        <li>With proper use of React Router and React no full page loads are needed on navigation to new pages</li>
      </ul>
      <h4>Signup Page Content</h4>
      <ul>
        <li>Component: Signup</li>
        <li>The Signup page contains a form, styled using Material UI styles</li>
        <li>My custom hook, useFields (reusable), is used to to manage the state of the input fields in the form</li>
        <li>basic email field validation</li>
        <li>sends data to API through ApiLink</li>
        <li>basic error handling if error communicating with API</li>
        <li>On successful creation, user is sent to /success page</li>
      </ul>
      <h4>Success Page Content</h4>
      <ul>
        <li>Component: Success</li>
        <li>Success page is sent returned user data from successful creation of user from API</li>
        <li>Success page is inaccessible if user tries to manually navigate to it and redirects to /signup</li>
      </ul>
      <h4>Admin Page Content</h4>
      <ul>
        <li>Component: Admin, UsersTable (child of Admin), TableHeader (child of UsersTable), and TableToolbar (child of UsersTable)</li>
        <li>Most complex page so I break it down into several components</li>
        <li>Admin component handles users state and maps general layout of page content</li>
        <li>UsersTable component handles all state related to the organization of the table and lays out table contents</li>
        <li>TableToolbar component displays toolbar at top of table</li>
        <li>TableHeader component displays table header</li>
      </ul>
      <h4>Users Table Features</h4>
      <ul>
        <li>Users can be sorted by all columns</li>
        <li>Checkboxes allow users to be selected Individually or in bulk</li>
        <li>After selecting users, an admin can activate selected users or delete selected users using button icons</li>
        <li>Any changes made is updated live without refreshing the page and without a full page load</li>
        <li>Users table created with help of Material UI table components</li>
      </ul>
      <h4>Todos (if I had more time)</h4>
      <ul>
        <li>Tests: smoke tests, snapshot tests, routing tests, test helper functions</li>
        <li>More robust error handling</li>
        <li>Custom 404 page</li>
        <li>Allow searching for users in users table</li>
      </ul>
    </div>
  )
}

export default Home;