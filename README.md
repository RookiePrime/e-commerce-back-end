# E-COMMERCE BACK END [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
A simple back-end for an e-commerce website, for maintaining a database of products.

[link to a walkthrough video](https://drive.google.com/file/d/1j8GRotygr598UQfBFe-tOhbff1kJy1-D/view)

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Questions](#Questions)
- [Code-of-Conduct](#Code-of-Conduct)
- [License](#License)

## Installation
To install this application, follow the below instructions:
    - First, you need to have an IDE installed, such as VSCode.
    - Second, you need to have Git installed. I developed this program using Git version 2.30.0.windows.2.
    - Third, you need to have Node.js installed. I developed this program with Node.js version 14.17.1, and can't be sure it works for older or newer versions.
    - Fourth, you must clone this repository to your local computer. Once you have done so and have completed the above steps, navigate to the directory of the cloned repo on your computer in your terminal and enter the command `npm i` to install all necessary node modules.
    - Fifth, you will need to log into MySQL to create the database for the program. Log in (using the command `mysql -u /username/ -p` (where /username/ is your username) and enter your password. Use the command `source ./db/schema.sql` to create the database.
    - Sixth, you must create a file simply called `.env` in the root directory of the repo. It must have three lines. The first is `DB_NAME='ecommerce_db'`. The second is `DB_USER='/username/'`, where /username/ is the username you access MySQL with. The third is `DB_PW='/password/'`, where /password/ is the password you access MySQL with.
    - Seventh, you will need a program such as Insomnia Core or Postman to make queries to the database.
    - Finally, be aware that the database is empty to start with; you will have to add things to it in order to be able to GET, UPDATE, or DELETE anything. This can be done through the program itself manually, but for testing purposes there is a folder of seed files. Enter the command `npm run seed` to seed the database with test data.

## Usage
This application has no UI. It is purely a back-end database, and will only be accessible via programs that can formulate and send queries to it such as Insomnia Core and Postman. By default, the address to send your queries to will be `http://localhost:3001`. Endpoints for access to the database all begin with `/api`. To access products, it would be `/api/products`. To access categories, it would be `/api/categories`. To access tags, it would be `/api/tags`. To access a specific item in the database, append its id to the end of the route. For example, a call to GET a specific product might look like this: `http://localhost:3001/api/products/5`.

## Questions
If you need to reach me, my GitHub username (and a link to my profile page) is [RookiePrime](https://github.com/RookiePrime) and my email address is [kiefer_8@hotmail.com](mailto:kiefer_8@hotmail.com).


## Code-of-Conduct
### Contributor Covenant
We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.
[Click here to read the full code of conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## License
This software is offered under the MIT License. For more information on conditions of use, [follow this link.](https://opensource.org/licenses/MIT).