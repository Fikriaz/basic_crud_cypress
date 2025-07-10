# 🧪 Basic CRUD with Cypress E2E Testing

This repository contains a basic **CRUD web application** built with Laravel, along with **automated E2E tests using Cypress**.

![Laravel](https://img.shields.io/badge/Laravel-10-red)
![Cypress](https://img.shields.io/badge/Cypress-E2E-green)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) User
- Automated feature tests using **PHPUnit**
- End-to-end UI test using **Cypress**
- Separate environments for development and testing

---

## 🛠️ Installation Guide

### 1. Clone This Repository

```bash
git clone https://github.com/your-username/basic_crud_cypress.git
cd basic_crud_cypress
2. Install PHP Dependencies
bash
Copy
Edit
composer install
3. Install JavaScript Dependencies
bash
Copy
Edit
npm install
4. Configure Environment Variables
Copy and edit the environment files:

bash
Copy
Edit
cp .env.example .env
cp .env .env.testing
Edit both .env and .env.testing with your MySQL credentials.

Example .env:

env
Copy
Edit
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=l9
DB_USERNAME=root
DB_PASSWORD=
Example .env.testing:

env
Copy
Edit
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=testing
DB_USERNAME=root
DB_PASSWORD=
5. Generate Laravel App Key
bash
Copy
Edit
php artisan key:generate
🗄️ Database Setup
1. Create two databases manually via MySQL:
l9 for development

testing for test environment

2. Run migrations
bash
Copy
Edit
php artisan migrate --seed
php artisan migrate --env=testing
▶️ Running the App
Start the Laravel server:

bash
Copy
Edit
php artisan serve
Visit the app at: http://127.0.0.1:8000

✅ Running Tests
✅ Laravel Feature Tests (PHPUnit)
Run unit & feature tests:

bash
Copy
Edit
php artisan test
#Cypress End-to-End Tests
1. Make sure your Laravel app is running:
bash
Copy
Edit
php artisan serve
2. Open Cypress Test Runner:
bash
Copy
Edit
npx cypress open
3. Or run in headless mode:
bash
Copy
Edit
npx cypress run
Test files can be found in:

bash
Copy
Edit
/cypress/e2e/
