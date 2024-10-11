Jauntster

## Project description

Self-Guided Tour Marketplace is a web application designed to connect travelers with unique, self-guided tours created by local experts. The platform allows users to explore, purchase, and embark on tours at their own pace, providing a flexible and personalized travel experience. The application features a user-friendly interface, secure payment processing, and a variety of tools for tour creators to manage and promote their offerings.

## Features

#### Authentication
The application provides a secure authentication system that allows users to create accounts, log in, and manage their profiles. Users can sign up using their email addresses or through third-party services like Google OAuth. This ensures that only authorized users can access certain features of the platform, such as creating and purchasing tours.

#### Creating Tour
Tour creators can easily design and publish their own self-guided tours using an intuitive interface. The tour creation process includes adding descriptions, images, audio guides, and setting the tour's price. Creators can also specify points of interest and provide detailed information about each stop on the tour.

#### Exploring Tour with Filtering
Users can explore a wide variety of tours available on the platform. The application offers advanced filtering options, allowing users to search for tours based on location, price, duration, and user ratings. This helps users find the perfect tour that matches their interests and preferences.

#### Buying Tour, Using Stripe
The platform integrates with Stripe to provide a seamless and secure payment experience. Users can purchase tours using their credit or debit cards. Stripe handles all payment processing, ensuring that transactions are safe and reliable. Once a tour is purchased, users gain immediate access to all its content.

For texting purposes you can use card 4242 4242 4242 4242 with valid cvv and expiration date on tested stripe

#### Play Tour, Using Google Maps
The application leverages Google Maps to provide an interactive and immersive tour experience. Users can follow the tour route on the map, view their current location, and get directions to the next point of interest. This feature enhances the self-guided tour experience by providing real-time navigation and location-based information.

#### Control Your Created Tours
Tour creators have access to a dedicated dashboard where they can manage their published tours. This includes viewing sales statistics, user feedback, and earnings. Creators can also update tour content, adjust pricing, and promote their tours to reach a wider audience.

#### Edit Tours
Tour creators can easily edit their existing tours to keep the content up-to-date and relevant. The editing tools allow creators to modify descriptions, add or remove points of interest, update images, and change audio guides. This ensures that tours remain accurate and engaging for users.

#### Delete tour
Delete your you want

#### Admin pannel
Review all created tours before publishing

---

## File Structure

```
├── app/
│   ├── api/               # Логика за свързване с външни API
│   ├── app/               # Главните страници и компоненти на приложението
│   ├── utils/             # Помощни функции за проекта
├── .env                   # Конфигурационен файл за среда
├── .eslintrc.json          # Настройки за ESLint за проверка на кода
├── .gitignore              # Файлове и директории, които Git игнорира
├── jsconfig.json           # Настройки за JavaScript модулите и импорти
├── next.config.mjs         # Конфигурационен файл за Next.js
├── package-lock.json       # Автоматично генериран файл за контрол на зависимостите
├── package.json            # Списък със зависимости и скриптове за проекта
├── postcss.config.js       # Конфигурация за PostCSS
├── tailwind.config.js      # Конфигурация за Tailwind CSS
├── README.md               # Инструкции за проекта
├── docs/                   # Допълнителна документация
├── node_modules/           # Инсталирани зависимости (автоматично генерирани)
```

## Команди за стартиране на проекта

В **`package.json`** са дефинирани следните скриптове:

- **`npm install`** – Инсталира всички зависимости, дефинирани в `package.json`.

  ```bash
  npm install
  ```

- **`npm run dev`** – Стартира приложението в режим на разработка. Приложението ще бъде достъпно на `http://localhost:3000`.
  
  ```bash
  npm run dev
  ```

- **`npm run build`** – Създава production билд на приложението.

  ```bash
  npm run build
  ```

- **`npm run start`** – Стартира вече създадения production билд.

  ```bash
  npm run start
  ```

- **`npm run lint`** – Проверява кода за грешки и стилови несъответствия чрез ESLint.

  ```bash
  npm run lint
  ```

For starting project after successfully cloned reposutiry and navigated to Self-Guided-Tour-FE folder follow this commands:

```bash
  cd app
```

```bash
  npm install
```

```bash
  npm run dev
```

The program should start on dev mode, connected with dev BE app, if you want to start the app, connected with the production BE use this commands

```bash
  cd app
```

```bash
  npm install
```

```bash
  npm run build
```

```bash
  npm run start
```

'npm install' should be runned only first time and every time after new package added
---

## Пакети и библиотеки

### Technologies Used

The Self-Guided Tour Marketplace leverages a variety of modern web technologies to provide a robust and user-friendly experience. Here are the key technologies used in the project:

#### Next.js
Next.js is a powerful React framework that enables server-side rendering and static site generation. It provides a comprehensive solution for building fast and scalable web applications with features like automatic code splitting, optimized performance, and easy API routes.

#### React
React is the core library used for building the user interface. It allows for the creation of reusable UI components and efficient state management, making the development of complex and interactive web applications more manageable.

#### Google Maps
The application integrates Google Maps to provide an interactive and immersive tour experience. Users can follow tour routes, view their current location, and get directions to points of interest, enhancing the overall self-guided tour experience.
More info here: [Google Maps](/app/app/components/GoogleMaps/README.md)

#### Google Auth
The application integrates Google Auth to provide a secure and seamless authentication experience. Users can sign in using their Google accounts, which simplifies the login process and enhances security. This integration ensures that user data is protected and allows for quick and easy access to the application's features.
More info here: [GoogleAuth](/docs/GoogleAuthReadme.md)

#### Axios
Axios is a popular library for making HTTP requests. It is used in the project to connect with external APIs, handle data fetching, and manage asynchronous operations, ensuring smooth communication between the client and server.

#### Stripe
Stripe is integrated into the platform to handle secure payment processing. It allows users to purchase tours using their credit or debit cards, providing a seamless and reliable payment experience.
More info here: [Stripe Readme](/docs/StripeReadme.md)

#### Tailwind CSS
Tailwind CSS is a utility-first CSS framework used to style the application. It offers a highly customizable and responsive design system, enabling developers to build modern and consistent user interfaces quickly.

#### Sass
Sass is a CSS preprocessor that adds advanced features like variables, nested rules, and mixins to standard CSS. It is used in the project to write more maintainable and scalable stylesheets, improving the overall development workflow.

These technologies collectively contribute to the functionality, performance, and user experience of the Self-Guided Tour Marketplace, making it a robust platform for both tour creators and travelers.

### Dependencies (Зависимости)

- **@googlemaps/js-api-loader** (`^1.16.6`): Лека библиотека за зареждане на Google Maps JavaScript API в уеб приложения.
- **@react-oauth/google** (`^0.12.1`): Опростена интеграция с Google OAuth за React приложения.
- **@stripe/react-stripe-js** (`^2.7.3`): React компоненти за интеграция със Stripe.
- **@stripe/stripe-js** (`^4.1.0`): Основната Stripe JavaScript библиотека за обработка на плащания.
- **axios** (`^1.6.8`): Библиотека за HTTP заявки, използвана за свързване с API-та.
- **formik** (`^2.4.6`): Лесно използване на форми в React с валидация и управление на състоянието.
- **framer-motion** (`^11.3.17`): Библиотека за анимации в React.
- **jsonwebtoken** (`^9.0.2`): Използва се за подписване и проверка на JSON Web Tokens (JWT).
- **next** (`^14.2.3`): Фреймуърк за създаване на сървърно рендирани React приложения.
- **prop-types** (`^15.8.1`): Библиотека за валидиране на типове пропс в React компоненти.
- **react** (`^18`): Основната библиотека за изграждане на потребителски интерфейси.
- **react-dom** (`^18.3.1`): DOM специфична част на React, необходима за уеб приложения.
- **react-hook-form** (`^7.52.0`): Алтернатива на Formik за управление на форми в React.
- **react-player** (`^2.16.0`): Лесен за използване медиен плеър за React.
- **react-slick** (`^0.30.2`): React компонент за създаване на слайдъри.
- **react-tooltip** (`^5.27.0`): Библиотека за добавяне на tooltips към React компоненти.
- **sharp** (`^0.33.5`): Инструмент за обработка на изображения (изрязване, компресиране и т.н.).
- **slick-carousel** (`^1.8.1`): Слайдър библиотека, използвана от react-slick.
- **stripe** (`^16.6.0`): Node.js SDK за Stripe.
- **uuid** (`^10.0.0`): Генерира уникални идентификатори (UUID).
- **yup** (`^1.4.0`): Схемна валидационна библиотека за формуляри.

### DevDependencies (Зависимости за разработка)

- **autoprefixer** (`^10.4.19`): Добавя префикси към CSS за поддръжка на различни браузъри.
- **eslint** (`^8`): Инструмент за анализ на кода, който намира и поправя проблеми.
- **eslint-config-next** (`14.2.3`): Предварителна ESLint конфигурация за проекти с Next.js.
- **postcss** (`^8.4.38`): Инструмент за трансформиране на CSS с плъгини.
- **sass** (`^1.77.1`): Препроцесор за CSS, който добавя функционалности като променливи и вложеност.
- **tailwindcss** (`^3.4.4`): CSS фреймуърк за бързо създаване на потребителски интерфейси.

---
