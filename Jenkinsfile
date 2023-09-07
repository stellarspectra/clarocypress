pipeline {

    agent any 

 

    tools {nodejs 'node 20'}

 

    environment {

        CHROME_BIN = '/bin/google-chrome'

    }

 

    stages {


        stage('Dependencies') {

            steps {

                sh 'npm ci'

            }

        }

        stage('Test Execution') {

            steps {

                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){

                sh 'npm run cypress:regression:test'}

            }

        }

     
        stage('Generate HTML Report') {

            steps {

                sh 'npm run generate:report'

                 cucumber buildStatus: 'UNSTABLE',
					reportTitle: 'My report',
					fileIncludePattern: '*/log.json',
					trendsLimit: 10,
					classifications: [
						[
							'key': 'Browser',
							'value': 'chrome'
						]
					]

            }

        }

        stage('Imprimo log txt'){

 

            steps {

                sh 'npm run generate:report:txt'

                script {

                    def data = readFile(file:'reportsTXT/Reporte.txt')

                    println(data)

                } 

            }

 

        }


    }


}
