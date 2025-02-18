pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
               git branch: 'main', url: 'https://github.com/KarinaMGM/testes-em-ci---Jenkins'
            }
        }
        stage('Instalar dependências') {
            steps {
               bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
               bat '''set NO_COLOR=1
npm run cy:run'''
            }
        }
    }
}
