# Basic CRUD with Cypress E2E Testing

CRUD web application dengan Laravel dan testing otomatis menggunakan Cypress.

## 🚀 Features

-   CRUD User (Create, Read, Update, Delete)
-   Feature tests dengan PHPUnit
-   E2E testing dengan Cypress

## 📋 Requirements

-   PHP 8.1+
-   Composer
-   Node.js & npm
-   MySQL

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

Test files ada di: `/tests/cypress/integration/`

## 📊 Cypress Report with Mochawesome

Untuk menghasilkan laporan testing otomatis dengan tampilan HTML dari hasil Cypress, kita menggunakan **Mochawesome**, lalu menggabungkan semua file JSON menjadi satu report.

### 📦 Install Mochawesome & Merge Tools

```bash
npm install --save mochawesome mochawesome-merge mochawesome-report-generator
```

### ⚙️ Konfigurasi Cypress

Tambahkan di file `cypress.config.js`:

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        charts: true,
        overwrite: false,
        html: true,
        json: true,
        reportDir: 'tests/cypress/reports',
        reportFilename: '[name].html',
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    video: false,
    screenshotOnRunFailure: false,
    videosFolder: "tests/cypress/videos",
    screenshotsFolder: "tests/cypress/screenshots",
    fixturesFolder: "tests/cypress/fixtures",
    e2e: {
        setupNodeEvents(on, config) {
            return require("./tests/cypress/plugins/index.js")(on, config);
        },
        experimentalStudio: true,
        baseUrl: "http://localhost:8000",
        specPattern: "tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "tests/cypress/support/index.js",
    },
});
```

### 🔧 Tambahkan Script di `package.json`

```json
"scripts": {
    "cy:run": "cypress run",
    "report:merge": "npm run clean:report-json && mochawesome-merge tests/cypress/reports/*.json -o tests/cypress/reports/report.json",
    "report:generate": "marge tests/cypress/reports/report.json --reportDir tests/cypress/reports --inline --charts",
    "cy:run:report": "npm run cy:run -- --reporter mochawesome && npm run report:merge && npm run report:generate",
    "clean:report-json": "if exist tests\\cypress\\reports\\report.json del tests\\cypress\\reports\\report.json"
}
```

### 🧪 Jalankan Testing + Generate Report

1. Jalankan test Cypress:

```bash
npm run cy:run -- --reporter mochawesome
```

2. Gabungkan semua hasil test:

```bash
npm run report:merge
```

3. Generate report HTML:

```bash
npm run report:generate
```

4. Atau cukup jalankan semuanya dengan satu perintah:

```bash
npm run cy:run:report
```

Hasil report bisa dilihat di folder: `tests/cypress/reports`
