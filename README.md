# Is It A Name?
API to check if a string is probably a name.

I have had this come up in a couple different projects. I wanted to make a simple source where I could handle this question. This is certainly a work in progress, but feel free to make a PR.

Checkout the [homepage](https://is-it-a-name.netlify.app/). 

Or use the api
```
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe"}' https://is-it-a-name.netlify.app/api/i
```
