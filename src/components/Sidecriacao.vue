<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      right
      shadow
    >
      <template #default="{ hide }">
        <div class="header-side">
          <h4 id="header-side-title">Criação de Link</h4>
          <svg
            @click="hide"
            id="x-side"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1.5564L1 16.5564M1 1.5564L16 16.5564"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <nav class="mb-3">
            <h3 class="titulo_link">Título do Link</h3>
            <p class="link_legal">Link Legal</p>
            <h2 class="url_original">URL original</h2>
            <p class="texto-informativo">
              Você poderá inserir uma ou várias URL’s, faça como desejar.
              Lembre-se de inserir a quantidade de cliques junto à URL.
            </p>
            <div class="links_crud">
              <b-table
                small
                :fields="fields"
                :items="items"
                class="tabela-links"
              >
                <template #cell(id)="data">
                  <h4 class="id_link">{{ data.value }}</h4>
                </template>

                <template #cell(link)="data">
                  <p class="url_link">
                    {{ data.value }}
                  </p>
                </template>
                
                <template #cell(max_click)="data">
                  <h4 class="max_click_link">{{ data.value }}</h4>
                </template>
              </b-table>
            <b-button class="botao_adicionar" @click="adicionar_link"
              ><svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16772 1.41724V13.4172M1.16772 7.41724H13.1677"
                  stroke="#2133D2"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Adicionar mais URL
            </b-button>

            <h3 class="url_default">URL Default</h3>
            <p class="texto_default">
              Essa URL será associada ao redirecionamento apenas quando todas as
              outras chegarem ao limite de cliques. Ela será a uma url fixa sem
              limitação.
            </p>
            <input
              type="text"
              class="add_url"
              placeholder="Insira a URL Default"
            />

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
      // name: "",
      // reference: "",
      // description: "",

      // links
      fields: [
        { key: "id", label: "" },
        { key: "link", label: "" },
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400&display=swap");

#sidebar-no-header-title {
  padding: 10px;
  position: absolute;
}
.header-side {
  background-color: #191b28;
  width: 620px;
  height: 60.08px;
}
#sidebar-no-header {
  width: 620px;
}
#header-side-title {
  position: absolute;
  width: 131px;
  height: 20px;
  left: 34px;
  top: 20.06px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #ffffff;
}
#x-side {
  position: absolute;
  width: 15px;
  height: 15px;
  left: 569px;
  top: 22.56px;
  cursor: pointer;
}
.titulo_link {
  position: absolute;
  width: 94px;
  height: 16px;
  left: 34px;
  top: 79.23px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #333333;
}
.link_legal {
  position: absolute;
  width: 69px;
  height: 16px;
  left: 34px;
  top: 115.85px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #81858e;
}
.url_original {
  position: absolute;
  width: 91px;
  height: 17px;
  left: 34px;
  top: 176.5px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #2133d2;
}
.texto-informativo {
  position: absolute;
  width: 550px;
  height: 36px;
  left: 34px;
  top: 199.24px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* or 18px */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #81858e;
}
.links_crud{
  position: absolute;
  width: 14px;
  height: 16px;
  left: 34px;
  top: 268.34px;

}
.id_link {

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #000000;
}
.url_link {

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #81858e;
}
.max_click_link {  

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #81858e;
}
.botao_adicionar {
  box-sizing: border-box;

  position: absolute;
  width: 184.84px;
  height: 35px;
  left: 34px;
  top: 230px;

  font-weight: 600;
  color: #2133d2;
  background-color: #fff;
  border: 1px solid #2133d2;
  border-radius: 5px;
  padding: 6px 20px;
  cursor: pointer;
}
.url_default {
  position: absolute;
  width: 90px;
  height: 17px;
  top: 283px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #2133d2;
}
.texto_default {
  position: absolute;
  width: 550px;
  height: 36px;
  top: 308px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* or 18px */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #81858e;
}
.add_url {
  position: absolute;
  width: 356px;
  height: 16px;
  left: 34px;
  top: 478.37px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  padding: 20px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #81858e;
  border: none;
}
</style>