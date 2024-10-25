select *
from funcionario
where dnr = 5

select pnome, unome, salario / 12 + 50 as salario_mensal_bonus
from funcionario