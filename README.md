# Pruebas

## Launching locally:
1. Clone the repository.
2. Run `npm install` in both folders.
3. Run `npm run dev` in both folders.
4. Open the browser at `localhost:3000` for **NameSage** and `localhost:3001` for **COVIDChronicle**.
   > **Note**: Launch the backend too, or else it won't work.  
   > I suggest checking it with your phone as well since it was developed for both desktop and mobile.

## Developing Steps Followed:
1. Create a new repository in GitHub.
2. Clone the repository to the local machine.
3. Create new working branches for Git development flow (`dev`, `pre`); `main` serves as production.
4. Create both exercises' folders and set Node.js version to `lts` (20.12.0 at the moment).
5. Use `create vite@latest` to generate the template. (I chose Vite because it’s faster, and CRA has some known ESLint version issues.)
6. Install `scss`, `axios`, `react-error-boundary`, `ant-design/icons`, `react-spinners`, and `recharts`.
7. Include `react-router-dom` for future expansion, as the app may require routes.
8. Create folder structure, clean up CRA's default files, and edit `tsconfig` to allow using absolute paths from the `src` folder.

### Project Overview:
#### **NameSage**
- **Name**: Short, memorable, and suggests that the app provides wise or insightful predictions based on a name. The name feels fitting for revealing gender, nationality, and age insights from a simple input.
- **Icon**: An owl, symbolizing wisdom, insight, and knowledge.
- **Color**: Teal (#008080), a mix of blue and green that conveys wisdom (blue) and growth (green), aligning with the app's purpose.

#### **COVIDChronicle**
- **Name**: Memorable and suggests a chronological overview of COVID-19 data.
- **Icon**: A calendar representing historical (daily) data, with lines inside symbolizing both weeks and line charts, and a virus overlay to signify the COVID-19 focus.
- **Color**: Deep Red (#D32F2F), associated with health emergencies, conveying urgency and seriousness.

### Additional Steps:
9. Add `css-reset` and `normalize.css` to remove default browser styles and cross-browser inconsistencies.
10. Set up routing in the app with a home page and error page.
11. Create a reusable error boundary component to catch errors in the app.
12. Add a config file for API base URL and environment settings. In production, this would be adjusted during the pipeline process.
13. Implement basic styles and structure for global and theme-specific styling (colors, fonts).
14. Install and configure ESLint for code formatting and error checking.
15. Set up Redux for state management, including custom hooks to access the store and dispatch actions. Also handle loading states.
16. Create a simple header with a logo and title. In a full-fledged app, this could evolve into a navbar, and for mobile, it would likely move to the bottom.
17. Customize the loader:
    - **NameSage**: A hashtag symbol, often associated with names.
    - **COVIDChronicle**: A grid with growing dots, symbolizing a calendar or virus spread visualization.

### Component Development:
18. Create charts, tables, and card components to showcase possibilities for future feature additions. Collaborate with a designer and product owner to determine key data presentation strategies.
19. Complete the second exercise.
20. Choose pastel colors for the charts to promote a health-oriented and calming visual experience, avoiding stereotypical blue/pink for gender colors.
21. Remove `ant-design/icons` from the second exercise as they were ultimately unnecessary.
22. Use a small Unicode flag icon library to display country flags, improving accessibility compared to using country IDs.

### Project Completion:
23. Finish the first exercise.

## Auditing Results (Google Lighthouse):
### **NameSage**:
> _(Results not provided)_

### **COVIDChronicle**:
- **Performance**: 65 _(extensions affected page load performance)_
- **Accessibility**: 94
- **Best Practices**: 96
- **SEO**: 83

## Suggested Improvements:
1. Previous design work by a real designer and a Figma guide would enhance UX and UI.
2. Consider internationalization, particularly for **NameSage**, which is globally relevant. Implement seeds for internationalization in the default constants. This could be achieved via API calls or Redux state management.
3. Unit testing is a must for a real project, though there was no time for it here. I would use Jest and React Testing Library. Integrating SonarQube in the pipeline is also a good idea.
