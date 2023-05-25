npx create-react-app rm-react-ts-proj-2-redux --template typescript

npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0

Search from: http://registry.npmjs.org/-/v1/search?text=react

Note: NPM Packages will be called "Repositories" in this whole course, to avoid confusing with TS reserved word "package"

(A) Redux Store aka Reducer - "The State"
Standard Redux Store approach : has 1 slice / piece of state called Repos
    - produced by a ReposReducer
    - which will maintain 3 properties recvd by this reducer
        data : list of repos we get back from npm -> list on screen
        loading : bool -> spinner on screen
        error ->  err on screen if fetch fails

    reducer.ts : Reducer will receive args : a copy of the last state
    And an action that we need to process.
    And return a state with these 3 properties.

(B) Action Creators 
1 ActionCreator: SearchRepos(searchTerm)
This action creator dispatch one of a variety of actions into the reducer

(C) Actions we're going to send into the Reducer
SearchRepos => we've made a request thats pending.
SearchReposSuccess. Payload: e.g. ['react', 'react-dom'] - the results
SearchReposError, payload: 'request failed'
[Each Action has type and payload as properties]

(D) ActionTypes to identify each of those actions 
'search_repos'
'search_repos_success'
'search_repos_error'

(E) Folder structure:
(i) components
    App.tsx
    ReposList.tsx
(ii) redux-stuff
    reducers
    middleware
    action-creator
-> Create a single index.ts which includes all of the redux-stuff, easy to import into the components!