# Neo-Scinapse
A scinapse web client V2 ([DEMO](https://d235qdnm7988kg.cloudfront.net/))

apollo client + nextJS(SSR) + Serverless)

## Specification
- GraphQL(Apollo client)
- NextJS
- Serverless Components

## Getting Started
```
> npm install
> npm start
```

## How to make GraphQL schema file
```
# run local GraphQL server
> npm run start:graphql

# run another terminal
> npm run generate:graphql_types
```

I strongly recommend to turn on at least two terminals. One is for the `npm run dev` and the other is for `npm run start:graphql`.  
Then whenever you make GraphQL Query or Mutation, you can make the type definition by `npm run generate:graphql_types`.  

## To do
- [X] Set apollo.config.js & make TypeScript definitions
- [ ] Set Unit/E2E test environment
- [ ] Set user action tracker (GA + action log)
- [ ] Make & apply pagination example
- [ ] Set proper directory structure strategy with GraphQL
- [ ] Set custom domain in serverless
- [ ] Set deploy process
- [ ] Make neo-scinapse banner to Scinapse
- [ ] Add measurement for the performance
- [ ] Add error tracker
- [ ] Make migration plan
