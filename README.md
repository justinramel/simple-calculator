# Simple Calculator

My submission to the Equal Experts 
[Simple Calculator Problem](https://equalexperts.github.io/ee-tech-interviews-uk/calculator-problem.html), 
version Number: 5b8d0fd276b6d288905ed2f63a934e057e8feca2.

I am by no stretch of the imagination a designer, I'd usually be working from a Figma design or creating a wireframe. 

For the calculator branding I went for something simple using the background colour and logo from the Equal Experts 
website with the calculator layout from my iPhone.

Due to the time boxed nature of this exercise, there are some shortcomings compared to a 'real' project:
- It works for basic calculations but there are likely bugs
- I've only tested the happy path
- Error handling

## Code
I seperated the calculator logic out into its own reducer so it can easily be tested without React getting in the way.
This has resulted in a nice separation between the logic and the view. 

The core of the logic can be found in the [calculator reducer](/src/components/calculatorReducer.ts).  
The core of the view can be found in the [Calculator component](/src/components/Calculator.tsx).  

## Install
To install and run this project you'll first need to install [Node 16.17. LTS](https://nodejs.org/en/) and the latest
[Yarn package manager](https://yarnpkg.com/).

## Build
```
yarn build
```

## Run

```
yarn dev
```

## Test

```
yarn test

 ✓ src/components/calculatorReducer.test.ts (5)
 ✓ src/components/Calculator.test.tsx (7) 571ms

Test Files  2 passed (2)
     Tests  12 passed (12)
  Start at  00:03:05
  Duration  1.54s (transform 498ms, setup 0ms, collect 407ms, tests 572ms)
```

## Test Coverage

```
yarn coverage

----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |     100 |      100 |     100 |     100 |                   
 Calculator.tsx       |     100 |      100 |     100 |     100 |                   
 calculatorReducer.ts |     100 |      100 |     100 |     100 |                   
----------------------|---------|----------|---------|---------|-------------------
✨  Done in 3.65s.
```

## Online Demo

You can play with a live demo of this code that is deployed [here on Netlify](https://cool-sorbet-6fa1eb.netlify.app/). 

## Screenshot

![Screenshot](screenshot/simple-calculator.png?raw=true "Simple Calculator Screenshot")

## Tech Used

Tech choices are based on what I like to use for side projects, usually because they are fast or giv a good developer
experience.

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Sass](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [React Testing Library](https://testing-library.com/)
