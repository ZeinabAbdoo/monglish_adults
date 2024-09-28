<template>
  <div class="adult-levels-container">
    <div class="top-half">
      <div class="text-section">
        <h1>مستويات الكبار</h1>
        <p>
          من خلال تدريب البالغين، نهدف إلى تزويدهم بالمهارات اللغوية اللازمة للتفوق في سوق العمل العالمي، مما يفتح آفاقًا واسعة للنمو المهني والتطور الشخصي.
        </p>
      </div>
      <div class="info-section" v-if="currentLevel">
        <div class="info-row">
          <div class="info-item">
            <p>{{ currentLevel.duration }}</p>
            <h3>مدة الدبلوم</h3>
          </div>
          <div class="info-item">
            <p>{{ currentLevel.hours }}</p>
            <h3>عدد ساعات الأندية</h3>
          </div>
          <div class="info-item">
            <p>{{ currentLevel.levels }}</p>
            <h3>عدد المستويات</h3>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <p>{{ currentLevel.sessions }}</p>
            <h3>عدد الجلسات</h3>
          </div>
          <div class="info-item">
            <p>{{ currentLevel.sessions }}</p>
            <h3>عدد ساعات المحاضرات الأساسية</h3>
          </div>
          <div class="info-item">
            <p>{{ currentLevel.book }}</p>
            <h3>الكتاب الدراسي للدبلوم</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-section">
      <Carousel
        :itemsToShow="itemsToShow"
        :itemsToScroll="1"
        :wrapAround="true"
        :snapAlign="'center'"
        @slideChange="onSlideChange"
        :transition="0.5"
      >
        <Slide
          v-for="(level, index) in levels"
          :key="index"
        >
          <div
            :class="['level-card', { active: activeIndex === index }]"
            @click="setActiveIndex(index)"
          >
            <div class="level-card-inner">
              <div class="level-main">{{ level.main }}</div>
              <div class="level-title">{{ level.title }}</div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      activeIndex: 0,
      itemsToShow: 6, 
      levels: [
        {
          main: "مرحلة",
          title: "A1",
          duration: "4 شهور",
          hours: "264 ساعة",
          levels: "4 مستويات",
          sessions: "32 جلسة",
          book: "Interchange Intro",
        },
        {
          main: "مرحلة",
          title: "A1+",
          duration: "4 شهور",
          hours: "264 ساعة",
          levels: "4 مستويات",
          sessions: "32 جلسة",
          book: "Interchange Intro",
        },
        {
          main: "مرحلة",
          title: "A2",
          duration: "4 شهور",
          hours: "264 ساعة",
          levels: "4 مستويات",
          sessions: "32 جلسة",
          book: "Interchange 1",
        },
        {
          main: "مرحلة",
          title: "A2+",
          duration: "4 شهور",
          hours: "264 ساعة",
          levels: "4 مستويات",
          sessions: "32 جلسة",
          book: "Interchange 1",
        },
        {
          main: "مرحلة",
          title: "B1",
          duration: "4 شهور",
          hours: "264 ساعة",
          levels: "4 مستويات",
          sessions: "32 جلسة",
          book: "Interchange 2",
        },
        {
          main: "مرحلة",
          title: "B1+",
          duration: "4 شهور",
          hours: "264 ساعة",
          levels: "4 مستويات",
          sessions: "32 جلسة",
          book: "Interchange 2",
        },
        {
          main: "مرحلة",
          title: "B2",
          duration: "4 شهور",
          hours: "264 ساعة",
          levels: "4 مستويات",
          sessions: "32 جلسة",
          book: "Interchange 3",
        },
        {
          main: "مرحلة",
          title: "B2+",
          duration: "4 شهور",
          hours: "264 ساعة",
          levels: "4 مستويات",
          sessions: "32 جلسة",
          book: "Interchange 3",
        },
      ],
    };
  },
  computed: {
    currentLevel() {
      return this.levels[this.activeIndex];
    },
  },
  methods: {
    setActiveIndex(index) {
      this.activeIndex = index;
      this.currentLevel = this.levels[index]; 
    },
    onSlideChange({ index }) {
      this.setActiveIndex(index);
    },
    updateItemsToShow() {
      const width = window.innerWidth;
      if (width >= 1200) this.itemsToShow = 6;
      else if (width >= 992) this.itemsToShow = 5;
      else if (width >= 768) this.itemsToShow = 4;
      else if (width >= 576) this.itemsToShow = 3;
      else this.itemsToShow = 2;
    },
  },
  mounted() {
    this.updateItemsToShow();
    window.addEventListener('resize', this.updateItemsToShow);
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.updateItemsToShow);
  },
};
</script>

<style scoped>
.adult-levels-container {
  margin: auto;
  background-color: #fff;
  color: #165e84;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  direction: rtl;
}

.top-half {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.text-section {
  width: 40%;
  padding: 5%;
  padding-bottom: 0;
}

.text-section h1 {
  font-size: 3em;
  margin-bottom: 20px;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}

.text-section p {
  font-size: 1.1em;
  margin-bottom: 40px;
  color: #7c7c7c;
}

.info-section {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.info-item {
  width: 30%;
  text-align: center;
}

.info-item p {
  color: #ff6600;
  margin-bottom: 10px;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  font-size: 1.8em;
}

.info-item h3 {
  font-size: 1.4em;
  color: #666;
}


.slider-section {
  overflow: hidden;
  padding-bottom: 1%;
}

.level-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #165e84;
  box-sizing: border-box;
  cursor: pointer;
  padding: 5%;
  border-radius: 15px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.level-card-inner {
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.level-card-inner:hover {
  background-color: #165e84;
  color: #fff;
}

.level-card-inner:hover .level-main,
.level-card-inner:hover .level-title {
  color: #fff;
}

.level-card.active {
  border: 2px solid #165e84;
}

.level-main {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
}

.level-title {
  font-family: 'DIN Next LT Arabic';
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .top-half {
    flex-direction: column;
  }

  .text-section {
    width: 100%;
    padding: 5%;
  }

  .info-section {
    width: 100%;
  }

  .info-row {
    flex-direction: column;
  }

  .info-item {
    width: 100%;
  }

  .level-card {
    padding: 3%;
  }

  .level-card-inner {
    padding: 30px;
  }

  .level-main {
    font-size: 1.2rem;
  }
  
  .level-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .text-section h1 {
    font-size: 2em;
  }

  .text-section p {
    font-size: 1.2em;
  }

  .info-item p {
    font-size: 1.2em;
  }

  .info-item h3 {
    font-size: 1em;
  }

  .level-main {
    font-size: 1rem;
  }

  .level-title {
    font-size: 1.2rem;
  }
}
</style>