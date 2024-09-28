<template>
  <!--Section Five Content-->
  <div class="immerse-sec2">
        <div class="immerse-row">
            <h3>تعرف علي أندية مونجلش التفاعلية</h3>
            <p>اكتشف منهج المعايشة الفريد في مونجلش، حيث نغمركم بالكامل في عالم اللغة الإنجليزية. تجربة التعلم لدينا تتخطى
                الحدود التقليدية، مع التفاعل المكثف والمستمر مع الإنجليزية في سيناريوهات حياتية واقعية، مما يضمن تعزيز الفهم
                العميق وسلاسة اتقان الغة.</p>
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
  direction: rtl;
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
    text-align: right;
  }
  .immerse-row h3 {
    width: 30%;
    margin: 0;
    padding-right: 50px;
  }
  .immerse-row p {
    width: 70%;
    margin: 0;
    padding-left: 25px;
  }
}
</style>