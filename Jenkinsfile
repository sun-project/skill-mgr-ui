pipeline {
  environment {
    image = 'sun-project/skill-mgr-ui'
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
          dockerImage = docker.build env.image
        }
      }
    }
    stage('Deploy image') {
      steps {
        script {
          docker.withRegistry(registry, registryCredential) {
            dockerImage.push(env.BUILD_NUMBER)
            dockerImage.push("latest")
          }
        }
      }
    }
  }
  post {
    always {
      sh "docker rmi $image:$BUILD_NUMBER $image:latest"
      deleteDir()
    }
  }
}
