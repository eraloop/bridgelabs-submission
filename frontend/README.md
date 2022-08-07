# Login, Register and Logout

Use the endpoints from [this API](https://simplor.herokuapp.com/) to perform login, register and logout.

#### Register endpoint: api/user/register/

```json
{
  "email": "",
  "first_name": "F N",
  "last_name": "L N",
  "phone": "234456789",
  "password": "JHJGHJ7838843UIR",
  // Note avatar is a file upload passed as multipart/form-data
  "avatar": "/media/categories/selected-image.png"
}
```

> **Note**: The image field avatar is a file upload passed as multipart/form-data. See an example using postman [here](../../images/upload.png).

#### Login endpoint: api/user/login/

```json
{
  "email": "test@email.com",
  "password": "JHJGHJ7838843UIR"
}
```

#### Logout endpoint: api/user/logout/

```json
{
  "refresh_token": "refresh_token provided by api"
}
```

## Our Expectations:

- Host the web app on a free hosting provider
- Simple pages performing the mentioned actions

> > Estimated Time: 1 Week

#### The most important aspect of the tasks is how you document your work, provide setup instructions and share your thoughts with us about the development process including why you made specific decisions.
