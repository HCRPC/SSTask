* HOW TO RUN TESTS ON LOCAL.

- Clone the project from Git and open it in one of the IDE
- open terminal and run 'npm init playwright@latest'
- run npx playwright test for all for all test
- run npx playwright test <TestName>.spec.js

* HOW TO RUN TESTS ON CI.

- Due to issue in Build/Pipelines/ verify my account  at Gitlab project folder, 
  not able to run in CI,  but .gitlab-ci.yml is already prepared for the job.
- .github/workflows/playwright.yml is already prepared to run tests CI in GITHUB 

* HOW TO RUN TEST in DOCKER.

- Dockerfile is prepared
- run 'docker build -t sstasks .'
- run 'docker run sstasks' 
