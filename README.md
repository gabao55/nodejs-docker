Essa é uma aplicação simples com nodejs que se conecta ao mysql e usa nginx como proxy-reverso. Para executá-la, basta ter o docker instalado em sua máquina e rodar o comando abaixo:

```
docker-compose up -d
```

Após execução do comando, espera-se que ao acessar o endereço http://localhost:8080/ seja exibida uma página simples com header "Full Cycle Rocks!!" e uma lista de nomes gravados no banco de dados.