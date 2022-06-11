pipeline {

    agent any

    stages {

        stage('build front') {
            steps {
                echo 'Building frontend...'
            }
        }

        stage('build back') {
            steps {
                echo 'Building backend...'
            }
        }

        stage('deploy') {
            steps {
                echo 'Deploying...'
                script {
                    withCredentials([string(credentialsId: 'DockerHub', passwordVariable: 'DOCKER_REGISTRY_PWD',
                                    usernameVariable: 'DOCKER_REGISTRY_USER')]) {
                        sh './qrsec-backend/mvnw compile jib:build'
            }
        }

    }
}
