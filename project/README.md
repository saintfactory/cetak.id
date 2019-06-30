# API Endpoint

| Endpoint | Method Allowed | Description |
| -------- | -------------- | ----------- |
| http://127.0.0.1:8000/api/board/ | `GET`, `POST` | Get all data |
| http://127.0.0.1:8000/api/board/1/ | `GET`, `POST`, `PUT`, `DELETE` | Get single data based on `pk` |
| http://127.0.0.1:8000/signup/ | `POST` | Register new accounts |
| http://127.0.0.1:8000/api/auth/obtain_token/ | `POST` | Get new token |
| http://127.0.0.1:8000/api/auth/refresh_token/ | `POST` | Get new token |

---

# Notes

- Don't forget to install some dependencies
- Before run the server, **highly recommended** to migrate first using `python manage.py makemigrations` and then `python manage.py migrate`