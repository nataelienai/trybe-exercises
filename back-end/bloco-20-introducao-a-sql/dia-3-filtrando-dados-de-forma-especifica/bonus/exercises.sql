USE Scientists;

/*
1. Escreva uma query para exibir todas as informações de todos os cientistas que
possuam a letra 'e' em seu nome.
*/
SELECT * FROM Scientists WHERE Name LIKE '%E%';

/*
2.  Escreva uma query para exibir o nome de todos os projetos cujo o código inicie
com a letra A . Ordene o resultado em ordem alfabética. 
*/
SELECT Name FROM Projects WHERE Code LIKE 'A%';
