# Deploy com Kubernetes

## 📚 Estrutura Geral do Projeto
   ```bash
/frontend/ # Código-fonte do frontend (HTML, CSS, JS)
/backend/ # Código-fonte do backend (PHP, arquivos de conexão)
/k8s/ # Manifests Kubernetes para deploy da aplicação completa
README.md # Este arquivo
```

## 🛠 Tecnologias

- 🖥️ Frontend: HTML, CSS, JavaScript  
- ⚙️ Backend: PHP com conexão MySQL  
- 🐳 Docker: criação de imagens para frontend e backend  
- ☸️ Kubernetes: orquestração dos containers no cluster  
- 🗄️ MySQL: banco de dados relacional com persistência via PersistentVolumeClaim  

## ⚙️ Como usar

1. **Preparar as imagens Docker:**  
   - No diretório `/frontend/`, crie a imagem Docker para o frontend.  
   - No diretório `/backend/`, crie a imagem Docker para o backend.  
   - Faça push dessas imagens para um registro acessível pelo Kubernetes (ex: Docker Hub).

2. **Ajustar os manifests Kubernetes:**  
   - Na pasta `/k8s/`, edite os arquivos `backend-deployment.yaml` e `frontend-deployment.yaml` para alterar o nome das imagens (`seuusuario/backend:latest` e `seuusuario/frontend:latest`) para o nome real das suas imagens.

3. **Aplicar o deploy no cluster Kubernetes:**  
   Rode no terminal:

   ```bash
   kubectl apply -f k8s/mysql-pvc.yaml
   kubectl apply -f k8s/mysql-configmap.yaml
   kubectl apply -f k8s/mysql-deployment.yaml
   kubectl apply -f k8s/mysql-service.yaml
   kubectl apply -f k8s/backend-deployment.yaml
   kubectl apply -f k8s/backend-service.yaml
   kubectl apply -f k8s/frontend-deployment.yaml
   kubectl apply -f k8s/frontend-service.yaml

4. **Acessar a aplicação:**
    Use o IP ou domínio exposto pelo serviço frontend (tipo LoadBalancer).

## 📌 Importante

- O banco MySQL está configurado com volume persistente para garantir que os dados não sejam perdidos.
- Variáveis de ambiente configuram a conexão do backend com o banco.
- O frontend deve se comunicar com o backend pela URL interna do Kubernetes.

## 🔗 Referência

Este projeto foi baseado no repositório original:
https://github.com/denilsonbonatti/k8s-projeto1-app-base.git


