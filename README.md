# Admin Dashboard

## About
This is a dashboard built using React JS. it exhibits the power of using third party components. The third party library used for this project is Syncfusion. Syncfusion posseses already built components that are ready to use as long as the the right dependencies are used in the appropriate way. To find out more, visit the documenatation link attached in the resources section.
 

## Components
- The components folder housed reusable react components which were created to be used in this project. The components included a button, header, footer, Navbar, ThemeSettings, Profile, Notifications, ChartsHeader, sidebar etc. Prop drilling was used to determine the properties of the button component on every page which the button was used. React icons were imported and used in each of these components 


## App.js


### Navbar

### Pages


### Charts


### Apps


### Mode and Themes

### Sidebar

- Icons were imported from React-icons
- Link and NavLink were imported from React-router DOM. Tooltip component was imported from Syncfusion popups.
- The sidebar component was built by rendering a div whose height was the entire viewport height, and the width of the div encapsulating it was 18rem. 

- For the heading, The Shopware Icon was used and a span containing the text was placed alongside. In the same div, a button was created and the content of the button was the cancel icon
- Next was the main contents which was separated from the header with a margin top of 10. The Items in the main section were achieved by looping through an array (links) and and rendering details from each item.
- The links array was created in a separate data file and imported at the top. It is an array of pre-populated objects. 
- For each item returned, the item title property is displayed. Under each of these, another loop is eexecuted. The purpose of this loop is to go through each of the returned items properties to the links property (which is an object) and return the values from each links.
- So underneath every Item, the links under them are created. The details of the links shown are the link names and Icons. The icons are imported into the data file from react icons so they are rendered in the sidebar as components on their own.
- Stylings were applied to the the components using tailwind css. Variables were created and the values assigned to these variables were tailwind css styles stored in strings. That way, styles can be rendered conditionally by rendering each variable conditionally. This is especially seen for the navlinks. 


### NavBar


### Global Context


## Resources
- [Syncfusion Documentation](https://ej2.syncfusion.com/react/documentation)