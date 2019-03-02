![PGA Logo](./src/logo.svg)

# PGA Admin &middot; admin.pga.org

> React App for [admin.pga.org](https://admin.pga.org)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find the most recent version of the docs [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Getting started

Before you begin make sure you've got the [Prerequisites](#prerequisites) covered.


You can get started by cloning the repo:
```shell
git clone git@github.com:pgahq/admin-pga-org.git
cd admin-pga-org
```

Create your local `.env.local` file:
```shell
cp .env.example .env.local
```

and fill it out appropriately.

Add `127.0.0.1 admin.pga.local` record to `/etc/hosts`

Start the app by running:
```shell
npm run start
```

This should open the app at [`http://localhost:4000/`](http://localhost:4000/)

## Developing
🚧

<a name="prerequisites"></a>
### Prerequisites

Before you begin make sure you have already set up [PGA API v3](https://github.com/pgahq/api-v3) locally.

```shell
git clone git@github.com:pgahq/api-v3.git
cd api-v3
```

Once you got that launch an app container, and `SAM Local` by running:

```shell
cd docker
./up
npm run sam
```

That should start the `graphql` endpoint, confirm by opening [`http://localhost:3000/graphql?query={events(first:10){edges{node{name,id}}}}`](http://localhost:3000/graphql?query={events%28first:10%29{edges{node{name,id}}}}) — you should be able to see the response of the following `qraphql` query:

```
{
  events(first: 10) {
    edges {
      node {
        name
        id
      }
    }
  }
}
```

### Building

🚧

### Deploying

🚧
