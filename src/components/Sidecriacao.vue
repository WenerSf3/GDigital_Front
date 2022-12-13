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

                <template #cell(update_at)="data">
                  {{ data.value }}

                  <b-button @click="apagarlink(data.item.id)" variant="danger"
                    >Deletar</b-button
                  >
                </template>
              </b-table>
              <div id="cadastrando_links">
                <div class="salvar_link">
                  <input
                    v-model="id_base"
                    type="text"
                    id="input_id"
                    placeholder="id base"
                  />
                  <input
                    v-model="link"
                    type="text"
                    value="0"
                    id="input_url"
                    placeholder="URL"
                  />
                  <input
                    v-model="click"
                    type="number"
                    id="input_max_click"
                    placeholder="click"
                  />
                  <input
                    v-model="max_click"
                    type="number"
                    id="input_click"
                    placeholder="total clicks"
                  />
                  <b-button
                    variant="primary"
                    style="height: 40px"
                    @click="salvarlinks()"
                    >Salvar</b-button
                  >
                </div>
              </div>
            </div>
            <h3 class="url_default">URL Default</h3>
            <p class="texto_default">
              Essa URL será associada ao redirecionamento apenas quando todas as
              outras chegarem ao limite de cliques. Ela será a uma url fixa sem
              limitação.
            <!-- <b-button class="botao_adicionar"
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
              </b-button> -->

            </p>
            <!-- <input
                type="text"
                class="add_url"
                placeholder="Insira a URL Default"
              /> -->
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
        that.buscandolinks();
      });
    },
    apagarlink(idlink) {
      var that = this;
      axios
        .delete("http://127.0.0.1:8000/api/links/" + idlink)
        .then(function () {
          that.buscandolinks();
        });
    },
    salvarEdicao() {
      var data = {
        name: this.editItem.name,
        reference: this.editItem.reference,
        description: this.editItem.description,
      };

      axios
        .put("http://127.0.0.1:8000/api/product/" + this.editItem.id, data)
        .then(function () {
          that.buscandolinks();
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
  position: relative;
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
  position: relative;
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
  position: relative;
  width: 15px;
  height: 15px;
  left: 550px;
  top: -12px;
  cursor: pointer;
}
.titulo_link {
  position: relative;
  width: 94px;
  height: 16px;
  left: 0px;
  top: 20px;

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
  position: relative;
  width: 69px;
  height: 16px;
  left: 0px;
  top: 30px;

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
  position: relative;
  width: 91px;
  height: 17px;
  left: 0px;
  top: 40px;

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
  position: relative;
  width: 550px;
  height: 36px;
  left: 0px;
  top: 40px;

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
.links_crud {
  position: relative;
  width: 550px;
  height: 16px;
  left: 0px;
  top: 60px;
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
  position: relative;
  width: 184.84px;
  height: 35px;
  top: 270px;

  font-weight: 600;
  color: #2133d2;
  background-color: #fff;
  border: 1px solid #2133d2;
  border-radius: 5px;
  padding: 6px 20px;
  cursor: pointer;
}
.url_default {
  position: relative;
  width: 90px;
  height: 17px;
  top: 290px;
  left: 0px;

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
  position: relative;
  width: 550px;
  height: 36px;

  top: 310px;

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
  top: 778.37px;

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
.cadastrando_links{
  position: relative;
}
.salvar_link {
  position: relative;
  width: 356px;
  height: 16px;
  top: 250px;
  display: flex;
  gap: 10px;
}
.salvar_link input {
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 5px;
}
#input_id {
  width: 65px;
}
#input_url {
  width: 300px;
}
#input_max_click {
  width: 50px;
}
#input_click {
  width: 50px;
}
.adicionar_elementos {
  position: relative;
  top: 250px;
  display: flex;
}
#input_url {
  position: relative;
  width: 356px;
}
</style>