const pruebajson = require('../reports/cucumber-htmlreport.html/jsonlogs/log.json');
const fs = require('fs');
const path = require('path');
module.exports = pruebajson;

const elements = pruebajson[0].elements;

const testsTotales = elements.length;
let testPasados = 0;
let testsFallados = 0;
let pass = 0;
let fail = 0;
let logstatus = '';

const idJira = elements.map((element) => {
    const { description, steps, name } = element;
    const title = description.trim();
    const status = steps[0].result.status;
    if (status === 'passed') {
        testPasados++;
        pass = 1;
        fail = 0;
        logstatus = ' - OK ';
    } else if (status === 'failed') {
        testsFallados++;
        pass = 0;
        fail = 1;
        logstatus = ' - NOT OK ';
    }

    return {
        title,
        status,
        testName: name,
        pass,
        fail,
        logstatus
    };
});

fs.writeFileSync(
 path.resolve(__dirname, 'Reporte.txt'),
 'JLR>' +
 '\t' +
 'ID TSC/TC' +
 '\t\t' +
 'NOMBRE TSC/TC' +
 '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' +
 'PASS' +
 '\t' +
 'FAIL' +
 '\n',
);

let testNameStatus = '';
for (const testCase of idJira) {
   
    const testName = testCase.testName;
    const testStatus = testCase.logstatus;

    testNameStatus = testName + testStatus;

    fs.writeFileSync(
    path.resolve(__dirname, 'Reporte.txt'),'JLR>' +'\t' + testCase.title.trim() + '\t\t' + testNameStatus + '\t\t' +  Number(testCase.pass) +
    '\t\t' +
    Number(testCase.fail) +
    '\n',
    {
    encoding: 'utf8',
    flag: 'a+',
    mode: 0o666,
    },
    );
}
fs.writeFileSync(
    path.resolve(__dirname, 'Reporte.txt'),
    'JLR>   Resumen_Regresion\t' +
    `TC PASADOS:${testPasados}\t\t` +
    `TC FALLADOS:${testsFallados}\t\t` +
    `TC TOTALES:${testsTotales}\t\t`,
    {
    encoding: 'utf8',
    flag: 'a+',
    mode: 0o666,
    },
);


