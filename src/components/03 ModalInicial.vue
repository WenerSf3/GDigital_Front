<template>
  <div>
    <!-- MODAL -->
    <b-modal id="modal-scoped" size="xl" hide-header-close centered hide-footer>
      <!--Header modal-->
      <template #modal-header="{ close }">
        <div>
          <br />
          <h5>Links de Redirecionamento 🌐</h5>
          <p>Crie seus links de redirect em poucos passos</p>
        </div>
        <!--Botões Header-->
        <div class="botoes-acima">
          <!--Btn Criar-->
          <b-button id="cadastro" v-b-toggle.sidebar-no-header>
            Criar um Link
          </b-button>
          <!--Btn X Fechar Modal-->
          <b-button size="sm" @click="close()" id="fecharmodal">
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7844 1.30859L1.78442 16.3086M1.78442 1.30859L16.7844 16.3086" stroke="#B5B9C5"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <br />
          </b-button>
        </div>
      </template>

      <!--esqueda superior -->

      <div class="container-redirects">
        <div class="redirects-esquerdo">
          <div id="container-redirects">
            <h1 class="quantidade-links">{{redirectt.length}} links</h1>
            <p class="tempo">Clique em tempo real</p>
          </div>
          <!--esqueda superior -->
          <div class="container-link">
            <div class="link">
              <table>
                <div v-for="itemsb in redirectt">
                  <div id="refresh" @click="ClickRedirect(itemsb.id)" class="container-left">
                    <div style="display: flex; gap: 10px">
                      <div id="link-nome">{{ itemsb.name_link }}</div>
                      <div id="link-data">{{ itemsb.created_at | moment }}</div>
                    </div>
                    <a id="link-redirect"> {{ itemsb.url_link }} </a>
                    <div id="link-cliques">👉 0/ {{ itemsb.total_click }}</div>

                    
                    <br />
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
        
        <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header right shadow>
          <template #default="{ hide }">
            <div class="header-side">
              <h4 id="header-side-title">Criação de Link</h4>
              <svg class="close-button" @click="hide" id="x-side" width="17" height="18" viewBox="0 0 17 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1.5564L1 16.5564M1 1.5564L16 16.5564" stroke="white" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
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
                        
                        <p class="cada-link" style="color: grey">
                          {{ item.link }}
                        </p>
                        <p class="cada-totalclick">{{ item.max_click }}</p>
                      </div>
                      <br />
                    </div>
                  </div>
                  <div v-if="mostrarnewlink">
                    <div style="display: flex; gap: 10px">
                      <p></p>
                      <input class="input" style="border: none" type="text" v-model="url_link"
                        placeholder="Insira a URL original" />
                        <br />
                      <input style="border: none" class="input2" v-model="qtdclick" type="text"
                      placeholder="qtd cliques" />
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
                      todas as outras chegarem ao limite de cliques. Ela será a
                      uma url fixa sem limitação.
                    </p>
                    <input class="link_default" v-model="urldefault" placeholder="Link Default" />
                  </div>
                  <b-button id="cadastro2" v-b-toggle.sidebar-no-header @click="postredirect()">
                    Salvar Link 💪
                  </b-button>
                </div>

              </nav>
              
            </div>a
          </template>

        </b-sidebar>
        
        <!-- redirect direitaa -->
        <div class="lado-direito">
          <div class="container-link-escolhido" v-if="redirectt.length >= 1">
            <div class="link-escolhido-container">
              <h1 class="link-escolhido">
                {{ redirectt[selecionar - 1].name_link }}
              </h1>
              <p class="link-escolhido-data">
                {{ redirectt[selecionar - 1].created_at | moment }}
              </p>
              <div style="position:absolute;left: 250px;">
                <b-button class="mt-3" id="copiar"  block @click="copiarlinkredirect(redirectt[selecionar - 1].name_link)"> Copiar</b-button>
              <button id="botao2"  @click="$bvModal.show('bv-modal-example',link); editredirect = redirectt[selecionar - 1]" variant="primary">Editar</button>
              <button type="button" class="btn-delete" @click="apagarredirect(redirectt[selecionar - 1].id)">
                Deletar
              </button>
              </div>
            </div>
            <div class="link-escolhido-detalhes">
              <p class="link-redirect-detalhes">
                {{ redirectt[selecionar - 1].url_link }}
              </p>
            </div>
          </div>
          <div class="container-link-escolhido" v-else>
            Selecione um link por favor
          </div>

          <!-- links direita -->
          <div class="links-crud">
            <div class="valor-container">
              <table>
                <div v-for="(link, index) in rlinks">
                  <div id="container-left-links">
                    <div id="valor">{{ index + 1 }}</div>
                    <b-button id="botao" @click="editarlink(link)" variant="primary">Editar</b-button>
                    <div id="clickemax">
                      {{ link.click }}/{{ link.max_click }}
                    </div>
                    <div id="link-criado">{{ link.link }}</div>

                    <input type="hidden" class="btn-delete" @click="apagarlink(link.id)" />
                  </div>
                  <br />
                </div>
              </table>
              <br />
              <b-modal id="modal-1" title="Edição de Links" hide-footer>
                
                <div v-if="EditLink" class="edit">
                  <label>Url do link</label><br>
                  <input v-model="EditLink.link" class="inputedit" type="text" id="input_url" placeholder="Link" /><br><br>
                  <div style="display:flex;gap:10px;">
                    <label>Click</label><br>
                    <input v-model="EditLink.click" class="inputedit" type="text" placeholder="Clicks" id="input_click" /><br>
                    <label>Max Click</label><br>
                    <input v-model="EditLink.max_click" class="inputedit" type="text" id="input_max_click" placeholder="Total-clicks" />
                  </div>
                </div>

                <br />

                <b-button variant="primary" @click="saveEdicao()">Salvar link</b-button>
              </b-modal>
              
              <!-- Editar Redirects -->
                
                <div>
                  <b-modal id="bv-modal-example" hide-footer>
                    <template #modal-title>
                      Edição de Redirect
                    </template>
                    <div v-if="editredirect" class="edit">
                      <label>name_link</label><br>
                      <input v-model="editredirect.name_link" class="inputedit" type="text" id="input_url" placeholder="Link" /><br><br>
                      <div style="display:flex;gap:10px;">
                        <label>url_link</label><br>
                        <input v-model="editredirect.url_link" class="inputedit" type="text" placeholder="Clicks" id="input_click" /><br>
                        <label>total_click</label><br>
                        <input v-model="editredirect.total_click" class="inputedit" type="text" id="input_max_click" placeholder="Total-clicks" />
                      </div>
                    </div>
                    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Cancelar</b-button>
                    <b-button variant="primary" @click="saveEdicaoredirect()">Salvar link</b-button>
                  </b-modal>
                </div>

                
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {

  data() {
    return {
      id: 0,
      id_base: "",
      link: "",
      click: "",
      max_click: 0,

      name_link:"",
      url_link: "",
      total_click: 0,

      urldefault: "",
      nameredirect: "",
      qtdclick: "",
      clickin: 0,
      id_basein: 1,
      mostrarnewlink: false,
      items: [],

      itemsb: {},
      EditLink: [],
      editredirect:{},
      rlinks: [],
      redirectt: [],
      selecionar: 1,
      EditLink: null,
    };
  },
  filters: {
    moment: function (date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
  methods: {
    ClickRedirect(id) {
      this.selecionar = id;


      var that = this;

      axios.get("http://127.0.0.1:8000/api/links/").then(function (resp) {
        console.log(resp);
        that.rlinks = resp.data.links.filter((item) => {
          return item.id_base == id;
        });
      });

      this.buscandoredirects();
    },

    saveEdicao() {
      this.$bvModal.hide("modal-1");

      var data = {
        link: this.EditLink.link,
        click: this.EditLink.click,
        max_click: this.EditLink.max_click,
      };

      axios
        .put("http://127.0.0.1:8000/api/links/" + this.EditLink.id, data)
        .then(function () {
          console.log(data);
        });
    },


    editarlink(item) {
      this.$bvModal.show("modal-1");
      
      this.EditLink = item;
    },

    saveEdicaoredirect() {
      this.$bvModal.hide('bv-modal-example');

      var data = {
        name_link: this.editredirect.name_link,
        url_link: this.editredirect.url_link,
        total_click: this.editredirect.total_click,
      };

      axios
        .put("http://127.0.0.1:8000/api/redirect/" + this.selecionar, data)
        .then(function (resp) {
          console.log(resp);
        });
    },
    
    buscandoredirects() {
      var that2 = this;
      axios.get("http://127.0.0.1:8000/api/redirect").then(function (resp) {
        that2.redirectt = resp.data.redirects;
      });
    },

    apagarredirect(idlink) {
      console.log(idlink);

      axios
        .delete("http://127.0.0.1:8000/api/redirect/" + idlink)
        .then(function () {
          document.getElementById("refresh").click();
        });
    },
    copiarlinkredirect(link) {
                navigator.clipboard.writeText(link)
            },

    /* Buscar Links*/

    buscandolinks() {
      var that = this;
      axios.get("http://127.0.0.1:8000/api/links").then(function (resp) {
        console.log(resp);
        that.items = resp.data.links;
      });
    },


    /* criar input Links*/

    criarpost() {
      this.mostrarnewlink = true;

      var that = this;

      if (this.url_link.length >= 1 && this.qtdclick >= 1) {
        this.items.push({
          link: this.url_link, max_click: this.qtdclick, click: this.clickin,
          id_base: this.redirectt.length+1
        });
        axios.post("http://127.0.0.1:8000/api/links/", this.items[this.items.length - 1]);
      }
    },
    fecharnewinput() {
      this.mostrarnewlink = false;
    },
    postredirect() {
      let total = 0
      this.items.forEach(item => {
        total += parseInt(item.max_click);
      })
      axios.post("http://127.0.0.1:8000/api/redirect/", { name_link: this.nameredirect, url_link: this.urldefault, total_click: total }).then(()=>{
        this.buscandoredirects()
        this.id_basein = this.redirectt.length+1;
        this.items = [];
      })
    }
  },
  mounted() {
    this.buscandoredirects();
    // this.buscandolinks();
  },
};
</script>

<style>
@import url(@/assets/css/modalinicial.css);
@import url(@/assets/css/sidecriacao.css);
</style>
