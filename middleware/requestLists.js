var express = require('express');
var router = express.Router();

var assert = require('assert');
var server = require('cassandra-driver');
require('custom-env').env('dev');

console.log("env :", process.env.HOST, process.env.PORT);

var client = new server.Client({ contactPoints: [`${process.env.HOST}:${process.env.PORT}`], localDataCenter: 'dc1' });
// var client = new server.Client({ contactPoints: [`172.20.107.62:9042`], localDataCenter: 'dc1' });
// var client = new server.Client({ contactPoints: ['172.20.107.167:32773'], localDataCenter: 'dc1' });
// var client = new server.Client({ contactPoints: ['172.20.107.30:32773'], localDataCenter:    'dc1' });
// var client = new server.Client({ contactPoints: ['vmwl5879:32793'], localDataCenter: 'dc1' });


var scenarioDetails, status;

// view the selected scenario, this call will be made on the view scenario button click in scenario tracker module
router.get('/view-scenario/:id', function(req, res){
    console.log('view scenario');
    function execute(query, params, callback) {
        return new Promise((resolve, reject) => {
            client.execute(query, params, (err, result) => {
                if(err) {
                    reject()
                } else {
                    callback(err, result);
                    resolve()
                }
            });
        });
    }

    console.log('api id', req.params.id );
    //Execute the queries
    // var query = 'SELECT user_name, scenario_name, cash_opp_kpi, days_to_pay FROM financeanalytics.scenario';
    // var query = `SELECT user_name, scenario_name, scenario_details FROM cmosgermany.scenario ALLOW FILTERING`;
    var query = `SELECT user_name, scenario_name, scenario_details FROM cmosgermany.scenario where scenario_id=${req.params.id} ALLOW FILTERING`;
    var q1 = execute(query, [], (err, result) => { assert.ifError(err); console.log('The returned data is:' + result.rows[0]); scenarioDetails = result.rows[0]});
    Promise.all([q1]).then(result => {
        console.log('exit', scenarioDetails);
        // process.exit();
        res.send({'scenarioDetails':  scenarioDetails});
        // res.send('id');
    }).catch(err => {
        res.send({'error':  err});
    });
});

// get different scenarios available for the user
router.get('/scenario-tracker/:id', function(req, res){

    function execute(query, params, callback) {
        return new Promise((resolve, reject) => {
            client.execute(query, params, (err, result) => {
                if(err) {
                    reject()
                } else {
                    callback(err, result);
                    resolve()
                }
            });
        });
    }

    console.log('api userid', req.params.id );
    //Execute the queries
    // var query = 'SELECT user_name, scenario_name, cash_opp_kpi, days_to_pay FROM financeanalytics.scenario';
    var query = `SELECT * FROM cmosgermany.scenario where userid = ${req.params.id} ALLOW FILTERING`;
    // var query = `SELECT user_name, scenario_name, scenario_details, scenario_details FROM financeanalytics.scenario where scenario_id=${req.params.id}`;
    var q1 = execute(query, [], (err, result) => { assert.ifError(err); console.log('The returned data is:' + result.rows); scenarioDetails = result.rows});
    Promise.all([q1]).then(result => {
        console.log('exit', scenarioDetails);
        // process.exit();
        res.send({'scenarioDetails':  scenarioDetails});
        // res.send('id');
    }).catch(err => {
        res.send({'error' : err})
    });
});


// save the scenario for the user
router.post('/save-scenario', (req, res) => {

    function execute(query, params, callback) {
        return new Promise((resolve, reject) => {
            client.execute(query, params, (err, result) => {
                if(err) {
                    reject()
                } else {
                    callback(err, result);
                    resolve()
                }
            });
        });
    }

    console.log('request body', req.body);

    var scenario_details = JSON.stringify(req.body.scenario_details);

    console.log('req.body.scenario_details', scenario_details);

    var query = `INSERT INTO cmosgermany.scenario JSON '{
                    "userid" : "${req.body.userid}",
                    "user_name" : "${req.body.user_name}",
                    "scenario_id" : ${req.body.scenario_id},
                    "scenario_name" : "${req.body.scenario_name}",
                    "datetime" : "${req.body.datetime}",
                    "oosrisk" : "${req.body.oosrisk}",
                    "lowrisk" : "${req.body.lowrisk}",
                    "medrisk" : "${req.body.medrisk}",
                    "hsrisk" : "${req.body.hsrisk}",
                    "scenario_details" : ${scenario_details}
                    }';`;

    var q1 = execute(query, [], (err, result) => { assert.ifError(err); console.log('The returned data is:' + result.rows); status = result});
    Promise.all([q1]).then(() => {
        console.log('exit', status);
        // process.exit();
        res.send({'status':  status});
    }).catch((err) => {
        console.log('error', err);
        res.send({'status':  'error'});
    });
});

//View all the scenarios in the table

router.get('/view-all-scenario', function(req, res){
    console.log('inside view all scenario');
    function execute(query, params, callback) {
        return new Promise((resolve, reject) => {
            client.execute(query, params, (err, result) => {
                if(err) {
                    reject()
                } else {
                    callback(err, result);
                    resolve()
                }
            });
        });
    }

    // console.log('api username', req.params.name );
    //Execute the queries
    // var query = 'SELECT user_name, scenario_name, cash_opp_kpi, days_to_pay FROM financeanalytics.scenario';
    var query = `SELECT * FROM cmosgermany.scenario ALLOW FILTERING`;
    // var query = `SELECT user_name, scenario_name, scenario_details, scenario_details FROM financeanalytics.scenario where scenario_id=${req.params.id}`;
    var q1 = execute(query, [], (err, result) => { assert.ifError(err); console.log('The returned data is:' + result.rows); scenarioDetails = result.rows});
    Promise.all([q1]).then(result => {
        console.log('exit', scenarioDetails);
        // process.exit();
        scenarioDetails.map((scenario)=>{
            scenario.datetime = scenario.datetime.toUTCString();
        })
        res.send({'scenarioDetails':  scenarioDetails});
        // res.send('id');
    }).catch(err => {
        res.send({'error' : err})
    });
});

//export this router to use in our index.js
module.exports = router;
