import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
  --grayish-blue-color: hsl(220, 15%, 55%);
  --ligth-gray-color: hsl(212, 45%, 89%);
  --white-color: hsl(0, 0%, 100%);
  --dark-blue-color: hsl(218, 44%, 22%);
  }

*{
    font-family: 'Outfit', sans-serif;
    margin: 0;
    box-sizing: border-box;
}

p{
    font-size: 15px;
    font-weight: 400;
    color:var(--grayish-blue-color);
}

html,
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--ligth-gray-color);
    margin: 0;
    padding: 0;
}

`;
