# stock-note-client (FrontEnd)

The project is made with React and uses the API provided by [stock-note project](https://github.com/Emily81926/stock-note).

- **react-dom**
- **semantic-ui** 

## Live DEMO
Please click [here](https://sprightly-melba-edee81.netlify.app/) to go to DEMO website.

## Feature

- User can view the basic stock information before log in, such as basic profile, stock chart and financial chart.
- User can create an account with email and user name.
- User can log in with the account they create, or log in with google account.
- User can view all stock on homepage, and search stock by company name.
- User can click `add to watchlist` button to add a stock in their watchlist.
- User can click `delete from watchlist` button to delete stock from their watchlist. 

## Started
1. Download project to local
```
git clone https://github.com/Emily81926/stock-note-client.git
```
2. Enter stock-note-client
```
cd shop-client
```
3. Install package
```
npm install
```
4. Change API URL(Enter `/src/apis/users.js` and `/src/apis/watchlist.js`)
```
baseURL: 'http://localhost:3001'
```
5. Download [BackEnd project](https://github.com/Emily81926/stock-note) and setting  

## Develop
```
npm run dev
```

## Build
```
npm run build
```

## Test Account
* user account： test1@email.com  
  user password： 12345678




