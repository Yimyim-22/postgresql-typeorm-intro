# PostgreSQL + TypeORM Practice

A simple backend practice project built while learning **PostgreSQL** and **TypeORM** with Node.js.

This project is an introduction to using TypeORM as an ORM with a PostgreSQL database. It focuses on understanding how TypeORM maps JavaScript objects to database tables and how basic CRUD operations work.

## Technologies Used

* Node.js
* PostgreSQL
* TypeORM
* pg (PostgreSQL driver)
* JavaScript

## What I Learned

### PostgreSQL

Before using TypeORM, I practiced PostgreSQL fundamentals, including:

* Creating databases and tables
* Inserting records
* Selecting records
* `WHERE`
* `UPDATE`
* `DELETE`
* `ORDER BY`
* `LIMIT`
* Primary keys
* Auto-incrementing IDs
* Foreign keys and relationships
* Basic `JOIN` queries

### TypeORM

In this project, I learned:

* What an ORM is
* TypeORM `DataSource`
* Entities and `EntitySchema`
* Repositories
* Connecting TypeORM to PostgreSQL
* Creating entities
* `find()`
* `findOne()`
* `create()`
* `save()`
* `delete()`
* Handling records that do not exist
* Using `synchronize` during development

## Current Database

The project currently uses a simple `books` table.

Each book contains:

* `id`
* `title`
* `author`

## CRUD Operations

The repository currently supports:

* **Create** — Add a new book
* **Read** — Retrieve all books or find a book by ID
* **Update** — Modify an existing book
* **Delete** — Delete a book by ID

## Project Structure

```text
entity/
└── Book.js          # TypeORM entity

data-source.js       # PostgreSQL and TypeORM configuration

bookRepository.js    # Database CRUD operations

index.js             # Application entry point and testing
```

## Purpose

This project was created as part of my backend development learning journey to build a stronger understanding of PostgreSQL before moving further into TypeORM and building REST APIs.

The next stage will be connecting TypeORM CRUD operations to an Express.js API and testing the endpoints with Postman.
