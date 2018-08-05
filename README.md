# Schema

```
type Query {
	hello: String
}

schema {
	query: Query
}
```

# Request mapping template

```
{
    "version": "2017-02-28",
    "payload": {}
}
```

# Response mapping template

```
"Hello World"
```

# AppSync.js

You need to get AppSync.js from AWS AppSync management console and place it in the src folder of the project folder.