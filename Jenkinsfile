pipeline {
    agent { label 'principal' }

    tools {nodejs 'node'}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    parameters {
        string(name: 'ENV', defaultValue: "qa", description: "Enter enviroment to execute")
        string(name: 'TAG', defaultValue: "Demo", description: "Enter tag to execute")
    }

    stages {
        
        stage('Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Test Execution') {
            steps {
                sh 'pwsh runTest.ps1 -enviroment ${ENV} -tags ${TAG}'
                }
            }

        stage('Generate HTML Report') {
            steps {
                publishHTML (target : [allowMissing: false,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: 'cypress/reports/html',
                            reportFiles: 'test_result.html',
                            reportName: 'HTML Reports',
                            reportTitles: 'The Report'])
            }
        }
        
    }
   
}