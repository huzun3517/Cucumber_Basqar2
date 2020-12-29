$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US_01_Citizenships.feature");
formatter.feature({
  "line": 1,
  "name": "Citizenships Functionality",
  "description": "",
  "id": "citizenships-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4116127,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginSteps.navigateToBasqar()"
});
formatter.result({
  "duration": 29148102470,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.enterUsernameAndPasswordAndClickLoginButton()"
});
formatter.result({
  "duration": 4344957017,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "US_01 TC_01 create",
  "description": "",
  "id": "citizenships-functionality;us-01-tc-01-create",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "click on button with button name",
  "rows": [
    {
      "cells": [
        "setup"
      ],
      "line": 12
    },
    {
      "cells": [
        "parameters"
      ],
      "line": 13
    },
    {
      "cells": [
        "citizenship"
      ],
      "line": 14
    },
    {
      "cells": [
        "addbutton"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Send text with inputbox name",
  "rows": [
    {
      "cells": [
        "inputCitizenshipName",
        "orhangoker"
      ],
      "line": 17
    },
    {
      "cells": [
        "citizenshipShortName",
        "ogkr"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "click on button with button name",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Control to verification message",
  "rows": [
    {
      "cells": [
        "containsmesaj",
        "successfully"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "US_07_NotificationSteps.clickOnButtonWithButtonName(DataTable)"
});
formatter.result({
  "duration": 5841432451,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HUSEYIN\u0027, ip: \u0027192.168.2.106\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Faruk_PC\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53912}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0b5b706119f568d0bb3124e3b44341a8\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Pages.Parent.waitUntilClickable(Parent.java:27)\r\n\tat Pages.Parent.clickFunction(Parent.java:43)\r\n\tat Pages.Notifications_Content.findAndClickElement(Notifications_Content.java:184)\r\n\tat StepDefinitions.US_07_NotificationSteps.clickOnButtonWithButtonName(US_07_NotificationSteps.java:20)\r\n\tat ✽.When click on button with button name(US_01_Citizenships.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "US_07_NotificationSteps.sendTextWithInputboxName(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "US_07_NotificationSteps.clickOnButtonWithButtonName(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "US_07_NotificationSteps.controlToVerificationMessage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1354502395,
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
  "duration": 121448,
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
  "line": 7,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.navigateToBasqar()"
});
formatter.result({
  "duration": 7285804292,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.enterUsernameAndPasswordAndClickLoginButton()"
});
formatter.result({
  "duration": 1178497610,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 56448,
  "status": "passed"
});
formatter.after({
  "duration": 636801794,
  "status": "passed"
});
});