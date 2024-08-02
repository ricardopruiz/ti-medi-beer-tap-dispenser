# Introduction

This project emulates a beer dispenser manager, where you can create dispensers, use them and list them.

## How to make it work

First of all, you should have the dockerized backend needed

Then, you should install the dependencies

```
npm install

```

### Usage

You can run the project using

```
npm run dev
```

To check testing running, use

```
npm run test
```

And to generate a coverage test list, you can use

```
npm run test:coverage
```

# Using this project

This project has two separate zones, the public and the admin one.

## Routes

### Public Routes

`/` Shows a public dispenser list, with its status and the last used time in a relative way (1 minute ago, 1 hours ago...) it shows the dispenser status pariodically

`/dispenser/:id` Shows the dispenser. You can hold the button to serve your beer!

`/admin/login` Here you can make login to the application.

### Protected Routes

`/admin` Here is the admin dispenser list, where you can see the dispensers created, theis status, and you can access to a detailed view of that dispensers (the eye button in actions) or open that dispenser directly (the beer button). Also, you can create a new dispenser providing its flow. The endpoint is automatically refreshed to see how users are using the dispensers "in real time", just like the public page.

`/admin/dispenser/:id` This is the detailed view of a beer dispenser. You can see all the interactions of the users, how much is that interactions and the total time that dispenser has been serving beer.

## How to login

If you try to enter to a private route, you will be redirected into the login page if you are not logged before.

A valid user and password is any word in both cases, but the password will be incorrect if you enter an `_`.

After a successful login, you will be redirected again to the page that you tried to visit afer. If you went directly to the login page, you will go to the `/admin` page.

# React + TypeScript + Vite

This project is built with `React`, `ReactQuery`, `Vite`, `Styled-components` and `vitest` frameworks and tools.

In addittion, some libraries are used like `dayjs`to format datetimes, `i18nnext` for internationalitation.
