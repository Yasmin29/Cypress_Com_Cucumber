# Cypress_Com_Cucumber
Curso udemy Cypress with Cucumber BDD - Beginner to Expert in 9 Hours!

# Como instaler cypress:
1 - abrir o terminal no git bash (no arquivo desejado a ser instalado)

2 - npm init

3 - npm install --save-dave cypress@10.10.0

4 - npm install -g npx (caso não tenha instalado ainda, esse é um facilitador para rodar em linha de comando)

5 - npx cypress open (para abrir e pegar as configurações do proejto, organizações do projeto e etc)

# Para o bdd
6 - no vs code instalar extenção do BDD

7 - material icon teme (fica mais bonitinho os icones)

8 - para o bdd:
https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor 
npm install --save-dev @badeball/cypress-cucumber-preprocessor

9 - 
Git do badball ensina como configurar
https://github.com/badeball/cypress-cucumber-preprocessor/blob/b6295672f0433f454b14c2ea3f7f859a97f0ac44/docs/quick-start.md

10 - Mudar o cypress.config.js para cypress.config.ts

11 - copiar a configuração existente no git do badball

12 - deletar tudo que está na pasta cypress.config.ts 

13 - colar as configurações que existes no badball

14 -  instalar: 
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor

15 - reiniciar a sua ide de preferencia após a instalação
(no vs code existe a opção em view => command palette => reload window)

16 - instalar:
npm install ts-loader --save-dev
Git do TypeStrong:
https://github.com/TypeStrong/ts-loader

# Caso não esteja econtrando o arquivo @badeball/cypress-cucumber-preprocessor/esbuild

17 - criar um arquivo chamado tsconfig.json no arquivo raiz

18 - copiar configuração existente no fac do git do badball

https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/faq.md#i-get-cypress_esbuild_preprocessor_1createbundler-is-not-a-function

{
  "compilerOptions": {
    "paths": {
      "@badeball/cypress-cucumber-preprocessor/*": ["./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/*"]
    }
  }
}

19 - colar no arquvivo tsconfig.json

20 - salvar

Isso deve resolver os problemas.

# Caso de erro no import createBundler

21 - Trocar o importe

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

para 

import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";

Link do faq do badeball que ensina o que foi citado acima: 

https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/faq.md#i-get-cypress_esbuild_preprocessor_1createbundler-is-not-a-function

22 - salvar

Isso deve resolvero problema.

# Configurar o cucumber

23 - em file do vs code clicar em preferencias => configurações => extensões => cucumber auto complete settings

24 - edit in settings.json

adicionar caso não tenha:
"cucumberautocomplete.steps": [
        "cypress/support/step_definitions/*.js"
],

25 - Em package.json adicionar:
    "cypress-cucumber-preprocessor": {
        "stepDefinitions": "cypress/support/nome_da_pasta_em_que_ficara_seus_steps/**/*.js"
    }

O passo 25 serve para que o cucumber saiba onde ficam os steps das features






