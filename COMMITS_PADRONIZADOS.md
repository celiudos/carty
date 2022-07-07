# COMMITS PADRONIZADOS

1.  Commite seus ajustes. [Referência de commit padronizado](https://blog.logrocket.com/automatically-generate-and-release-a-changelog-with-node-js/)

    - Procure seguir as recomendações de Commit em https://www.conventionalcommits.org/en/v1.0.0/

      -- _Exemplos_

                feat: add the charging option for cars

                fix(homepage): change title width of title

                refactor(api): remove the get api from reservations

                BREAKING CHANGE: refactor to use the trip api instead of reservations api

    - Ou rode o comando abaixo para inserir um commit interativo

          npm run commit

1.  Gere uma versão (após uma semana de ajustes)

        npm run release

## Dicionário de padrões do Commit

`feat`: A new feature

`fix`: A bug fix

`docs`: Documentation only changes

`style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

`refactor`: A code change that neither fixes a bug nor adds
a feature

`perf`: A code change that improves performance

`test`: Adding missing tests or correcting existing test

`build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

`ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

`chore`: Other changes that don't modify src or test files

`revert`: Reverts a previous commit
