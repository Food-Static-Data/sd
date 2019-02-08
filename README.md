# cards-wrapper-component

This is a separated module, related with [recipe-antd](https://github.com/ChickenKyiv/recipe-antd) repository.

Main goal is to separate development process and have a separated place, where we can develop the logic of default components and then use them into our.


We trying to incorporate two major tasks:
1. Have a separated place for a basic cards components that have export feature, can be easily tested and adjusted for our needs
2. Make it work and connect with a different sources - aka recipes objects, grocery lists objects
3. Keep code quality at good level


Stretch goals:
- [ ] move components from main recipe-antd repository
- [ ] import them well and export them
- [ ] first npm publish/build
- [ ] connect/install this package at recipe-antd and maybe at showcase project too.
- [ ] use components from this package instead of local versions. Recipe-antd should be totally depending on cards from this package
- [ ] next stage of changes. When Recipe-antd will gain some 'meat' of code - it'll add more requirements/ use cases to this package. it'll help us to identify the problem that can be solved here. Solve that problems and ship another version of this package.

- [ ] create a set of 10-12 tasks related to future releases
- [ ] move this repository into a next level. figure out how?

- [ ] separated components
- [ ] separated and only HOC is connected to antd
- [ ] will it work with our Meal Calendar repository as well?


<!--
[![Build Status](https://travis-ci.org/GroceriStar/showcase.svg?branch=master)](https://travis-ci.org/GroceriStar/showcase)
-->
