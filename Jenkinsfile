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
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}
