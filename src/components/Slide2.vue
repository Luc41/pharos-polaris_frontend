<template>
  <q-page class="flex-center">
    <div class="q-pa-md column" style="height: 400px; margin-top: 20em">
      <div class="col self-center">
        <div class="row items-center">
          <div class="column" style="height: 200px">
            <div class="col">
              <span class="text-h1 text-weight-bold">SITES</span>
            </div>
            <div class="col">
              <span class="text-h4">something in here</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="panels">
          <div class="panels__container">
            <a href="#" class="panel">
              <div
                class="panel__content"
                style="background-image: url(https://i.picsum.photos/id/10/2500/1667.jpg);"
              >
                <span class="panel__title text-h2">FORUM</span>
                <span class="text-h4" style="margin-top: 3em">something in here</span>
              </div>
            </a>
            <a href="#" class="panel">
              <div
                class="panel__content"
                style="background-image: url(https://i.picsum.photos/id/1000/5626/3635.jpg)"
              >
                <span class="panel__title text-h2">WIKI</span>
                <span class="text-h4" style="margin-top: 3em">something in here</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Slide2",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style>
/* @offsetSize * 2 means the content won't appear to move at all. Set to a lower value for squishing effects. */
/*////////////////////////////////////////*/
/* Layout */
.panels {
  width: 100%;
  height: 300%;
  overflow: hidden;
  background: #000;
  pointer-events: none;
}
.panels__container {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: stretch;
          align-items: stretch;
  height: 100%;
  width: 120%;
  margin: 0 -10%;
  visibility: hidden;
}
.panel {
  display: inline-block;
  height: 100%;
  visibility: visible;
  position: relative;
  overflow: hidden;
  -webkit-box-flex: 1;
          flex: 1;
  cursor: pointer;
  text-decoration: none;
}
/*////////////////////////////////////////*/
/* Image/Text Container */
.panel__content {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  background: center center no-repeat;
  background-size: cover;
}
.panel__content:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  -webkit-transition: opacity 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: opacity 1s cubic-bezier(0.6, 0, 0.2, 1);
}
/*////////////////////////////////////////*/
/* Title */
.panel__title {
  pointer-events: auto;
  color: #FFF;
  position: relative;
  z-index: 1;
  -webkit-transition: color 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: color 1s cubic-bezier(0.6, 0, 0.2, 1);
}
.panel__title:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  background: rgba(0, 0, 0, 0.7);
  border: solid 2px #FFC12D;
  z-index: -1;
  padding: 0.5em 1em;
  margin: -0.5em -1em;
  opacity: 0;
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
  -webkit-transition: all 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: all 1s cubic-bezier(0.6, 0, 0.2, 1);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
}
/*////////////////////////////////////////*/
/* Hover States */
.panel {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1), -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  /* Inactive panel */
  /* Override styles for an inactive panel AFTER the hovered panel */
  /* Active panel */
}
.panel .panel__content {
  -webkit-transform: translateX(10%);
          transform: translateX(10%);
  -webkit-transition: -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1), -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
}
.panel:last-child .panel__content {
  -webkit-transform: translateX(-10%);
          transform: translateX(-10%);
}
.panels:hover .panel {
  -webkit-transform: translate3d(-10%, 0, 0);
          transform: translate3d(-10%, 0, 0);
}
.panels:hover .panel .panel__content {
  -webkit-transform: translateX(14%);
          transform: translateX(14%);
}
.panels:hover .panel .panel__content:before {
  opacity: 0.7;
}
.panels .panel:hover ~ .panel {
  -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
}
.panels .panel:hover ~ .panel .panel__content {
  -webkit-transform: translateX(-14%);
          transform: translateX(-14%);
}
.panels .panel:hover {
  z-index: 2;
  -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
  pointer-events: auto;
}
.panels .panel:hover:last-child {
  -webkit-transform: translate3d(-10%, 0, 0);
          transform: translate3d(-10%, 0, 0);
}
.panels .panel:hover .panel__content {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}
.panels .panel:hover .panel__content:before {
  opacity: 0;
}
.panels .panel:hover .panel__title {
  color: #FFC12D;
}
.panels .panel:hover .panel__title:before {
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
/*////////////////////////////////////////*/
/* Vertical layout */
.panels--stacked {
  /* Inactive panel */
  /* Override styles for an inactive panel AFTER the hovered panel */
  /* Active panel */
}
.panels--stacked .panels__container {
  width: 100%;
  height: 120%;
  margin: -10% 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
}
.panels--stacked .panel {
  height: 50%;
  width: 100%;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.panels--stacked .panel .panel__content {
  -webkit-transform: translate3d(0, 10%, 0);
          transform: translate3d(0, 10%, 0);
}
.panels--stacked .panel:last-child .panel__content {
  -webkit-transform: translate3d(0, -10%, 0);
          transform: translate3d(0, -10%, 0);
}
.panels--stacked:hover .panel {
  -webkit-transform: translate3d(0, -10%, 0);
          transform: translate3d(0, -10%, 0);
}
.panels--stacked:hover .panel .panel__content {
  -webkit-transform: translate3d(0, 14%, 0);
          transform: translate3d(0, 14%, 0);
}
.panels--stacked .panel:hover ~ .panel {
  -webkit-transform: translate3d(0, 10%, 0);
          transform: translate3d(0, 10%, 0);
}
.panels--stacked .panel:hover ~ .panel .panel__content {
  -webkit-transform: translate3d(0, -14%, 0);
          transform: translate3d(0, -14%, 0);
}
.panels--stacked .panel:hover {
  -webkit-transform: translate3d(0, 10%, 0);
          transform: translate3d(0, 10%, 0);
}
.panels--stacked .panel:hover:last-child {
  -webkit-transform: translate3d(0, -10%, 0);
          transform: translate3d(0, -10%, 0);
}
.panels--stacked .panel:hover .panel__content {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
/* Responsive */
@media (max-width: 550px) {
  .panels {
    /* Inactive panel */
    /* Override styles for an inactive panel AFTER the hovered panel */
    /* Active panel */
  }
  .panels .panels__container {
    width: 100%;
    height: 120%;
    margin: -10% 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
            flex-direction: column;
  }
  .panels .panel {
    height: 50%;
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  .panels .panel .panel__content {
    -webkit-transform: translate3d(0, 10%, 0);
            transform: translate3d(0, 10%, 0);
  }
  .panels .panel:last-child .panel__content {
    -webkit-transform: translate3d(0, -10%, 0);
            transform: translate3d(0, -10%, 0);
  }
  .panels:hover .panel {
    -webkit-transform: translate3d(0, -10%, 0);
            transform: translate3d(0, -10%, 0);
  }
  .panels:hover .panel .panel__content {
    -webkit-transform: translate3d(0, 14%, 0);
            transform: translate3d(0, 14%, 0);
  }
  .panels .panel:hover ~ .panel {
    -webkit-transform: translate3d(0, 10%, 0);
            transform: translate3d(0, 10%, 0);
  }
  .panels .panel:hover ~ .panel .panel__content {
    -webkit-transform: translate3d(0, -14%, 0);
            transform: translate3d(0, -14%, 0);
  }
  .panels .panel:hover {
    -webkit-transform: translate3d(0, 10%, 0);
            transform: translate3d(0, 10%, 0);
  }
  .panels .panel:hover:last-child {
    -webkit-transform: translate3d(0, -10%, 0);
            transform: translate3d(0, -10%, 0);
  }
  .panels .panel:hover .panel__content {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
/*////////////////////////////////////////*/
/* Specific Design Setup */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/oswald/v31/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUZiYA.ttf) format('truetype');
}
.panel__title {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 2.5em;
  letter-spacing: 0.1em;
}
@media (max-width: 800px) {
  .panel__title {
    font-size: 1.5em;
  }
}
@media (max-width: 600px) {
  .panel__title {
    font-size: 1.25em;
  }
}
html,
body {
  height: 100%;
}


span {
  color: aliceblue;
}
</style>