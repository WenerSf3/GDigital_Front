<template>
  <div>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header right shadow>
      <template #default="{ hide }">
        <div class="header-side">
          <h4 id="header-side-title">Criação de Link</h4>
          <svg class="close-button" @click="hide" id="x-side" width="17" height="18" viewBox="0 0 17 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M16 1.5564L1 16.5564M1 1.5564L16 16.5564" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

          <nav class="mb-3">
            <h3 class="titulo_link">Título do Link</h3>

            <input class="link_legal" v-model="nameredirect" placeholder="Link Legal" />
            <h2 class="url_original">URL original</h2>
            <p class="texto-informativo">
              Você poderá inserir uma ou várias URL’s, faça como desejar.
              Lembre-se de inserir a quantidade de cliques junto à URL.
            </p>
            <div class="links_crud">
              <div v-for="(item, index) in items">
                <div>
                  <div style="display: flex; gap: 20px">
                    <p style="font-weight: bold; font-size: 13px">
                      {{ index + 1 }}
                    </p>

                    <p class="cada-link" style="color: grey">{{ item.link }}</p>
                    <p class="cada-totalclick">{{ item.max_click }}</p>
                  </div>
                  <br />
                </div>
              </div>
              <div v-if="mostrarnewlink">
                <div style="display: flex; gap: 10px">
                  <p>00</p>
                  <input class="input" style="border: none" type="text" v-model="url_link"
                    placeholder="Insira a URL original" />
                  <br />
                  <input style="border:none;" class="input2" v-model="qtdclick" type="text" placeholder="qtd cliques" />
                </div>
              </div>

              <div id="newlinkinput"></div>
              <button class="botao_adicionar" @click="criarpost()" @change="fecharnewinput()">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16772 1.41724V13.4172M1.16772 7.41724H13.1677" stroke="#2133D2" stroke-width="1.3"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Adicionar URL
              </button>
              <div id="cadastrando_links">
                <h3 class="url_default">URL Default</h3>
                <p class="texto_default">
                  Essa URL será associada ao redirecionamento apenas quando
                  todas as outras chegarem ao limite de cliques. Ela será a uma
                  url fixa sem limitação.
                </p>
                <input class="link_default" v-model="urldefault" placeholder="Link Default" />
              </div>
            </div>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Sidecriacao",
  data() {
    return {
      id: "0",
      id_base: "",
      link: "",
      click: "",
      max_click: "",
      urldefault: "",
      nameredirect: "",
      url_link: '',
      qtdclick: "",
      mostrarnewlink: false,

      items: [],
      // editItem: null,
    };
  },
  filters: {
    moment: function (date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
  methods: {
    /* Buscar Links*/

    buscandolinks() {
      var that = this;
      axios.get("http://127.0.0.1:8000/api/links").then(function (resp) {
        console.log(resp);
        that.items = resp.data.links;
      });
    },

    /* Salvar Links*/

    salvarlinks() {
      var data = {
        id_base: this.id_base,
        link: this.link,
        click: this.click,
        max_click: this.max_click,
      };

      var that = this;

      axios.post("http://127.0.0.1:8000/api/links/", data).then(function () {
        that.id_base = "";
        that.link = "";
        that.click = "";
        that.max_click = "";
      });
      that.buscandolinks();
    },

    /* criar input Links*/

    criarpost() {
      this.mostrarnewlink = true;
      let base_redirect =  this.selecionar;

      if (this.url_link.length >= 1 && this.qtdclick >= 1) {
        this.items.push({ link: this.url_link, max_click: this.qtdclick })
        let cache;
        axios.get("http://127.0.0.1:8000/api/links").then(function (resp) {
          console.log(resp);
          cache = resp.data.links;
        });

        const newitems = this.items.filter((i, index) => {
          return i != cache[index]
        });

        axios.post("http://127.0.0.1:8000/api/links", {
          body: {
            link: '',
          },
        })

        
      }
    },
    fecharnewinput() {
      this.mostrarnewlink = false;
    }
  },
  mounted() {
    this.buscandolinks();
  },
};
</script>

<style>
@import url(@/assets/css/sidecriacao.css);
</style>
