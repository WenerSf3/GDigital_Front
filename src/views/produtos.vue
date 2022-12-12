<template>
  <div>
    <h1>Consumo Api Vue.js</h1>
    <button @click="buscaProduto()">aaaaaa</button>
    <!-- <div>
        <input v-model="name" type="text" placeholder="Nome" />
        <input v-model="reference" type="text" placeholder="Referencia" />
        <input v-model="description" type="text" placeholder="description" />
        <b-button variant="primary" @click="salvarProduto"
          >Salvar Produto</b-button
        >
      </div> -->

    <div class="container">
      <b-table small :fields="fields" :items="items" responsive="sm">
        <template #cell(id)="data">
          {{ data.value }}
        </template>

        <template #cell(name_link)="data">
          {{ data.value }}
        </template>

        <template #cell(url_link)="data">
          {{ data.value }}
        </template>

        <template #cell(total_click)="data">
          {{ data.value }}
        </template>

        <template #cell(created_at)="data">
          {{ data.value | moment }}
        </template>

        <template #cell(update_at)="data">
          <b-button @click="editarProduto(data.item)" variant="primary"
            >Editar</b-button
          >

          {{ data.value }}

          <b-button @click="deletaProduto(data.item.id)" variant="danger"
            >Deletar</b-button
          >
        </template>
      </b-table>
    </div>
    <h1>Consumo Api Vue.js</h1>
    <button @click="buscaProduto2()">aaaaaa</button>
    <div>
        <input v-model="name" type="text" placeholder="Nome" />
        <input v-model="reference" type="text" placeholder="Referencia" />
        <input v-model="description" type="text" placeholder="description" />
        <b-button variant="primary" @click="salvarProduto"
          >Salvar Produto</b-button
        >
      </div>

    <div class="container">
      <b-table2 small :fields="fields2" :items="items2" responsive="sm">
        <template #cell(id)="data">
          {{ data.value }}
        </template>

        <template #cell(name)="data">
          {{ data.value }}
        </template>

        <template #cell(reference)="data">
          {{ data.value }}
        </template>

        <template #cell(created_at)="data">
          {{ data.value | moment }}
        </template>

        <template #cell(update_at)="data">
          <b-button @click="editarProduto(data.item)" variant="primary"
            >Editar</b-button
          >

          {{ data.value }}

          <b-button @click="deletaProduto(data.item.id)" variant="danger"
            >Deletar</b-button
          >
        </template>
      </b-table2>
    </div>

    <b-modal id="modal-1" title="BootstrapVue" hide-footer>
        <div v-if="editItem">
          <input v-model="editItem.name" type="text" placeholder="Nome" />
          <input
            v-model="editItem.reference"
            type="text"
            placeholder="Referencia"
          />
          <input
            v-model="editItem.description"
            type="text"
            placeholder="description"
          />
        </div>
  
        <br />
  
        <b-button variant="primary" @click="salvarEdicaoProduto"
          >Salvar Produto</b-button
        >
      </b-modal>
  </div>
</template>
  
  <script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      // name: "",
      // reference: "",
      // description: "",
      fields: [
        { key: "id", label: "ID" },
        { key: "name_link", label: "Nome do link" },
        { key: "url_link", label: "Url" },
        { key: "total_click", label: "l" },
        { key: "created_at", label: "Data" },
        { key: "update_at", label: "Açoes" },
      ],
      items: [],
      // editItem: null,
    
      // name: "",
      // reference: "",
      // description: "",
      fields2: [
        { key: "id", label: "ID" },
        { key: "name", label: "Nome do link" },
        { key: "reference", label: "Url" },
        { key: "description", label: "Url" },
        { key: "created_at", label: "Data" },
        { key: "update_at", label: "Açoes" },
      ],
      items2: [],
      editItem: null,
    };
  },
  filters: {
    moment: function (date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
  methods: {
    salvarEdicaoProduto() {
      this.$bvModal.hide("modal-1");

      var data = {
        name: this.editItem.name,
        reference: this.editItem.reference,
        description: this.editItem.description,
      };

      axios
        .put("http://127.0.0.1:8000/api/product/" + this.editItem.id, data)
        .then(function () {
          that.buscaProdutos();
        });
    },
    editarProduto(item) {
      this.$bvModal.show("modal-1");

      this.editItem = item;
    },
    salvarProduto() {
      var data = {
        name: this.name,
        description: this.description,
        reference: this.reference,
      };

      var that = this;

      axios.post("http://127.0.0.1:8000/api/product/", data).then(function () {
        that.name = "";
        that.description = "";
        that.reference = "";
        that.buscaProdutos();
      });
    },
    deletaProduto(id_produto) {
      var that = this;
      axios
        .delete("http://127.0.0.1:8000/api/product/" + id_produto)
        .then(function () {
          that.buscaProdutos();
        });
    },
    buscaProduto() {
      var that = this;
      axios.get("http://127.0.0.1:8000/api/redirect").then(function (resp) {
        console.log(resp);
        that.items = resp.data.redirects;
        });
    },
    buscaProduto2(){
      var that = this;
      axios.get("http://127.0.0.1:8000/api/product").then(function (resp) {
        console.log(resp);
        that.items = resp.data.products;
      });
    },

  },
};
</script>