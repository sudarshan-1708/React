# React
Learning react for building projects.


## React Learning Rodemap

### Core topics to learn:
1. Core of react : State or UI manipulation, JSX
2. Component reusability
3. Reusing of components: Props
4. How to propagate change: Hooks

### Additional Addon to React:
1. Router (React doesn't have router) : react-router-dom
2. State Management (React doesn't have state management) : Redux, Redux toolkit, zustand, context api
3. Class based component: Legacy code base
4. BAAS Apps: (backend as service)


## Understand React flow and structure:

react-scrit: actually adds the <script> in html file.

```javascript
function App() {
  return (
    /*
    jsx only accepts to return only one HTML element
    So we wrap the element in either div or fragment<> </>
    So we return this <div> </div> or <> </> as a single element and all the desired elements are wrapped inside this.

    */
    <>  
    <Chai />
    <p>Learning react with vite and chai</p>
    </>
  )
}
```
Note: <> </> is called fragment.
