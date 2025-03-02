# homepage
Página do grupo PET/ADS do IFSP São Carlos

## Instruções para clonar o repositório e poder fazer suas alterações no mesmo
+ Abra o terminal/prompt de comandos da sua máquina
+ Navegue até a pasta onde deseja que o projeto da página fique
+ Dê o seguinte comando:

  git clone https://github.com/pet-ads/homepage.git (para clonar via chave http)

  git clone git@github.com:pet-ads/homepage.git (se tiver uma chave ssh configurada em sua máquina)

+ Instale as dependências do mesmo através do comando **npm install**

## Rodar o projeto:

Após a instalação do projeto, você já pode rodar o seu projeto em um servidor local através do comando **npm start**

## Adicionar/alterar novos membros:

Se você quer adicionar ou alterar novos membros, isso muito provavelmente significa que você é um membro do PET e que ficou responsável pela manutenção dessa página, então antes de mais nada, meus parabéns!

Para adicionar novos membros você deve seguir os seguintes passos:

+ Adicionar a foto do novo membro em *public/fotos_alunos*
+ adicionar os dados do novo membro em *public/data/integrantes.json*

**Nota: Importante notar que a estrutura do json do novo membro deve seguir o seguinte formato:**

```
{
      "id": "n",
      "nome": "Asdrubal Sacundante",
      "foto": "./images/fotos_alunos/Estanislau Sacundante.jpg",
      "ano": "2024",
      "tipo": "bolsista/voluntário",
      "github": "https://github.com/estanislau",
      "linkedin": "https://www.linkedin.com/in/estanislau"
    }```
