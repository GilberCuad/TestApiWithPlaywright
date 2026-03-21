pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
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
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}