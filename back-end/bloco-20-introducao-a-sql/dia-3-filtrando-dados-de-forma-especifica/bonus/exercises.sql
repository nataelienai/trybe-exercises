USE Scientists;

/*
1. Escreva uma query para exibir todas as informações de todos os cientistas que
possuam a letra 'e' em seu nome.
*/
SELECT * FROM Scientists WHERE Name LIKE '%E%';

/*
2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie
com a letra A . Ordene o resultado em ordem alfabética. 
*/
SELECT Name FROM Projects WHERE Code LIKE 'A%';

/*
3. Escreva uma query para exibir o código e nome de todos os projetos que possuam
em seu código o número 3 . Ordene o resultado em ordem alfabética. 
*/
SELECT Code, Name FROM Projects WHERE Code LIKE '%3%' ORDER BY Name;
