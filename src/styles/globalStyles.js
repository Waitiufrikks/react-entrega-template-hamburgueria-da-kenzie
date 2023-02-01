
import { createGlobalStyle } from "styled-components";

export const StyledGlobalStyle = createGlobalStyle`
body {
  font-family:var(--font-family);
}
:root{
  --color-primary:#27AE60;
  --color-primary-2:#93D7AF;
  --color-secondary:#EB5757;

  --color-grey-0:#F5F5F5;
  --color-grey-20:#E0E0E0;
  --color-grey-50:#828282;
  --color-grey-100:#333333;

  --border-radius-default:8px;

  --font-family:'Inter', sans-serif;

  --title-size-1:1.625rem;
  --title-size-2:1.375rem;
  --title-size-3:1.125rem;
  --title-size-4:0.875rem;

  --text-size-default:1rem;
  --text-size-small:0.875rem;

}
`