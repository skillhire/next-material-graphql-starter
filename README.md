
## Getting Started

This is a starter project that uses Next.js, Material UI and Apollo client for GraphQL as default settings. Out of the box
this project is designed to setup the basic foundation for a modern website built using react.

## GraphQL

Before starting the project, ensure you have the appropriate GraphQL endpoint and access tokens configured in the apollo client
which is in `apollo/client`. The default apollo client uses an endpoint from [GraphCMS](https://www.graphcms.com) but any
GraphQL server will work. Define your GQL endpoint in the `.env.local` file:

```
NEXT_PUBLIC_GRAPHQL_URL=<GRAPHQL_URI_HERE>
```

Note that environment variables in Next.js must be appended with `NEXT_PUBLIC` for the client to access the variable.

You can customize your Apollo client in the file

```
apollo/client.js
```

GraphQL queries and mutations are stored in the `graphql` folder and a sample query is available. You can access these
queries and run them using Apollo client:

```
 import { useQuery } from '@apollo/client'
 import { QUERY_SAMPLE } from 'graphql/sample'

 ...

 const { data, loading, error } = useQuery(QUERY_SAMPLE)
```

If you need to fetch the query at a later time you can also use `useLazyQuery` instead

```
const [{ data, loading, error }, querySample] = useQuery(QUERY_SAMPLE)
const onClick = () => querySample()
```

If you need to issue a query with parameters, first ensure that your GraphQL query is setup to accept parameters then
include them in your Apollo query

```
const [{ data, loading, error }, querySample] = useQuery(QUERY_SAMPLE)
const onClick = () => querySample({ variables: {
    sortBy: 'name',
    sortDirection: 'desc'
}})
```


## Material UI

This projects incorporates the popular open-source react library Material UI. When using Material UI, it's important to
use JSS as the default styling method since this is included as part of the Material UI library and works well with accessing
the Material UI theme prop.

When using Material UI, never define colors or styles directly, but try to define them in your themes config file and access
them in JSS for any component by accessing the theme prop. For example:

```
const  useStyles = makeStyles(theme => ({
  button: {
    fontSize: 17,
    backgroundColor: 'primary.main'
  }
}
```

Then in your component

```
const MyButton = ({ className, ...props }) => {



  return (
    <Button sx={ sx.button  } />
  )
}
```

If you need to combine styles or have styles that are conditional, use included `clsx` library. In the example above,
you could combine the styles with the className variable injected into the component with:

```
<Button sx={ clsx(className, sx.button) } />
```

Or you could add a style conditional on a value:

```
<Button sx={ clsx(className, {
    [sx.active]: active === true
  })}
>
</Box>
```

With JSS you can also access prop values to dynamically change CSS using values injected from the component:

```
const classes = useStyles({ height: 200 })

const sx = {
  container: {
    height: props => props.height
  }
}
```

For responsive designs, you should take advantage of the `Grid` component for responsive layouts, but if you need to
create responsive designs for custom elements you can access the `theme.breakpoints` variable:

```
button: {
  width: '100%',
  maxWidth: 320px,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%'
  }
}
```

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Run the development server

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
