# Usage

1. install dependencies by using `pip install -r requirements.txt`
2. Make migrations first `manage.py makemigrations` and `manage.py migrate`
3. Then run with command `manage.py runserver`
4. Accessible API go through `http://127.0.0.1:8000/api/users/` for viewing the list of user that already logged in
5. To see login API go through `http://127.0.0.1:8000/api/rest-auth/login/`
6. You must make a superuser first to test the API by using `manage.py createsuperuser`
