<template>
  <div>
    <b-modal id="modal-scoped" size="xl">
      <template #modal-header="{ close }">
        <h5>Links de Redirecionamento 🌐</h5>
        <div class="botoes-acima">
          <b-button id="cadastro" variant="outline-primary" v-b-toggle.sidebar-no-header>
            Criar um Link
          </b-button>
          <b-button size="sm" @click="close()" id="fecharmodal">
            <svg
              width="13"
              height="13"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7844 1.30859L1.78442 16.3086M1.78442 1.30859L16.7844 16.3086"
                stroke="#B5B9C5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <br />
            <!-- Emulate built in modal header close button action -->
          </b-button>
        </div>
      </template>

      <!--esqueda superior -->

      <div class="container-redirects">
        <div class="redirects-esquerdo">
          <div class="container-redirects">
            <h1 class="quantidade-links">04 links</h1>
            <p class="tempo">Clique em tempo real</p>
          </div>
          <!--esqueda superior -->
          <Redirect/>
        </div>

        <Sidecriacao/>

        <div class="lado-direito">
          <div class="container-link-escolhido">
            <div class="link-escolhido-container">
              <h1 class="link-escolhido">Link Legal</h1>
              <p class="link-escolhido-data">Criado em 04/01/2020 ás 10:36</p>
            </div>
            <div class="link-escolhido-detalhes">
              <p class="link-redirect-detalhes">redirect.gdigi.al/3hNU8HO</p>
              <button class="botao">Copiar</button>
              <button class="botao">Editar</button>
            </div>
          </div>

          <div class="links-crud">
            <div class="valor-container">

          <b-table small :fields="fields" :items="items" class="tabela-links">
              
              <template #cell(id)="data">
                <h1 class="valor">0{{ data.value }}</h1>
              </template>
              
              <template #cell(link)="data">
                <h1 class="link-criado">{{ data.value }}</h1>
              </template>
              <template #cell(update_at)="data">
                 <b-button id="botao" @click="editarProduto(data.item)" variant="primary">Editar</b-button>
              </template>
              
              <template #cell(click)="data">
                <br>
                <p class="click0">{{ data.value }}</p>
                <!-- <p class="link-data">{{ data.value.max_click }}</p> -->
              </template>
              <p>/</p>
              <template #cell(max_click)="data">
                <!-- <p class="link-data">{{ data.value.click }}</p>/ -->
                <p class="max_click">/{{ data.value }}</p>
              </template>
          </b-table>
        
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
import Sidecriacao from '@/components/Sidecriacao';
import Redirect from '@/components/Redirect';

export default {
  
  components:{
    Sidecriacao,
    Redirect
  },
  data() {
    return {
      // name: "",
      // reference: "",
      // description: "",

      // links
      fields: [
        { key: "id", label: "" },
        // { key: "id_base", label: "" },
        { key: "link", label: "" },
        { key: "click", label: "" },
        { key: "max_click", label: "" },
        { key: "update_at", label: "" },
      ],

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
    buscandolinks() {
      var that = this;
      axios.get("http://127.0.0.1:8000/api/links").then(function (resp) {
        console.log(resp);
        that.items = resp.data.links;
      });
    },
  },
  mounted() {
    this.buscandolinks();
  },
};
</script>

<style>
#modal-scoped {
  position: fixed;
  padding: 20px auto;
}

#cadastro {
  /* position: absolute;
  width: 202.58px;
  height: 45px;
  left: 925.42px;
  top: 70.75px; */

  background: rgba(33, 51, 210, 0.1);
  border-radius: 5px;
}
#fecharmodal {
  background-color: transparent;
  border: none;
  position: relative;
  top: -10px;
}
.botoes-acima {
  display: flex;
  gap: 20px;
}
.container-redirects {
  display: grid;
  grid-template-columns: 1fr calc(8rem) 1fr;
}

.modal {
  display: flex;
  align-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.botao {
  font-weight: 600;
  color: #2133d2;
  background: #fff;
  border: 1px solid #2133d2;
  border-radius: 5px;
  padding: 6px 20px;
  cursor: pointer;
  }
#botao {
  font-weight: 600;
  color: #2133d2;
  background: #fff;
  border: 1px solid #2133d2;
  border-radius: 3px;
  padding: 3px 13px;
  cursor: pointer;
  position: relative;
  top: 10px;
  left: 120px;
}
.flex-cotainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededf0;
  padding: 20px;
}
.h1 {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
}
.p {
  color: #81858e;
  font-size: 14px;
}
.button {
  font-size: 14px;
  font-weight: 600;
  color: #2133d2;
  background: rgba(33, 51, 210, 0.1);
  padding: 15px 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
}
.container-redirects {
  display: grid;
  grid-template-columns: 1fr calc(8rem) 1fr;
}
.container-link {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ededf0;
}
.redirects-esquerdo {
  border-right: 1px solid #ededf0;
}
.quantidade-links {
  font-size: 14px;
  font-weight: 600;
  color: #2133d2;
}
.tempo {
  font-size: 12px;
  color: #81858e;
}
.flex-1 {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.link {
  display: flex;
  align-items: center;
  gap: 20px;
}
.link-nome {
  color: #333333;
  font-weight: 600;
  font-size: 14px;
}
.link-data {
  font-size: 12px;
}

.max_click {
  font-size: 12px;
  color: #0852ff;
  position: relative;
  right:200px;
  top: 24px;
}
.click0 {
  font-size: 12px;
  color: #0852ff;
  position: relative;
  right:185px;
}
.detalhes-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.link-redirect {
  font-size: 13px;
  color: #81858e;
  position: relative;
  left:-140px;
}
.link-cliques {
  font-size: 14px;
  color: #81858e;
  position: relative;
  top:40px;
}
.lado-direito {
  padding: 50px;
  position: relative;
  left:-120px;
  top: 10px;
}
.container-link-escolhido {
  border-bottom: 1px solid #ededf0;
}
.link-escolhido-container {
  display: flex;
  gap: 20px;
  align-items: center;
}
.link-escolhido {
  font-weight: 600;
  font-size: 20px;
  color: #000000;
}
.link-escolhido-data {
  font-size: 12px;
  color: #81858e;
}
.link-escolhido-detalhes {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
}
.link-redirect-detalhes {
  color: #2133d2;
}

.valor {
  font-weight: 600;
  font-size: 13px;
  color: #2133d2;
  position: relative;
  top: 10px;
}
.links-crud {
  margin-top: 25px;
}
.link-criado {
  font-size: 12px;
  color: #81858e;
  position: relative;
  top: 10px;
}
.data-gerada {
  margin-top: 5px;
  margin-left: 33px;
  font-size: 12px;
  color: #2133d2;
}
.valor-container {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 20px;
}
.tabela-links{
  position: relative;
  top: -35px;
  /* background-color: red; */
}
</style>