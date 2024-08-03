# Localiza CEP - Testes Automatizados com Cypress

Este projeto contém testes automatizados para a aplicação "Localiza CEP" usando Cypress. O objetivo é garantir a qualidade e o correto funcionamento das funcionalidades da aplicação.

## Índice

1. [Sobre](#sobre)
2. [Funcionalidades dos Testes](#funcionalidades-dos-testes)
3. [Instalação](#instalacao)
4. [Execução dos Testes](#execucao-dos-testes)
5. [Localização dos Testes](#localizacao-dos-testes)


## Sobre

O projeto "Localiza CEP" é uma aplicação que permite buscar e localizar endereços a partir do CEP. Os testes automatizados têm como objetivo validar o comportamento e a estabilidade da aplicação durante o desenvolvimento e manutenção.

## Funcionalidades dos Testes

- Verificação do comportamento esperado ao buscar um CEP.
- Validação de mensagens de erro e sucesso.
- Testes de integração para garantir que diferentes partes da aplicação funcionam corretamente juntas.

## Instalação

### 1. Instalar o Node.js e npm

Para rodar os testes, você precisa do Node.js e do npm (Node Package Manager). Siga as instruções abaixo para instalar:

- **Windows/Mac/Linux:**
  - Visite a [página de downloads do Node.js](https://nodejs.org/).
  - Baixe e instale a versão recomendada (ou a versão LTS) que inclui o npm.
  - npm init --yes

### 2. Instalar o Cypress

Com o Node.js e o npm instalados, siga as etapas abaixo para configurar o projeto e instalar o Cypress na versão 6.9.1:

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd repositorio
   ```
3. Instale as dependências do projeto, incluindo o Cypress na versão 6.5.1:

   ```bash
   npm install
   ```

   Caso o Cypress não esteja listado nas dependências, adicione-o manualmente com:

   ```bash
   npm install cypress@6.5.1 --save-dev
   ```

## Execução dos Testes

Para executar os testes automatizados com Cypress, use o seguinte comando:

```bash
npx cypress open
```
