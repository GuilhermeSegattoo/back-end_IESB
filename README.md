# back-end iesb
- Iniciando o terceiro semestre com o back-end.

- Primeira aula teve conceitos básicos de git e github.

- Na segunda aula fizemos um programa em JavaScript que interage com o usuário por meio do terminal, usando a biblioteca readline-sync.
-  Ele exibe um menu com opções numeradas e permite que o usuário escolha uma dessas opções digitando o número correspondente.

Se o usuário digitar '1', o programa chama a função listar() da controladora.
Se o usuário digitar '2', o programa chama a função criar() da controladora.
Se o usuário digitar '3', o programa chama a função buscar() da controladora.
Se o usuário digitar '4', o programa chama a função atualizar() da controladora.
Se o usuário digitar '5', o programa chama a função remover() da controladora.
Se o usuário digitar '6', o programa termina usando Process.exit(0).
Se o usuário digitar qualquer outra coisa, o programa exibe "Opcao Invalida".

Após cada escolha, o programa espera que o usuário pressione Enter antes de exibir o menu novamente e permitir que o usuário faça outra escolha.
O programa continuará em um loop infinito até que o usuário escolha a opção de sair

