# My Angular CRUD project
A
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

This repository contains a comprehensive CRUD (Create, Read, Update, Delete) application developed using the Angular framework. The application allows users to interact with a list of items, providing functionalities for viewing, creating, editing, and deleting items.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
Run `node server.js` to run server.


### Prerequisites

- Node.js
- npm or yarn
- MySQL

### Installation

Clone the repository:

   ```bash
   git clone https://github.com/looppng/19_Angular.git
   cd 19_Angular
   
   Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
   Run `node server.js` to run server on port :3001
   ```

## Database

#### Books Table

- **id**: INT
- **name**: VARCHAR
- **author**: VARCHAR
- **published**: DATETIME
- **liked**: BOOLEAN
- **image**: TEXT
- **description**: VARCHAR
