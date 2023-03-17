## The simplest working Express concepts demo?


## Install

Express is the only dependency

```shell
yarn install
npm install  # Might complain due to the yarn.lock file
```

Start with:

```shell
PORT=SomePort# node index.js

# Or for the default port :8080

node index.js

```

## Routes

* localhost:PORT/
* localhost:PORT/middleware
* localhost:PORT/demo
* localhost:PORT/demo/middleware
* localhost:PORT/data
* localhost:PORT/data/a
* localhost:PORT/data/b
* localhost:PORT/data/c
* localhost:PORT/data/<NOT abc>  = 404