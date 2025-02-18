pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
               git branch: 'main', url: 'https://github.com/JosimariFabri/testes-e2e-ebac-shop.git'
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
