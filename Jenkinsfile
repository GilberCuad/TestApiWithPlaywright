pipeline {
    agent any

    environment {
        LOGIN_EMAIL    = credentials('LOGIN_EMAIL')
        LOGIN_PASSWORD = credentials('LOGIN_PASSWORD')
        API_URL        = credentials('API_URL')
    }

    stages {

        stage('Fix CSP') {
            steps {
                script {
                    System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
                }
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install chromium'
            }
        }

        stage('Run Login Test') {
            steps {
                sh 'npx playwright test tests/login.spec.ts --reporter=html'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'logs/**/*.log', allowEmptyArchive: true
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true
            ])
        }
    }
}