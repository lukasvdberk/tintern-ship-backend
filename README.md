# Tintern ship backend
An application to find you next internship. Tinder for internships.

# Installation
This project uses NodeJS. Make sure you have that installed alongside yarn (npm install -g yarn)

Then install all the dependencies.
```
yarn install
```

Then copy the .example.env and name .env.
Then fill out the fields in the .env file (we use mongo db so make sure that you also have that setup).

Then after that import all data from the data/ folder.

Then you can run the project with.
```bash
yarn run dev
```

# Production
- Run `git pull`
- Run `yarn install`
- Then `pm2 stop "Tinternship backend"`
- Then `yarn pm2` to start the production server
- You can check the logs with pm2 logs