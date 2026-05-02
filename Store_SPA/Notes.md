Tools

- VS Code
- Node.js (min v20)
- Chrome/firefox

JS

- scripting language
- interpreter
- weakly typed
- object based

single threaded
multi threading : async & callbacks

async :

- callbacks
- promises

keypress => request => server => response => suggestion

modules

lib
index.html
index.js
math-lib.js

Node.js

- runtime environment (development)
- dependency management
- package.json : node config file

npm : node package manager
npm init : generates package.json file

npm install library --flags
--flags
--save/-S : default : development & production
--save-dev/-D : development

npm install webpack
npm install webpack-cli -D

^1.0.0 : min 1.0.0 or latest minior release
~1.0.0 : min 1.0.0 or latest patch release
1.0.0 : exact version

React

<p></p>
<test></test>

Virtual DOM : reconcilation
on every data change => a clone of existing JS DOM(3) was created with updated dataset(4)
=> a comparison between the JS DOM & clone was performed
=> determine the changes between the 2 sets
=> apply the changes to the real DOM(1)

npm create vite
y
my-app
react
typescript
cd my-app
npm install
npm run dev

Components
\*\* naming convention : PascalCase

- one component definition per file
- file name must match the component name

src
Demo.tsx

Components

1. smallest reusable entity
2. single responsiblity principle : SRP

Product

- display the data

- fetch the data
- add to cart
- navigation
- wishlist

Page 1
Product : add to cart

Page 2
Product : add to cart & navigate

Page 3
Product : add to cart/wishlist

DESIGN PATTERN : SMART-DUMB COMPONENT
SMART : containerd : logical decision maker
DUMB : components : presentation

SMART : fetch the data from the server & passes it on to the dumb component
DUMB : collects the data provided & displays it

App
ProductList : plist
Product : data

Component communication : PARENT-CHILD
PARENT to CHILD : props (properties)
CHILD to PARENT : props (events)
<img src="image.jpg" alt="image" onclick="func()" />

A : 0 A : 0
B : 1 D : 1 : render  
C : 2 B : 2
C : 3

VS Code extensions

1. error lens
2. paste json as code

Components

- props : data exchange
- state : ui updates
  - state should always be initialized
  - state should be immutable (shallow update)

lifecycle phases

- mounting : onload
- updating : re-render
- unmounting : unload

- stateful
- stateless : default

React hooks : v16.8

- plug & play

useState : stateful
useEffect : lifecycle

class : state, props, lifecycle
function : no state, no lifecycle

components : reusable ui elements
hooks : reusable logic

FORMS
controlled : state => V-DOM
uncontrolled : ref => V-DOM => JS-DOM => document.getElementById

Wrapper : UI
<tag />
<tag>content</tag>

<h1>content</h1>
<p>content</p>

Passing data between components

- props : PARENT-CHILD
- context api : v16
- redux

A
B
C
D
E
