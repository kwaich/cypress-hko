## About The Project

This project demostrates using Cypress.io to conduct API testing for HKO weather API.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here are some things that you should have to start this project:
* npm
  ```sh
  npm install npm@latest -g
  ```
* node https://nodejs.org/en/download/

### Installation

1. Clone the repo
2. Install NPM packages
   ```sh
   npm install
   ```

### Usage

* Cypress Test Runner (UI)
   ```sh
   npm run cypress:open
   ```
* Runs Cypress tests to completion (CLI)
   ```sh
   npm run cypress:run --spec "cypress/integration/weather.spec.js"
   ```
   
### Reports

Reports are contained in "mochawesome-report" folder, available in both JSON and HTML format.
