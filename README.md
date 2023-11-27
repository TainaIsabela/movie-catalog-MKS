# Movie Catalog - Desafio Backend MKS
API Backend para um CRUD de Catalógo de filmes, cujo o usuário só pode acessar caso esteja autenticado.

Especificações do projeto: [MKS Backend Challenge](https://github.com/MKS-desenvolvimento-de-sistemas/mks-backend-challenge)

## Para executar:
### Pré-requisitos:
   - Ter o Docker instalado na sua máquina, pois toda a aplicação será subida em containers no Docker.

### Passo a Passo:
   - Clone o repositório:
   ```
   git clone https://github.com/tainaisabela/movie-catalog-MKS.git
   ```
   - Entre na pasta do projeto:
   ```
   cd movie-catalog-MKS
   ```
   - Execute o comando para construir o container da aplicação:
   ```
   docker compose build nest
   ```
   - Execute o seguinte comando para rodar toda a aplicação (Nestjs, Postgres e redis):
   ```
   docker compose up
   ```
   - Para acessar a documentação no Swagger da aplicação, acesse o endereço abaixo: 
   ```
   http://localhost:3000/
   ```
## Deploy
  O deploy dessa aplicação bem como a hospedagem do banco de dados PostgreSQL foi feita na AWS ec2. [clique aqui para acessar]().

## Experiência:
- <strong>TypeScript (Experiente)</strong>: Cerca de 2 à 3 anos.
- <strong>NestJS (Intermediário)</strong>: Cerca de 1 ano.
- <strong>PostgreSQL (Intermediário)</strong>: Cerca de 3 anos.
- <strong>Swagger (Intermediário)</strong>: Cerca de 2 anos.
- <strong>Docker (Iniciante)</strong>: Menos de 1 ano.
- <strong>TypeORM (Iniciante)</strong>: Experiência acadêmica apenas.
- <strong>Redis</strong>: Primeira vez utilizando.


