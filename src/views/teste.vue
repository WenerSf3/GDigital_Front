<template>
  <div id="app">
    <br />
    <input type="checkbox" v-model="wener" /><br />

    <br />

    <div v-if="wener !== false" style="text-align: center">
      <b-table
        small
        :fields="fields"
        :items="items"
        class="redirect_table"
        @click="tabelas_links(data.item.id)"
      >
        <template #cell(name_link)="data">
          <h1 class="link-nome">{{ data.value }}</h1>
        </template>

        <template #cell(created_at)="data">
          <p class="link-data">{{ data.value | moment }}</p>
        </template>

        <template #cell(url_link)="data">
          <p class="link-redirect"><br /><br />{{ data.value }}</p>
        </template>

        <template #cell(total_click)="data">
          <p class="link-cliques">👉 02/{{ data.value }}</p>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      wener: false,
      fields: [
        // { key: "id", label: "" },
        { key: "name_link", label: "" },
        { key: "created_at", label: "" },
        { key: "url_link", label: "" },
        { key: "total_click", label: "" },
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
    buscandoRedirects() {
      var that = this;
      axios.get("http://127.0.0.1:8000/api/redirect").then(function (resp) {
        console.log(resp);
        that.items = resp.data.redirects;
      });
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>