import { Redirect, Route, Switch } from "react-router";
import React, { Suspense } from "react";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {

  const NewQuote = React.lazy(() => import('./pages/NewQuote'));
  const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
  const NotFound = React.lazy(() => import('./pages/NotFound'));
  const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

  return (
    <Layout>
      <Suspense fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      } >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>

    </Layout>
  );
}

export default App;
