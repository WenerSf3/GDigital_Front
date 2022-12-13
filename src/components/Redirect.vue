<template>
  <div class="container-link">
    <div class="link">
      <table>
        <tbody>
          <template v-for="item in items">
            <div id="teste-teste">
              <div class="link-nome">{{ item.name_link }}</div>
              <div class="link-data">{{ item.created_at | moment }}</div>
              <div id="link-redirect">{{ item.url_link }}</div>
              <div id="link-cliques">👉  45/{{ item.total_click }}</div>
            </div>
          </template>
        </tbody>
      </table>
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
    tabelas_links(idlink) {
      console.log("funcionando");
      var that = this;
      axios.get("http://127.0.0.1:8000/api/links/" + idlink).then(function () {
        that.buscandoredirects();
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
.redirect_table1 {
  border: none;
  cursor: pointer;
}
.redirect_table:hover {
  border: 1px solid rgba(0, 208, 255, 0.393);
  cursor: pointer;
}
#teste-teste {
  border: none;
  width: 430px;
}
#teste-teste:hover {
  border: 1px solid blue;
  width: 430px;
  color: blue;
  border-radius: 5px;
  cursor: pointer;
}
.link-nome {
  position: relative;
}
.link-data {
  position: relative;
  top: -18px;
  left: 100px;
}
#link-redirect {
  position: relative;
  top: 10px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
#link-cliques {
  position: relative;
  left: 330px;
  right: 0px;
  bottom: 0px;
  top: -10px;
}
</style>
