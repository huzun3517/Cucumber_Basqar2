$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US_14_Dismissal Articles.feature");
formatter.feature({
  "line": 1,
  "name": "Dismissal Articles  Functionality",
  "description": "",
  "id": "dismissal-articles--functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5977194,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.navigateToBasqar()"
});
formatter.result({
  "duration": 9287175574,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.enterUsernameAndPasswordAndClickLoginButton()"
});
formatter.result({
  "duration": 5415296668,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 120308,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "US_14 TC_01  Dismissal Articlespage",
  "description": "",
  "id": "dismissal-articles--functionality;us-14-tc-01--dismissal-articlespage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Click on the element in the Dismissal Articles page content class",
  "rows": [
    {
      "cells": [
        "humanResourcess"
      ],
      "line": 11
    },
    {
      "cells": [
        "setup"
      ],
      "line": 12
    },
    {
      "cells": [
        "dismissalArticles"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should Dismissal Articles successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "US_14_DismissalArticlesSteps.clickOnTheElementInTheDismissalArticlesPageContentClass(DataTable)"
});
formatter.result({
  "duration": 4734947968,
  "status": "passed"
});
formatter.match({
  "location": "US_14_DismissalArticlesSteps.userShouldDismissalArticlesSuccessfully()"
});
formatter.result({
  "duration": 1824399472,
  "status": "passed"
});
formatter.after({
  "duration": 1567104165,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 447021,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid username and password",
  "description": "",
  "id": "login-functionality;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.navigateToBasqar()"
});
formatter.result({
  "duration": 12986555162,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.enterUsernameAndPasswordAndClickLoginButton()"
});
formatter.result({
  "duration": 15776758106,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 97501,
  "status": "passed"
});
formatter.after({
  "duration": 1641604987,
  "status": "passed"
});
});