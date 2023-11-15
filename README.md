# apollo

## Description

A small web app that lets the user register new products as well as visualize them.

## Installation - Backend

You need to install and run the backend first. Once the project is downloaded, follow these steps:

```bash
$ create a postgres database on your local machine
$ cd backend
$ fill the necessary information in a .env file following the example of env-teste
$ npm install
$ npm run migration:run
$ npm run dev
```

## Installation - Frontend

```bash
$ make sure the backend is running!
$ cd frontend
$ npm install
$ npm run dev
```

## Questions

### What would be your first improvements if you had more implementation time?

I would implemente a more rigorous type check both in the backend and the frontend (ex, making sure error handling is good if someone tries to input letters instead of numbers in the price field when adding new products).

### Thinking about your solution, how would maintenance be in case of adding new product categories? What would need to be changed?

Nothing. There is already an endpoint to create new categories. The developer would only need to create a new one through it (sending a post request to /category) and the list of categories would automatically be updated.

### What changes would need to be made to support updates in the product category's discount percentage so that whenever the discount percentage was changed, the new price would be reflected in all products of the same category?

There is probably an easier way to do this but an endpoint that gets all products and all categories and makes an update based on the new discount percentage would probably work. Or maybe some sort of cron job or webhook.
