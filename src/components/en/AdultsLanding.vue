<template>
  <AdultsSectionOne />
  <AdultsSectionTwo />
  <AdultsSectionThree />
  <AdultsSectionFour />
  <AdultsSectionFive />
  <AdultLevels />
  <CoursesSwiper />

  <!--Section Eight Content-->
  <div class="kids-sec8">
    <div class="kids-sec8-row">
      <h4>ARE YOU SEEKING TO IMMERSE YOURSELF IN THE LANGUAGE IMMEDIATELY? <br><span>WELCOME!</span></h4>
      <p>The positive feedback from our students clearly reflects the profound impact of our courses dedicated work on their career paths. They consistently affirm how these courses contribute to enhancing their performance at work and strengthening their practical skills. This underscores the significant value and immense benefit provided by our academy.</p>
    </div>

    <div class="adult-swiper">
      <div ref="swiperContainer" class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(review, index) in reviews" :key="index" class="swiper-slide">
            <p>
              <span class="review-stars">{{ '★'.repeat(review.stars) }}</span>
            </p>
            <p>{{ review.review }}</p>
            <p class="review-by">{{ review.by }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PackagesAdults />
  <VideoSlider />
  <FormSection />
  <ViewThree />
 
  <div class="Last-section">
    <h1>Still Need Help?</h1>
    <p>We are happy to receive your messages and respond to all your inquiries.</p>
    <a href="https://www.monglish.co.uk/en/contact" class="contact-btn">Contact Us</a>
</div>
</template>

<script>
import CoursesSwiper from '../../components/en/CoursesSwiper.vue';
import AdultLevels from '../../components/en/AdultLevels.vue';
import AdultsSectionOne from '../../components/en/AdultsSectionOne.vue';
import AdultsSectionTwo  from '../../components/en/AdultsSectionTwo.vue';
import AdultsSectionThree from '../../components/en/AdultsSectionThree.vue';
import AdultsSectionFour from '../../components/en/AdultsSectionFour.vue';
import AdultsSectionFive from '../../components/en/AdultsSectionFive.vue';
import PackagesAdults from '../../components/en/PackagesAdults.vue';
import ViewThree from '../../components/en/ViewThree';
import VideoSlider  from '../../components/en/VideoSlider.vue';
import FormSection from '../../components/en/FormSection.vue';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'AdultsCourses',
  components: {
    CoursesSwiper,
    AdultLevels,
    AdultsSectionOne,
    AdultsSectionTwo,
    AdultsSectionThree,
    AdultsSectionFour,
    AdultsSectionFive,
    PackagesAdults,
    ViewThree,
    VideoSlider,
    FormSection
  },
  data() {
    return {
      activeDescription: null,
      totalSections: 3,
      currentIndex: 0,
      reviews: [
  {
    "stars": 5,
    "review": "May God reward you. I attended the entire lecture with her, and she has a unique style characterized by calmness during the explanation.",
    "by": "Abdullah Awda"
  },
  {
    "stars": 4,
    "review": "May God give you wellness. Honestly, I wish I had enrolled with Abdul Rahman a long time ago, as I noticed significant progress, thanks to God’s grace and then to your efforts with us and your attention to every detail, following up on assignments, and your commitment to reminding us of club dates as if he were your son.",
    "by": "Um Abdul Rahman"
  },
  {
    "stars": 5,
    "review": "Honestly, may God bless her. She is one of the best teachers at the academy, and her dedication is remarkable. May God be pleased with her in her life.",
    "by": "Mother of Iyad"
  },
  {
    "stars": 5,
    "review": "Peace be upon you. The reading club is truly excellent, and the person responsible for it is outstanding. She responds quickly, schedules appointments, and is very committed. May God reward her well.",
    "by": "Fahd Mohammed"
  }
]
, swiper: null, 
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperContainer = this.$refs.swiperContainer;
      if (swiperContainer) {
        this.swiper = new Swiper(swiperContainer, {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        this.startAutoNavigate();
      }
    });
  },
  methods: {
    startAutoNavigate() {
      setInterval(() => {
        if (this.swiper) {
          this.swiper.slidePrev(); 
        }
      }, 3000); 
    },
    toggleDescription(id) {
      this.activeDescription = this.activeDescription === id ? null : id;
    },
  }
}
</script>

<style scoped>
/* Section 8 style */
.kids-sec8 {
  padding: 2%;
  background-color: white;
  height: auto; 
  direction: ltr;
}
.kids-sec8-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1em;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  color: #165e84;
}
.kids-sec8-row h4 {
  font-size: 3vw;
}
.kids-sec8-row span {
  font-size: 3.2vw;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}
.kids-sec8-row p {
  font-size: 1.3rem;
  color: gray;
  max-width: 75%;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .kids-sec8-row {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
  .kids-sec8-row h4 {
    width: 35%;
    margin: 0;
    padding-right: 20px;
    font-size: 48px;
  }
  .kids-sec8-row h4 span{
    font-size: 48px;
  }
  .kids-sec8-row p {
    width: 65%;
    margin: 0;
    padding-left: 20px;
  }
}
@media (max-width: 769px) {
  .kids-sec8-row {
    flex-direction: column;
    text-align: center;
  }
  .kids-sec8-row h4 {
    width: 100%;
    padding-right: 0;
    font-size: 28px;
  }
  .kids-sec8-row h4 span{
    width: 100%;
    padding-right: 0;
    font-size: 28px;
  }
  .kids-sec8-row p {
    width: 100%;
    padding-left: 0;
    font-size: 20px;
  }
}
.adult-swiper {
  width: 100%;
  max-width: 100%;
  margin: auto;
  background-color: #fff;
  margin-top: 1em;
}
.swiper-container {
  width: 100%;
  background-image: url('@/assets/images/rev-bg.png');
  background-size: cover;
  background-position: center;
  border-radius: 25px; 
  overflow: hidden;
}
.swiper-slide {
  color: #fff;
  text-align: center;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px; 
}
.swiper-slide p {
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  padding: 1em;
  max-width: 80%;
  margin: 0 auto;
}
.review-stars {
  color: #ff9800;
  font-size: 2.5rem;
}
.review-by {
  margin-top: 15px;
  font-weight: bold;
  font-size: 1.5rem; 
  color: #fff;
  text-decoration: underline;
  text-decoration-color: #ff9800;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
  font-family: 'DIN Next LT Arabic', sans-serif;
}

.Last-section {
  width: 85%;
  background-color: #eee;
  border-radius: 15px;
  direction: ltr;
  text-align: left;
  position: relative;
  padding: 5px 20px 20px 20px;
  margin: 40px auto 20px auto;
}

.Last-section h1 {
  font-size: 40px;
  line-height: 60px;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
}

.Last-section p {
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
}

.contact-btn {
  display: inline-block;
  background: linear-gradient(111.84deg, #2C80AC 0%, #165E84 100%);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  right: 20px; 
  bottom: 20px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .Last-section {
    width: 95%;  /* Full width for mobile */
    padding: 10px;  /* Adjust padding */
    margin: 20px auto;  /* Adjust margin */
  }

  .Last-section h1 {
    font-size: 28px;  /* Smaller font size for mobile */
    line-height: 40px;  /* Adjust line height */
  }

  .Last-section p {
    font-size: 16px;  /* Smaller font size for mobile */
    line-height: 24px;  /* Adjust line height */
  }

  .contact-btn {
    padding: 8px 16px;  /* Adjust padding */
    font-size: 18px;  /* Smaller font size for mobile */
    position: relative;  /* Change position to relative */
    right: auto;  /* Reset right position */
    bottom: auto;  /* Reset bottom position */
    margin-top: 10px;  /* Add margin for spacing */
  }
}


</style>
