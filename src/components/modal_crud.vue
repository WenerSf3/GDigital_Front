<template>
    <section>
      <div class="modal">
        <div class="conteudo-segundo-modal">
          <div class="background-titulo">
            <div class="menus">
              <h1 class="text-h1">Criação de Link</h1>
              <img
                class="fechar"
                @click="fecharSegundoModal"
                src="@/assets/fechar.svg"
                alt="fechar"
              />
            </div>
          </div>
          <div class="background">
            <div class="titulo-container">
              <h1 class="titulo">Título do Link</h1>
              <input class="titulo-link" type="text" placeholder="Link Legal" />
            </div>
            <div class="url-container">
              <h1 class="url-titulo">URL original</h1>
              <p class="url-descricao">
                Você poderá inserir uma ou várias URL's, faça como desejar.
                Lembre-se de inserir a quantidade de cliques junto à URL.
              </p>
            </div>
            <div class="url-gerada-container">
              <div class="url-flex">
                <p class="url-gerada-id">01</p>
                <p class="url-gerada-link">
                  https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc
                </p>
              </div>
              <p class="url-gerada-cliques">250</p>
            </div>
            <div class="adicionar-container">
              <button class="botao">+ Adicionar mais URL</button>
            </div>
            <div class="default-container">
              <h1 class="default-text">URL Default</h1>
              <p class="default-descricao">
                Essa URL será associada ao redirecionamento apenas quando todas as
                outras chegarem ao limite de cliques. Ela será a uma url fixa sem
                limitação.
              </p>
              <p class="default-inserir">Insira a URL Default</p>
            </div>
            <div class="flex-2">
              <button class="botao-salvar">Salvar Link 💪</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "modalCrud",
    methods: {
      fecharSegundoModal() {
        this.abrirSegundoModal = false;
      },
    },
  };
  </script>
  
  <style>
  .conteudo-segundo-modal {
    position: absolute;
    width: 35vw;
    height: 100vh;
    background: #fff;
  }
  .background-titulo {
    padding: 25px;
    background: #191b28;
  }
  .menus {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text-h1 {
    font-size: 16px;
    color: #ffffff;
  }
  .fechar {
    cursor: pointer;
    padding: 10px;
  }
  .background {
    padding: 10px 30px;
  }
  .titulo {
    font-weight: 600;
    font-size: 13px;
    color: #333333;
  }
  .titulo-link {
    font-size: 13px;
    margin-top: 10px;
    border: none;
    color: #81858e;
    margin-bottom: 20px;
  }
  .titulo-container {
    border-bottom: 1px solid #ededf0;
  }
  .url-titulo {
    font-weight: 600;
    font-size: 14px;
    color: #2133d2;
  }
  .url-descricao {
    margin-top: 7px;
    color: #81858e;
    font-size: 12px;
  }
  .url-container {
    margin-top: 20px;
  }
  .url-gerada-id {
    font-weight: 600;
    font-size: 13px;
    color: #000;
  }
  .url-gerada-link,
  .url-gerada-cliques {
    font-size: 13px;
    color: #81858e;
  }
  .url-gerada-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }
  .url-flex {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .adicionar-container {
    margin-top: 50px;
  }
  .default-text {
    font-weight: 600;
    font-size: 14px;
    color: #2133d2;
  }
  .default-container {
    margin-top: 50px;
  }
  .default-descricao {
    margin-top: 10px;
    font-size: 12px;
    color: #81858e;
  }
  .default-inserir {
    font-size: 13px;
    margin-top: 30px;
    color: #81858e;
  }
  .botao-salvar {
    background: #2133d2;
    box-shadow: 0px 4px 10px rgba(33, 51, 210, 0.5);
    border-radius: 5px;
    padding: 15px 50px;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
  }
  .flex-2 {
    display: flex;
    flex: 1;
    justify-content: end;
  }
  </style>