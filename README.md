# Basic CRUD with Cypress E2E Testing

CRUD web application dengan Laravel dan testing otomatis menggunakan Cypress.

## 🚀 Features

- CRUD User (Create, Read, Update, Delete)
- Feature tests dengan PHPUnit
- E2E testing dengan Cypress

## 📋 Requirements

- PHP 8.1+
- Composer
- Node.js & npm
- MySQL

## 🛠️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/basic_crud_cypress.git
cd basic_crud_cypress
```

### 2. Install Dependencies

```bash
composer install
npm install
```

### 3. Setup Environment

```bash
cp .env.example .env
cp .env.example .env.testing
```

Edit `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=l9
DB_USERNAME=root
DB_PASSWORD=
```

Edit `.env.testing`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=testing
DB_USERNAME=root
DB_PASSWORD=
```

### 4. Generate Key & Setup Database

```bash
php artisan key:generate
```

Buat database `l9` dan `testing` di MySQL, lalu:

```bash
php artisan migrate --seed
php artisan migrate --env=testing
```

## ▶️ Running the App

```bash
php artisan serve
```

App berjalan di: http://127.0.0.1:8000

## ✅ Running Tests

### Laravel Tests

```bash
php artisan test
```

### Cypress Tests

**Pastikan Laravel app sedang berjalan**, lalu:

**Interactive mode:**
```bash
npx cypress open
```

**Headless mode:**
```bash
npx cypress run
```

Test files di: `/cypress/e2e/`
