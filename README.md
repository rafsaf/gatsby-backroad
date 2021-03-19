# Gatsby Backroad project

1. **One of the projects for the development of css & web dev & etc. skills. Currently deployed on netlify [rafsaf-gatsby-backroad.netlify.app](https://rafsaf-gatsby-backroad.netlify.app/)**

2. **Created using [Gatsby.js](https://www.gatsbyjs.com/).**

3. **This project uses basic css with an emphasis on building responsive layouts with flex:**

   ```css
   /* css */
   /* row (parent element) */
   /* items (child element) are inside a row, 2col layout */
   @media screen and (min-width: 768px) {
     .row {
       display: flex;
       justify-content: space-between;
       flex-wrap: wrap;
     }
     .item {
       flex: 0 0 calc(50% - 2rem);
     }
   }
   /* Another use cases like flex-grow, flex-shrink, 2col within some flex row */
   .item-1 {
     flex-grow: 1;
   }
   .item-2 {
     /* etc */
   }
   ```

4. **CSS Modules**

5. **Link to HTML & CSS course [www.johnsmilga.com](https://www.johnsmilga.com/).**
