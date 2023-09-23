# API-Automation-Testing-Ticketing-Tier-2-Sociomile

**General Description**  
API Testing Ticketing Tier 2 testing script on Sociomile with Cypress which uses the JavaScript programming language.
    
**How to Run**  
There are two ways to run cypress in the terminal : 
1. npx cypress open
   - This is the command to open the Cypress graphical user interface (GUI).
   - When you run this command, Cypress will open a GUI window that allows you to run and manage tests interactively.
2. npx cypress run
   - This is the command to run Cypress tests in non-interactive mode (headless mode).
   - Non-interactive mode has no user interface and produces output in the terminal or can be integrated with CI/CD tools.    
  
**Commond Cypress Code**
| Code | Detail |
| ------- | ------- |
| describe | To group a series of tests |
| it | To define one single test |
| expect | To make assertions about certain results during testing |
| cy.request | To make HTTP requests directly from within the test |

**Folder Structure in a Cypress Project**  
```
cypress/  
|-- fixtures/  
|   |-- example.json  
|-- e2e/  
|   |-- spec.cy.js  
|-- support/  
|   |-- commands.js  
|   |-- index.js  
|-- cypress.config.js  
|-- package.json  
```

| Name Folder/File | Detail |
| ------- | ------- |
| fixture | To store static or fixture data that may be used in testing |
| e2e | To save test specification files |
| support | To store files containing custom commands or configurations that will be imported by each test. |
| cypress.config.js | The main configuration file for a Cypress project |
| package.json | Configuration files for project dependency management |

