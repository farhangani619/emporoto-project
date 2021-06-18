
# Node Authentication

A simple user login management system with Authentication

# Prerequisites
node and npm

## API Reference



| Method    | URI            | Description                            |
| :-------- | :-------       | :-------------------------             |
| `POST`    | `\users`       | creates  new users                     |
| `GET`     | `\users`       | Read all the  users                    |
| `POST`    | `\users\login` | Login the user and sends back the genereated token from response body  |
| `GET`     | `\users\me`    | Reads the profile of logged In user    |
| `PATCH`   | `\users\me`    | update the data of the logged In user  |
| `DELETE`  | `\users\me`    | Deletes the logged in user             |


  # Packages Used
  1. Express
  2. Mongoose
  3. Mongodb
  4. Jsonwebtoken
  5. Validator
  6. Bcrypt
