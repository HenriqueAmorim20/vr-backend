# Backend para o teste prático VR Software

## Como rodar a aplicação

* Verificar as variáveis de ambiente e preenche-las corretamente. (Olhar o .env.example e criar um .env).
  - Não alterar a variável DB_DIALECT, pois ela informa qual o dialeto SQL que será utilizado, e a aplicação foi construída para utilizar o Postgres.
  - O ideal é alterar apenas as variáveis DB_USERNAME e DB_PASSWORD de acordo com a necessidade.
<br></br>
* Caso seja a primeira vez rodando a aplicação:
  ```
  yarn install
  yarn database
  yarn dev
  ```
  - O comando yarn database cria o banco de dados, os schemas e as migrations para o postgres.
<br></br>
* Caso já tenha rodado antes:
  ```
  yarn dev
  ```