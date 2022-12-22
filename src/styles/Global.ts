import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/*Reset*/
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
button{
  cursor: pointer;
  border: none;
  background: transparent;
}
ul, ol, li{
  list-style: none;
}
img{
  max-width: 100%;
}
input, select{
  background: transparent;
  border: none;
}
/*Variables and Global Styles*/
:root{
  --color-primary: #ff577f;
  --color-primary-focus: #ff427f;
  --color-primary-negative: #59323f;
  --grey-4: #121214;
  --grey-4-50: #12121450;
  --grey-3: #212529;
  --grey-2: #343b41;
  --grey-1: #868e96;
  --grey-0: #F8F9FA;
  --success: #3fe864;
  --negative: #E83F5B;
  --white:#FFF;
  --black:#000;

  
  --toastify-color-success: var(--success);
  --toastify-color-error: var(--negative);

  --toastify-icon-color-success: var(--success);
  --toastify-icon-color-error: var(--negative);
  
  --font-family-inter: 'Inter', sans-serif;
  
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  
  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 500;
  --font-weight-4: 400;

  --border-radius-1:50%;
  --border-radius-2: 8px;
  --border-radius-3: 5px;
  --border-radius-4: 4px;
  --border-radius-5: 2px;
  --border-radius-6: 1px;
}

body{
background-color: var(--black);
color:var(--grey-0)
}

`;
