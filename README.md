# basic_crud_cypress

This repository contains my Cypress project for basic CRUD automation.

## Testing

Testing di repository ini dilakukan di 2 level yaitu:

1. Feature Test (PHPUnit)
2. E2E Test (Cypress)

### Feature Test

Cek file **`phpunit.xml`**: kita pakai custom .env bernama **`.env.testing`**. Tujuannya untuk memisahkan environment testing dan development.

Database yang digunakan untuk project ini adalah MySQL, dengan dua database:

-   **l9** untuk development
-   **testing** untuk testing

Jalankan test dengan perintah:

```bash
php artisan test
```
