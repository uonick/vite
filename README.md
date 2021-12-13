# About

Vite + Vue project template

Project contains:

- [Vue 3](https://v3.ru.vuejs.org/) + [Vite](https://vitejs.dev/)
- [Vue Router](https://next.router.vuejs.org/)
- [Vuex](https://next.vuex.vuejs.org/)
- [Axios](https://axios-http.com/)
- [Tailwind](https://tailwindcss.com/)

### Install

- `npx degit uonick/vite my-app-name`
- `cd my-app-name`
- `npm i`

### Development

- Install [Nodejs](https://nodejs.org/en/download/)
- Run `npm install`
- Run `npm start`

### Run

- Dev: Run `npm start` (requires `nodejs`)
- Production: `docker compose up -d --build` (`docker-compose up -d --build` in old Docker versions, requires [docker-compose](https://docs.docker.com/compose/))

### Settings

For the configuration, the main `.env` is taken, then the `.env.local` ignored in git is processed.
