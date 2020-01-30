//************************************************************************************************
// variable initialization************************************************************************
//************************************************************************************************
var test = pm.environment.get("testRailTestsInRun");
if( !test) {
    pm.environment.set("testRailTestsInRun","");
}

//************************************************************************************************
// DEPRECATED !!!
// set access token ******************************************************************************
//************************************************************************************************
//pm.environment.set("token",data.accessToken);

//************************************************************************************************
// set contract number ***************************************************************************
//************************************************************************************************
var contractNumber = data.contractNumber;
if (contractNumber){ 
    pm.environment.set("contract",JSON.parse(data.contractNumber));
    console.log("dataFile/contractNumber: " + contractNumber);
}

//************************************************************************************************
// set parameters ********************************************************************************
//************************************************************************************************
var paymentType = data.paymentType;
if (paymentType){ 
    pm.environment.set("paymentType",data.paymentType);
    console.log("dataFile/paymentType: " + paymentType);
}
var beneficiaryAccount = data.beneficiaryAccount;
if (beneficiaryAccount){ 
    pm.environment.set("beneficiaryAccount",data.beneficiaryAccount);
    console.log("dataFile/beneficiaryAccount: " + beneficiaryAccount);
}
var debtorAccountNo = data.debtorAccountNo;
if (debtorAccountNo){ 
    pm.environment.set("debtorAccountNo",data.debtorAccountNo);
    console.log("dataFile/debtorAccountNo: " + debtorAccountNo);
}
var debtorAccountName = data.debtorAccountName;
if (debtorAccountName){ 
    pm.environment.set("debtorAccountName",data.debtorAccountName);
    console.log("dataFile/debtorAccountName: " + debtorAccountName);
}
var debtorAdrLine = data.debtorAdrLine;
if (debtorAdrLine){ 
    pm.environment.set("debtorAdrLine",data.debtorAdrLine);
    console.log("dataFile/debtorAdrLine: " + debtorAdrLine);
}
var debtorPostalCode = data.debtorPostalCode;
if (debtorPostalCode){ 
    pm.environment.set("debtorPostalCode",data.debtorPostalCode);
    console.log("dataFile/debtorPostalCode: " + debtorPostalCode);
}
var debtorTownName = data.debtorTownName;
if (debtorTownName){ 
    pm.environment.set("debtorTownName",data.debtorTownName);
    console.log("dataFile/debtorTownName: " + debtorTownName);
}
var creditorAccountNo = data.creditorAccountNo;
if (creditorAccountNo){ 
    pm.environment.set("creditorAccountNo",data.creditorAccountNo);
    console.log("dataFile/creditorAccountNo: " + creditorAccountNo);
}
var creditorAgentCountry = data.creditorAgentCountry;
if (creditorAgentCountry){ 
    pm.environment.set("creditorAgentCountry",data.creditorAgentCountry);
    console.log("dataFile/creditorAgentCountry: " + creditorAgentCountry);
}
var currencyCode = data.currencyCode;
if (currencyCode){ 
    pm.environment.set("currencyCode",data.currencyCode);
    console.log("dataFile/currencyCode: " + currencyCode);
}
var endToEndId = data.endToEndId;
if (endToEndId){ 
    pm.environment.set("endToEndId",data.endToEndId);
    console.log("dataFile/endToEndId: " + endToEndId);
}

//************************************************************************************************
// connect to TestRail ***************************************************************************
//************************************************************************************************
pm.globals.set("TESTRAIL_DOMAIN","testrail.ebs.crealogix.net");
pm.globals.set("TESTRAIL_USERNAME","milan.karadeglic@crealogix.com"); 
pm.globals.set("TESTRAIL_APIKEY","Q4MlDw1e70Kxh1g1YPq9-Dg0abDWer.pSWcVWcxO4");
pm.globals.set("TESTRAIL_PROJECTID",8); 
pm.globals.set("TESTRAIL_TITLE","Postman API Tests");

//************************************************************************************************
//global function to determine next day/next working day *****************************************
//************************************************************************************************
var moment = require('moment');
let nextDay = moment().add("days",1).format("YYYY-MM-DD"); //next day in specified format
switch (moment().add("days",1).format("dddd")){
    case "Sunday":
        var nextWorkingDay = moment().add("days",2).format("YYYY-MM-DD");
        break;
    case "Saturday":
        var nextWorkingDay = moment().add("days",3).format("YYYY-MM-DD");
        break;
    default:
        var nextWorkingDay = moment().add("days",1).format("YYYY-MM-DD");
}
pm.globals.set('PrS:nextDay', JSON.stringify(nextDay));
pm.globals.set('PrS:nextWorkingDay', JSON.stringify(nextWorkingDay));

/*
// Define test data, setup configuration per environment
var env = pm.environment.get("envName");
if (env === "MDB-R191-TEST") {
//    var contractNumber = "{{contractNumber}}";
//    var debtorAccountNo = "{{debtorAccountNo}}";
//    var debtorAccountName = "{{debtorAccountName}}";
//    var creditorAccountNo = "{{creditorAccountNo}}";
    } else if (env === "MDB-R191-LAT") {
} else {
    throw new Error("Wrong environment selected, requests are skipped!")
}
//pm.globals.set('PrS:contractNumber', JSON.stringify(contractNumber));
//pm.globals.set('PrS:debtorAccountNo', JSON.stringify(debtorAccountNo));
//pm.globals.set('PrS:debtorAccountName', JSON.stringify(debtorAccountName));
//pm.globals.set('PrS:creditorAccountNo', JSON.stringify(creditorAccountNo));
*/

// Save the object as a variable.
// JSON.stringify will serialize the object so that Postman can save it

//pm.globals.set('PrS:tags', JSON.stringify(tags));
//pm.environment.set("testGroup","Patient Zero") //set environment variable if/when needed

                //pm.response.to.be.ok;         - Status code must be 200
                //pm.response.to.be.error       - Checks 4XX or 5XX
                //pm.response.to.be.serverError - Checks 5XX
                //pm.response.to.be.clientError - Checks 4XX status code

// Save common tests in a global variable
postman.setGlobalVariable("commonTests", () => {
    pm.test("Response must be valid with/with out a body and with proper status code", function () {
        if (["GET","POST","PUT"].indexOf(request.method) > -1) {
            pm.response.to.not.be.error;
            pm.response.to.be.withBody;
            pm.response.to.be.json;
            pm.response.to.have.jsonBody();
            pm.response.to.not.have.jsonBody('error');
            pm.response.to.have.header('Content-Type', 'application/json;charset=UTF-8');
        } else {
            pm.response.to.not.be.withBody;
        }
        switch(request.method){
            case "POST":
                pm.response.to.have.status(201);
                break;
            case "PUT":
                pm.response.to.have.status(200);
                break;
            case "GET":
                pm.response.to.have.status(200);
                break;
            case "DELETE":
                pm.response.to.have.status(204);
                break;
        }        
    });
    //pm.test("Response time is below 1000ms", function () {
    //    pm.expect(pm.response.responseTime).to.be.below(1000);
    //});
});

postman.setGlobalVariable("assertValidCreditorAgent", () => {
    pm.expect(address).to.be.an('object').with.keys('name1', 'name2', 'street', 'city', 'country');
    pm.expect(address.name1).to.be.a('string').and.not.empty;
    pm.expect(address.name2).to.be.a('string').and.not.empty;
    pm.expect(address.street).to.be.a('string').and.not.empty;
    pm.expect(address.city).to.be.a('string').and.not.empty;
    pm.expect(address.country).to.be.a('string').with.lengthOf(2).and.match(/[A-Z]+/);
});

postman.setGlobalVariable("sessionInit", (testSession, sessionName) => {
    //session init section
    console.log(request.name + ", initialization: " + testSession + ", global var: " + sessionName);
    console.log(request.name + ", executing: " + testSession[0]);
    
    // Select first test from session to be executed
    postman.setNextRequest(testSession[0]); 
    testSession.shift();
    if (testSession.length === 0) {
        console.log(request.name + ", test session is empty, unset " + sessionName);
        pm.globals.unset(sessionName);
        console.log(request.name + ", terminate tests execution list");
    } else {
        pm.globals.set(sessionName, testSession);
        console.log(request.name + " for " + sessionName + ", updated list of tests to be executed: " + testSession);
    }
});

postman.setGlobalVariable("sessionNavigate", () => {
    console.log(request.name + ", entering ...");
    if (pm.globals.get("requestsToRun") === undefined){
        console.log(request.name + ", requestsToRun is undefined");
        pm.globals.set("testRailTestCases","");
        console.log(request.name + ", reset global var: testRailTestCases");    
        if (pm.globals.get("testSession") === undefined){
            console.log(request.name + ", testSession is undefined");
            //here >> export list of tests executed
            var tests = pm.environment.get("testRailTestsInRun");
            tests = tests.replace(/C/g, "");
            tests = tests.replace(/ /g, ", ");
            tests = tests.replace(/,,/g, ",");
            console.log("TestRail tests executed executed in this run: " + tests);
            console.log("The end");
            postman.setNextRequest(null);
        } else {
        var testSession = pm.globals.get("testSession");
        console.log(request.name + ", checking what to run: " + testSession[0]);
        postman.setNextRequest(testSession[0]); // Run: GET SWIFT payment
        testSession.shift();
        if (testSession.length === 0) {
            pm.globals.unset("testSession");
            console.log(request.name + ", terminate execution list");
        } else {
            pm.globals.set("testSession", testSession);
            console.log(request.name + ", updated list of tests to be executed: " + testSession);
        }}
    } else {
    var requestsToRun = pm.globals.get("requestsToRun");
    console.log(request.name + ", checking what to run: " + requestsToRun[0]);
    postman.setNextRequest(requestsToRun[0]); 
    requestsToRun.shift();
    if (requestsToRun.length === 0) {
        pm.globals.unset("requestsToRun");
        console.log(request.name + ", terminate requests execution list");
    } else {
        pm.globals.set("requestsToRun", requestsToRun);
        console.log(request.name + ", updated list of requests to be executed: " + requestsToRun);
    }}
});

postman.setGlobalVariable("cleanup", () => {
    const clean = ["requestsToRun", "testSession"];
    for(let i = 0; i < clean.length; ++i){
        pm.globals.unset(clean[i]);
    }
});

postman.setGlobalVariable("testsExecuted", (listOfExecutedTests) => {
    let tests =  pm.environment.get("testRailTestsInRun");
    //console.log("TestRail tests stored in 'testRailTestsInRun': " + tests);
    if (tests.length > 0) {
        tests = tests + " "
    }
    tests = tests + listOfExecutedTests;
    //console.log("TestRail tests to be stored to 'testRailTestsInRun': " + tests);
    pm.environment.set("testRailTestsInRun",tests);
    //console.log("TestRail tests executed so far: " + tests);
});

postman.setGlobalVariable("extractTestCaseIDFromRequestName", () => {
    let n = request.name.lastIndexOf("(");
    return request.name.substr(n + 1, request.name.length - n - 2);
});

postman.setGlobalVariable("schemaValidator", (schema, jsonData) => {
    //old, deprecated schema validationimplementation
    //pm.expect(tv4.validate(jsonData, securitiesSchema)).to.be.true;
    
    //new schema validation implementation
    
    var schemaValidationPassed = true;
    var serviceSchema = pm.environment.get(schema);
    //var jsonData = JSON.parse(pm.responseBody);

    var validationResult = tv4.validateMultiple(jsonData, serviceSchema, true, true);
    for(var i =0; i<validationResult.errors.length;i++){
        console.log("path :"+ validationResult.errors[i].dataPath +" message :"+ validationResult.errors[i].message);  
        //Skipping all "Invalid type" errors as they are expected with current service implementations
        schemaValidationPassed = schemaValidationPassed && (validationResult.errors[i].message.lastIndexOf("Invalid type") > -1);
        //console.log("schemaValidationPassed :" + schemaValidationPassed);
    }    
    return schemaValidationPassed;
}); 