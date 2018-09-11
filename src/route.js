import { renderRoutes } from "react-router-config"
import React from "react"
import Loadable from "react-loadable"
import Layout from "./components/layout"
import App from "./App.js"
const Loading = () => "Loading"
const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
)

const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
  </div>
)

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
)

export const routes = [
  {
    component: Layout,
    routes: [
      {
        path: "/",
        exact: true,
        component: App
      },
      {
        path: "/service-test",
        component: Loadable({
          loader: () => import("./routes/ServiceApiExample"), // oh no!
          loading: Loading
        })
      },
      {
        path: "/counter",
        component: Loadable({
          loader: () => import("./routes/Counter-Demo"), // oh no!
          loading: Loading
        })
      },
      {
        path: "/topics",
        component: Loadable({
          loader: () => import("./routes/Topics"), // oh no!
          loading: Loading
        }),
        routes: [
          {
            path: "/topics/:topicId",
            component: Loadable({
              loader: () => import("./routes/Topics/Topic"), // oh no!
              loading: Loading
            })
          },
          {
            path: "/topics",
            component: () => <h3>Please select a topic.</h3>,
            exact: true
          }
        ]
      },
      {
        component: () => <h3>404.</h3>
      }
    ]
  }
]
