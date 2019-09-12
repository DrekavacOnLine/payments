var newman = require('newman'); 
// require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    TESTRAIL_SUITEID: 630,
    TESTRAIL_DOMAIN: 'testrail.ebs.crealogix.net',
    TESTRAIL_USERNAME: 'milan.karadeglic@crealogix.com',
    TESTRAIL_APIKEY: 'Q4MlDw1e70Kxh1g1YPq9-Dg0abDWer.pSWcVWcxO4',
    TESTRAIL_PROJECTID: 8,
    TESTRAIL_TITLE: 'Postman API Tests',
    collection: require('./tests/DBAN-CH-PSD2-Group-API-integrate-SEPA-AND-SWIFT-payments.postman_collection.json'),
    environment: require('./env/MDB-R191-TEST.postman_environment.json'),
    data: require('./data/MDB-R191-TEST.postman_data.json'),
    reporters: ['html','cli','htmlextra','testrail'],
    reporter : [{ html : { export : './report/index.html'}},{ htmlextra : { export : './report/rpt_ex.html'}}],
    insecure: true, // allow self-signed certs, required in postman too
    timeout: 180000  // set time out
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('collection run encountered an error.');
    }
    else {
        console.log('collection run completed.');
    }
});