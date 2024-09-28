<template>
  <!--Section Five Content-->
  <div class="immerse-sec2">
        <div class="immerse-row">
        <h3>Get to know Monglish Interactive Clubs</h3>
        <p>
          "Discover the unique Mongi- imerse approach in Monglish, where we fully immerse you in the world of the English language. Our learning experience goes beyond traditional boundaries, with intensive and continuous interaction with English in real-life scenarios, ensuring enhanced understanding and smooth language mastery"
        </p>
        </div>
        <ImmerseClubs />
  </div>
</template>

<script>
import ImmerseClubs from './ImmerseClubs.vue';

export default {
    name: 'AdultsSec5',
    components: {
        ImmerseClubs,
    }
}
</script>

<style scoped>
.immerse-sec2 {
  padding: 1em 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  direction: ltr;
}
.immerse-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2em;
  margin: 1em 0;
  font-family: 'DIN Next LT Arabic', sans-serif;
}
.immerse-row h3 {
  color: #165e84;
  font-size: 2.8rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;

}
.immerse-row p {
  font-size: 1.375rem;
  color: gray;
  font-weight: 500;
  max-width: 70%;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .immerse-row {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
  .immerse-row h3 {
    width: 35%;
    margin: 0;
    padding-left: 50px;
  }
  .immerse-row p {
    width: 65%;
    margin: 0;
    padding-right: 25px;
  }
}
</style>