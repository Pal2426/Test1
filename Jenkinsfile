pipeline {
    agent any

    environment {
        NODE_VERSION = '14.x' // Specify your Node.js version here
    }

    stages {
        stage('Clone Repository'){
            steps{
                git url: 'https://github.com/Pal2426/Test1.git', branch: 'main'
            }
        }
       stage('Compile'){
           steps{
            bat 'node demo.js'
       }
    }
        stage('Test'){
            steps{
                bat 'npx jest'
    }

    post {
        always{
       echo 'Build Completed'
    }
    }
}
