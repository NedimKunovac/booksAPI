# vue-books-api

A project aimed to retrieve books from an API and list them accordingly, using Vue and Laravel. The backend of the application is in the books_api directory. For the purpose of getting a quick demo of the application, the database.sqlite file is uploaded to the repository as well.

## Running the project

- Before trying to run the application, make sure you have all the needed components configured.

- Clone the repository using the following command:

```
git clone https://github.com/NedimKunovac/booksAPI
```

- Go to the directory of the project and install all of the dependencies:

```
npm install
```

- Run the following command to start up the frontend:

```
npm run dev
```

- Navigate to the books_api directory to be able to start up the backend:

```
cd books_api
```

- Install the project dependencies needed for the backend:

```
composer install
```

- To start up the backend, run the following command:

```
php artisan serve
```