<template>
  <div class="container-link">
    <div class="flex-1">
      <div class="link">
        <b-table small :fields="fields" :items="items">
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
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment"; 

export default {
  name: "Redirect",
  data() {
    return {
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
  mounted() {
    this.buscandoRedirects();
  },
};
</script>

<style>
    .container-link {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #ededf0;
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
</style>
