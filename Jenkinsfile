pipeline {
  environment {
    registry = 'registry.kirin.mydns.jp/sun-project/skill-mgr-ui'
    registryCredential = 'registry.kirin.mydns.jp'
  }
  agent {
    label 'docker'
  }
  stages {
    stage('Building image') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy image') {
      steps {
        script {
          docker.withRegistry('', registryCredential) {
            dockerImage.push()
          }
        }
      }
    }
  }
  post {
    always {
      steps {
        sh "docker rmi $registry:$BUILD_NUMBER"
        deleteDir()
      }
    }
  }
}
