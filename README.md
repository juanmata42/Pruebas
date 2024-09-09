# Pruebas
Steps followed:
1. Create a new repository in GitHub.
2. Clone the repository in the local machine.
3. Create new working branches for git developing flow (dev, pre), main works as production.
4. Create both exercises' folders and set node version in both as lts (20.12.0 at the moment).
5. Use create vite@latest to generate the template (I decided on vite because nowadays is way faster and CRA has some known eslint version issues).
6. Installed scss, axios, react-error-bounday, anticons, react-spinners and recharts
7. Included react router dom as if the app was meant to become a project, thus in need of using routes.
8. Created folder structure, cleaned up CRA's default files. Edited tsconfig so as to be able to use absolute paths from src folder.
9. Created app name, icon and color: 

---NameSage---
Name: It's short, memorable, and suggests that the app provides wise or insightful predictions based on a name. It has a nice ring to it and feels fitting for the task of revealing gender, nationality, and age insights from a simple name input.
Icon: An owl, a symbol of wisdom, insight, and knowledge. It's a nice touch to have a wise owl as the app's icon.
Color: Teal (#008080), a mix of blue and green conveys both wisdom (blue) and growth or freshness (green), making it feel intelligent and insightful, which aligns with the app’s purpose.

---COVIDChronicle---
Name: It's easy to pronounce, memorable, and suggests that the app provides a chronological overview of COVID-19 data. It's a fitting name for an app that tracks and displays COVID-19 data over time.
Icon: A calendar represents the historical aspect (daily data) with lines inside that could be both the weeks and line charts, and a virus symbol overlaying it could signify the COVID-19 focus.
Color: Deep Red (#D32F2F): Red is often associated with health emergencies and alerts, making it relevant for a COVID-related app. It conveys urgency and seriousness.

10. Added css reset and normalize to remove default browser styles and cross-browser inconsistencies.
11. Added routing to the app, with a home page and an error page.
12. Created a reusable error boundary component to catch errors in the app.
13. Added a config file to store the API base URL and the environement. In a real project, this file would be accessed in the pipeline and modified for non developing environments accordingly.
14. Added basic styles and style files order to the app, including a global style file and a theme file for colors and fonts.
15. Added eslint for error checking and code formatting, to impose a code style and avoid errors (especially necessary if there was more than one developer)
16. Added redux to handle the state of the app, with a store. Added custom hooks to access the store and dispatch actions. Handling loading state.
17. Added a very simple header, just a logo and a title. In a real project, this would turn into a navbar and in mobile, probably it would move to the bottom.
18. The loader in NameSage is a hashtag, since it's a symbol that is often associated with names. In COVIDChronicle, it's a grid with growing dots, something that can be associated to a calendar and a common representation of the spread of a virus in a map.


Suggested improvements:
1. Previous design work done by a real designer and a figma guide. 
2. I created seeds in the default constants for what could become an internationalization system. I believe this should be necessary in both projects, but specially in the first one considering its purpose. Depending if there is a company api for internationalization, this could be achieved by api calls for the literals or by setting them to the state, maybe through redux.
