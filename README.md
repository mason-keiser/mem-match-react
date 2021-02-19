# mem-match-react
A repository to hold a memory match game developed using React Hooks

* Link: https://mm.masonkeiser.com/

# Technologies Used
* React.js
* React Hooks
* Node.js
* Express
* PostgreSQL
* Webpack 4
* HTML 5
* CSS 3
* Bootstrap 4
* AWS EC2
# Features
* User can login / signup to game
* User can play match card images with one another until total matches is reached
* User can keep track of total number of wins saved to their account
* User can change their user icon by updating database info 
# Development
## System Requirements
* Node.js 10 or higher
* NPM 6 or higher
* PostgreSQL 10 or higher
# Getting Started
1. Clone this repository:
```
git clone https://github.com/mason-keiser/mem-match-react.git
```
2. Locate cloned repository: 
```
cd mem-match-react
```
3. Install all dependencies with NPM:
```
npm install
```
4. Start postgreSQL server in terminal:
```
sudo service posgresql start
``` 
5. Create database that you will be using for the site:
```
createdb memMatch
```
6. Import database to PostgreSQL:
```
npm run db:import
```
7. Open a second terminal; navigate to project directory, start pgweb:
```
pgweb --db=memMatch
```
8. Start the project (in another terminal). You can view the application by opening http://localhost:3000 in your browser:
```
npm run dev
```

# Figma (Design)

https://www.figma.com/file/F70jkl61w14ssG1o0SUPHk/Under-The-Sea?node-id=0%3A1&frame-preset-name=Desktop
