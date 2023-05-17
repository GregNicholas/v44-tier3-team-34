import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    /* 1-9 are Josh Comeau css reset: */
    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
    box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
    margin: 0;
    }
    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
    height: 100%;
    }
    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }
    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }
    /*
    7. Remove built-in form typography styles
    */
    input, button, textarea, select {
    font: inherit;
    }
    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }
    /*
    9. Create a root stacking context
    */
    #root, #__next {
    isolation: isolate;
    }

    header ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
    }

    .container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1.25rem 1rem 1.25rem;
    text-align: center;
    color: var(--primary-blue);
    }
`;
 
export default GlobalStyle;