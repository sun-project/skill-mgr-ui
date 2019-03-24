pipeline {
  environment {
    image = 'registry.kirin.mydns.jp/sun-project/skill-mgr-ui'
    registry = 'https://registry.kirin.mydns.jp'
    registryCredential = 'registry.kirin.mydns.jp'
  }
  agent {
    label 'docker'
  }
  stages {
    stage('Building image') {
      steps {
        script {
          dockerImage = docker.build "$image:$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy image') {
      steps {
        script {
          docker.withRegistry(registry, registryCredential) {
            dockerImage.push()
          }
        }
      }
    }
  }
  post {
    always {
      sh "docker rmi $image:$BUILD_NUMBER"
      deleteDir()
    }
  }
}
