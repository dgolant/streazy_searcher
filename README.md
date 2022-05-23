README.md

setting up:

nvm use 14

npm install

* set a maps api key
* add some cookies to cookie-generator
* run `git update-index --assume-unchanged config/` to leave config out of index

to run npx `ts-node -T src/index.ts`. Outputs will go into `output/` folder. To update properties searched for, add their URLs to the property URLs, and any destinations to `destinations` in input.json