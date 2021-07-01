# Wonderflow's design language tokens

This repo contains all the design tokens generated from the Wonderflow design language. These tokens are the foundation for our digital products.
## How to use

To use the tokens you have to install the npm package first:

```sh
npm i @wonderflow/tokens
```

based on the platform you're working on, you can import the tokens from the relative platform folder inside **node_modules**. For example if you're working on **web**, you can import the tokens as `JSON` or `CSS` (custom-properties):

**app.js**

```jsx
import tkns from '@wonderflow/tokens/web/tokens.json'

<div style={{color: `hsl(${tkns.color.blue['50']} / 50%)`}} />
```

**app.css**

```css
@import '@wonderflow/tokens/web/tokens.css';

div {
  /* Colors are defined as HSL-4 but without the hsl() notation */
  color: hsl(var(--color-primary-50) / 50%);
}
```

> **NOTE**
>
> You need to use [`postcss-import`](https://github.com/postcss/postcss-import) or [`postcss-easy-import`](https://github.com/TrySound/postcss-easy-import) to import files from node_modules