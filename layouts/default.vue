<template>
  <v-app dark>
    <v-app-bar fixed app color="white" elevation="0" class="pa-0">
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <div>Kép Placeholder</div>
          <div class="d-none d-md-flex">
            <v-btn color="secondary">Hírlevél feliratkozás</v-btn>
            <v-btn class="ml-2" color="secondary"
              >Belépés <v-icon size="20" class="ml-1">mdi-account</v-icon>
            </v-btn>
          </div>
          <div class="d-flex d-md-none">
            <v-btn icon color="secondary"
              ><v-icon size="40">mdi-email-newsletter</v-icon></v-btn
            >
            <v-btn icon color="secondary"
              ><v-icon size="40">mdi-account</v-icon></v-btn
            >
          </div>
        </div>
      </v-container>

      <template v-slot:extension>
        <div style="background-color: #233c7e; width: 100%; height: 100%">
          <v-container class="d-none d-md-flex">
            <div class="white--text mr-md-5">FŐOLDAL</div>
            <div class="white--text mr-md-5">HÍREK</div>
            <div class="white--text mr-md-5">CIKKEK</div>
            <div class="white--text mr-md-5">VET WEBINAR</div>
            <div class="white--text">KAPCSOLAT</div>
          </v-container>
          <v-container class="d-flex d-md-none pa-0">
            <v-btn color="white" icon
              ><v-icon size="40">mdi-dots-vertical-circle</v-icon></v-btn
            >
          </v-container>
        </div>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app color="#233C7E" absolute class="pa-0">
      <div
        class="d-flex flex-column align-center"
        style="background-color: #60c0ef; width: 100%"
      >
        <div class="white--text mb-4 mt-4">IRATKOZZON FEL A HÍRLEVELÜNKRE!</div>
        <div
          class="d-flex flex-column flex-md-row justify-center align-center"
          style="max-width: 800px"
        >
          <v-text-field
            solo
            dense
            hide-details
            placeholder="NÉV"
            style="width: 330px"
          ></v-text-field>
          <v-text-field
            solo
            dense
            hide-details
            placeholder="EMAIL CÍM"
            class="mt-2 mt-md-0 ml-md-5"
            style="width: 330px"
          ></v-text-field>
        </div>
        <v-checkbox
          dark
          dense
          hide-details
          label="Elolvastam és elfogadom az Adatvédelmi Nyilatkozatot"
          class="ml-4 ml-md-0"
          color="white"
        ></v-checkbox>
        <v-btn color="primary" class="mb-4 mt-4">FELIRATKOZOM</v-btn>
      </div>
      <div
        class="
          d-flex
          flex-column flex-md-row flex-wrap
          justify-center
          align-center
          mb-4
          mt-4
        "
        style="width: 100%"
      >
        <div class="mr-md-5 text-caption white--text">Főoldal</div>
        <div class="mr-md-5 text-caption white--text">Hírek</div>
        <div class="mr-md-5 text-caption white--text">Cikkek</div>
        <div class="mr-md-5 text-caption white--text">Vet Webinar</div>
        <div class="mr-md-5 text-caption white--text">Kapcsolat</div>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-center align-center mb-4"
        style="width: 100%"
      >
        <div class="mr-md-10 white--text">
          VET WEBINAR - COPYRIGHT &copy; 2019
        </div>
        <div class="mr-md-10 white--text">WEBINAR@VETPRESS.HU</div>
        <div class="white--text">+3630 123 4567</div>
      </div>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
.v-toolbar__extension {
  padding: 0px !important;
}
</style>
