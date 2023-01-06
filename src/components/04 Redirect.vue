<template>
  <div class="container-link">
    <div class="link">
      <table>
        <tbody>
          <template v-for="item in items">
            <div @click="tabela(item.id)" class="container-left">
              <div class="link-nome">{{ item.name_link }}</div>
              <div class="link-data">{{ item.created_at | moment }}</div>
              <div id="link-redirect">{{ item.url_link }}</div>
              <div id="link-cliques">👉 12/{{ item.total_click }}</div>
              <br>
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
    /* Busca Redirects */
    GetRedirects() {
      var that = this;
      axios.get
        ("http://127.0.0.1:8000/api/redirect")
        .then(function (resp) {
            that.items = resp.data.redirects;
      });
    },

    /* Busca Links a Direita */
    tabelas_links(idlink) {
      
      var that = this;
      axios.get
        ("http://127.0.0.1:8000/api/links/" + idlink)
        .then(function (){
            that.Getredirects();
    });

    
  },
  tabela(id){
    // Setar o ID da tabela, que vai aparecer do outro lado
    axios.post("http://127.0.0.1:8000/api/redirect/", {id:id}).then(function(resp){
      console.log(resp)
    })
  }
},
  mounted() {
    this.GetRedirects();
  },
};
</script>


<style>
.container-link {
  display: flex;
  justify-content: space-between;
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
.container-left {
  width: 430px;
  border-bottom: 1px solid #ededf0;
}
.container-left:hover {
  width: 430px;
  color: blue;
  border-radius: 5px;
  /* cursor: pointer; */
}
.link-nome {
  position: relative;
  top: 18px;
  font-family: 'Montserrat';
}
.link-data {
  position: relative;

  left: 80px;
}
#link-redirect {
  position: relative;
  top: 14px;
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
