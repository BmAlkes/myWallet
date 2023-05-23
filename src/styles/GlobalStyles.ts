import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body, html, #root{
    font-family: 'Roboto', sans-serif;
    height: 100%;
}

button, input{
    border:0;
    outline: 0;
}
button{
    cursor:pointer;
}


`;
