# My personal website and blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/a676f363-f650-480e-b573-8d1e104d2924/deploy-status)](https://app.netlify.com/sites/paullj/deploys)

This repo contains all the code for my website, [paullj.me](https://paullj.me). It uses [Svelte](https://svelte.dev) and the not yet released Svelte Kit for the front end. The content can be edited and is managed by the headless CMS, [Sanity.io](https://sanity.io). The website is deployed as a static website where all the content is pulled from the CMs and baked in. It is then deployed on [Netlify](netlify.com); however it can optionally be rendered server side as well as in a mixed approach.

## Features

- Create content and deploy front end using the CMS
- Fast and responsive design, styled with [TailwindCSS](https://tailwindcss.com)
- Continuous deploying throught development on Netlify
- Static rendering (with option to have dynamic routes)
- Uses new Svelte Kit (framework?)

## Todo

- Make it accessible
- Add captions to images
- Fix instagram embeds
- Add interesting demo on frontpage
- Write more content
- SEO

## Quick start

1. Clone this repository
2. `yarn` install in the project root folder
3. `yarn dev` to start the studio and frontend locally
   - Your studio should be running on http://localhost:3333
   - Your frontend should be running on http://localhost:3000
4. `yarn build` to build to production locally
