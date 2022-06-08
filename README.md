<p align="center">
	<img src="plunk-home-value/assets/images/plunk-logo.png" alt="plunk-logo" />
</p>

# Plunk Home Value ticker

This sample code makes it easy to integrate the Plunk Home Value ticker into your webpage's html

<p align="center">
	<img src="readme/plunkHomeValueSnapshot3.png" alt="plunk-home-value-snapshot" />
</p>

# 🌱 Features

- Real-time home valuation
- Daily appreciation
- Optional live updating
- Responsive design for desktop and mobile (breakpoint at 552px)

# ⚙️ API Documentation

- [Plunk Home Value API](https://api.getplunk.com/homevalue/openapi#operation/getHomevalueAddressesSearch)

# 👍 System Requirements

- [Node.Js 16 or higher](https://nodejs.org/en/docs/)
- NPM 6 or higher
- [Express.JS](http://expressjs.com/en/4x/api.html)
- [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [needle](https://www.npmjs.com/package/needle) or other HTTP client
- API key

# 🏡 Getting valuations overview

- The server side code is set up to take a request from the client side with an address parameter
- Currently, that is accomplished through submitting an address in the search bar
- The address goes through a 2 step process on the server to get the home value data from our [Address Search API](https://api.getplunk.com/homevalue/openapi#operation/getHomevalueAddressesSearch)
- First, the address is used to get the home's parcel_id, then, the parcel_id is used to get the home value data seen in the object below

```shell
{
	appreciation_per_second: number,
	value_dollars: number,
	value_date: 'YYYY-MM-DD',
	parcel_id: uuid
}
```

# 🎬 See it in action!

1. Clone the repository (or download the files)

```shell
git clone https://github.com/getplunk/plunk-home-value-sample.git
```

2. Install all dependencies with npm

- cors, dotenv, needle, express, nodemon

```shell
npm install
```

3. Create your .env file and populate it

- You will need your API key to complete this step
- Below shows what will go inside of the .env file
- Make sure your .env file is also in your .gitignore file to conceal API key

```shell
API_ADDRESS_URL="https://api.getplunk.com/homevalue/addresses/search"
API_VALUE_URL="https://api.getplunk.com/homevalue/valuations/"
API_KEY_NAME="apikey"
API_KEY_VALUE="yourKey"
```

4. Check the Node server to make sure you are using the correct Port you intend to use

5. Navigate to the correct localhost in the browser (ex. localhost:3000/plunkHomeValue.html)

6. You should now see a working ticker with live values! 🙌 Try searching a new address!

💡 **Making the request to Plunk's Home Value API on your server eliminates exposing your API key on your public webpage!**

# 💻 Adding the ticker to your own page

1. To use this ticker in your webpage, begin by adding the `plunk-home-value` folder from this repo to the root of your web directory

2. Copy and paste these parts from the `plunkHomeValue.html` file to add the ticker into your webpage:

- Put these in your `<head>` section

  ```shell
  <head>
  	...

  	<link href="/plunk-home-value/plunkHomeValue.css" rel="stylesheet">
  	<script src="/plunk-home-value/plunkHomeValue.js" async defer></script>
  </head>
  ```

- Put the ticker and search form html code wherever you want it placed in your page

  ```shell
  <!-- SNIPPET START -->
  <div class="plunk-home-value-ticker">
  	<div class="plunk-home-value-ticker-box">
        <form id="address-form">
          <input required aria-label='address' type="text" id="address-input" placeholder="Enter address" />
          <button type="submit">Submit</button>
        </form>
  	<div class="plunk-home-value-ticker-box">

  		...

  	</div>
  </div>
  <!-- SNIPPET END -->
  ```

3. Make sure to add the proxy route to your server side code (in the sample file's routes directory)

4. Don't forget to have a use method in your Node server that will require the route if the route is stored in its own separate file

```shell
app.use('/api', require('./routes/home-value'))
```

6. Create your .env file and populate it

- You will need your API key to complete this step
- Below will go inside of the .env file
- Make sure your .env file is also in your .gitignore file to conceal API key

```shell
API_ADDRESS_URL="https://api.getplunk.com/homevalue/addresses/search"
API_VALUE_URL="https://api.getplunk.com/homevalue/valuations/"
API_KEY_NAME="apikey"
API_KEY_VALUE="yourKey"
```

**💡 Some notes**

- You may need to edit the styling of the element where you place this ticker to properly position the ticker in your page
- The search feature is not mandatory if that is not what works best for you
- If you did not place the `plunk-home-value` directory in your website root, you'll need to update the source paths in `plunkHomeValue.css` and `plunkHomeValue.js` to locate it properly

# ⚙️ Parameters

The client side fetch request supports one parameter currently, shown in `plunkhomeValue.js`:

- `address: '108 W Mahan Ave Hazel Park, MI'`
- Our API does a fuzzy match with the address

# 📍 Tips when not using the search feature

- You don't have to use the search feature if that doesn't work with your design
- The important thing to note is that you will still need to determine a way to pass the address into the fetch request being sent to the server side route wev've created
- There are a lot of potential ways to do this depending on your needs and design

# ❤️ Help

Need help implementing? Have suggestions about how we might help to make the ticker work better for you?
Don't hesitate to reach out!

dev-support@getplunk.com
