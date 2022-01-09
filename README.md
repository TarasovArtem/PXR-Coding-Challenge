#### Description

##### Task 1: Functional E2E Automation

    Functional automation for web UI testing using Cypress


##### Task 2: Functional API Testing

    Functional automation for API testing using Cypress


### Commands for running tests and files structure

#### Installation

    git clone https://github.com/TarasovArtem/PXR-Coding-Challenge.git

    cd PXR-Coding-Challenge

    npm install


#### Opening Cypress GUI

    npx cypress open 

or 

    npm run cypress:open


#### Run all tests in specific browser and create reports (***Browsers should be installed on your local machine***)

    npm run chrome:report

    npm run firefox:report

    npm run edge:report


#### Test files structure

    ./cypress/integration/functional_API_testing/getPost.spec.js
    ./cypress/integration/functional_API_testing/getUser.spec.js
    ./cypress/integration/functional_API_testing/postRequest.spec.js

    ./cypress/integration/functional_E2E_automation/functional_E2E_testing.spec.js


#### Project Object files structure

    ./cypress/page_objects/functional_API_testing/requests.js
    ./cypress/page_objects/functional_E2E_automation/navigateToPXR.js
    ./cypress/page_objects/functional_E2E_automation/navigation.js
    ./cypress/page_objects/functional_E2E_automation/searchByGoogle.js


#### Reports (***HTML and JSON format files***)

    ./cypress/reports


