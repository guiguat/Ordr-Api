<p align="center">
  <img src="https://github.com/guiguat/ORDR/blob/master/assets/icon.png" alt="ORDR" style="max-width:100%" width="60"></img>
</p>
<h1 align="center">Ordr - Order Management System</h1>
<p align="center">
  Ordr is a fullstack application made with love, Nodejs, React-Native, C# and TypeScript that helps restaurants and employees to sell faster, easily communicate with the kitchen and log all the information about daily revenue of the restaurant.
</p>

# Changes
This repository is a refatoring and transcription, to TypeScript, of the old [Ordr](https://github.com/guiguat/ORDR) API, that have some issues and bugs now solved and also this API is now fully in english for more accessibility

# Installation

**In order to use this software you will need to have Node and NPM installed in your machine**

*To do this go here and download [Node.js](https://nodejs.org/en/download/)* 

After installing Node and NPM, clone this repository:
```bash
git clone https://github.com/guiguat/Ordr-Api
cd Ordr-Api
```

And install the required dependencies:
```bash
npm install
```

To use the database you will need to run the migrations:
```bash
npm run knex:migrate
```

**After that you can run the server locally for development: :+1:**
```bash
npm run dev
```
or you can run it for production purpose:
```bash
npm run prod
```

# How to contribute
Contributions makes the open source community be a awesome place to learn, inspire and create. I appreciate all the contributions made

1) Fork this repository

2) Create a branch with the new feature (git checkout -b feature/newFeature)

3) Commit the changes (git commit -m 'commit message')

4) Push to the new branch (git push origin feature/newFeature)

5) Open a pull request


Made with ♥ by Guilherme Guatura
