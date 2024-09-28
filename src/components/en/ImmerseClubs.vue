<template>
  <div class="kids-carousel-container">
    <Carousel :itemsToShow="itemsToShow" :itemsToScroll="1" :autoplay="false">
      <Slide v-for="item in clubs" :key="item.id">
        <div class="kids-card">
          <img :src="item.img" :alt="item.title" class="kids-card-img" />
          <div class="kids-card-content">
            <h3 class="kids-card-title">{{ item.title }}</h3>
            <p class="kids-card-description" v-html="item.description"></p>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  components: { Carousel, Slide },
  setup() {
    const itemsToShow = ref(3); 

    const updateItemsToShow = () => {
      itemsToShow.value = window.innerWidth < 768 ? 1 : 3;
      console.log('itemsToShow updated:', itemsToShow.value);
    };

    onMounted(() => {
      updateItemsToShow();
      window.addEventListener('resize', updateItemsToShow);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateItemsToShow);
    });

    return {
      itemsToShow,
    };
  },
  data() {
    return {
      clubs: [
        { id: 1, img: require('@/assets/images/clubs/1.png'), title: 'نادي القراءة', description: 'يتم إعطاء الطالب جزء من قصة يتدرب على سماعها<br> مع قراءتها عدة مرات، مع الترديد خلف الملف الصوتي المرفق، وعندما يكون جاهزا للقراءة بنفس الكفاءة ينضم لأنشطة متقدمة أكثر حيث يقرأ خلالها على معلم متخصص، ليُقيِّم أداءه ويعطيه تعليمات مختلفة للتحسن .' },
        { id: 2, img: require('@/assets/images/clubs/5.png'), title: 'نادي السينما', description: 'في نادينا، يتعلم الطلاب عبارات يومية من خلال مشاهدة أجزاء من أفلام، مع التركيز على جمل محددة لإتقان النطق الصحيح. بعد المحاضرة، يسجل الطلاب هذه العبارات ويرسلون التسجيلات للمدرس عبر مجموعات الواتساب للتصحيح.' },
        { id: 3, img: require('@/assets/images/clubs/8.png'), title: 'نادي المناظرات', description: 'هو مسابقة تتم شهريا بين فصليين في نفس المستوى أومتتقاربين في المستوى علي موضوعات مختلفة بحضور معلمين الفصول ويعمل هذا النادي على خلق روح المنافسة بين الطلاب لإبراز أفضل ما عندهم وتشجيعهم على التقدم المستمر في تنمية مهارتهم في اللغة' },
        { id: 4, img: require('@/assets/images/clubs/7.png'), title: 'نادي المواهب', description: 'يعرض الطالب في هذا النادي مهاراتهم المختلفة مثل الغناء والتطريز والأشغال البدوية والألعاب الرياضية المختلفة، في جو مبهج وممتع للطالب وأولياء الأمور.' },
        { id: 5, img: require('@/assets/images/clubs/2.png'), title: 'نادي الكتابة', description: 'في هذا النادي يتعلم الطالب الكتابة الأكاديمية وكتابة أنواع مختلفة من النصوص حسب مستواهم وعمرهم، وهي تعتبر دورة منفصلة عن الحصص الأساسية' },
        { id: 6, img: require('@/assets/images/clubs/6.png'), title: 'نادي الصوتيات', description: 'هذا النادي يقدم الدعم للطالب الذين لديهم مشکلات تتعلق بالنطق . حيث يقوم معلم متخصص بتدريب الطالب على كيفية النطق الصحيح، لكي يتمكن الطالب من خلال العديد من الأنشطة التفاعلية من ضبط النطق لديه تحسين مهارة النطق الصحيح الكلمات والجمل' },
        { id: 7, img: require('@/assets/images/clubs/1.png'), title: 'اللايف كوتش – Life Coach', description: 'الاهتمام في هذا النادي خاص ببرامج تنمية المهارات بشكل متطور وعن طريق أفضل المحاضرين و يساعد المتدرب أكثر علي فهم مراحل الحياة وطبيعة الشخصية في كل مراحلة بشكل فردي وجماعي في مجموعات مقسمة لفئات عمرية تشمل جميع الاعمار' },
        { id: 8, img: require('@/assets/images/clubs/2.png'), title: 'نادي الرسم', description: 'هو مساحة حرة من المرح - يقوم فيها الطالب يتعلم مهارات الرسم البسيطة و ذلك من خلال تشغيل فيديو من خلال اليوتيوب لتعليم الرسم باللغة الإنجليزية' },
        { id: 9, img: require('@/assets/images/clubs/1.png'), title: 'النادي الاجتماعي', description: 'يعتبر من أهم الأندية العامة التي تهتم بزيادة الوعي لدي ولي الأمر عن طريق المختصين و مناقشتهم لمشاكل السلوكيات التي قد تواجهنا أوتواجه أبناءنا علي العموم و سيتم مناقشة أهم المواضيع وكيفية التعامل معها و أهم الانشطة المنزلية التي نحتاجها لماسعدة' },
        { id: 10, img: require('@/assets/images/clubs/3.png'), title: 'نادي ماما مونجي', description: 'يتميز هذا النادي بتركيزه على مناقشة ومعالجة مختلف التحديات السلوكية. نقدم جلسة استشارية مجانية أولية للطالب وولي الأمر، يتم خلالها التعرف على أي سلوك سلبي يحتاج إلى تصحيح أو سلوك إيجابي يمكن تعزيزه. هذه الجلسة التي تتم بحجز مسبق، توفر خطة تربوية فردية تلبي احتياجات كل طالب.' },
        { id: 11, img: require('@/assets/images/clubs/4.png'), title: 'نادي المحادثة', description: 'هو مساحة حرة للطلاب لممارسة ما يتعلمونه أثناء الحصص عن طريق الحوار، حيث يتقابل الطلاب يومياً مع زملائهم، ويتحدثون بحرية لمدة يحددونها هم بأنفسهم. ويقوم معلمو الفصول بتزويدهم بمهام خاصة بعد كل حصة، لينجزوها في نادي المحادثة.' }
      ]
    };
  }
};
</script>

<style scoped>
.kids-carousel-container {
  width: 95%;
  margin: 0 auto;
  direction: rtl;
}
.kids-card {
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  text-align: right;
  padding: 1rem;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 10px; 
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  width: 100%;
  height: 100%;
}
.kids-card:hover {
  background: linear-gradient(111.84deg, #2C80AC 0%, #165E84 100%);
  color: #ffffff;
}

.kids-card:hover .kids-card-title,
.kids-card:hover .kids-card-description {
  color: #ffffff;
}

.kids-card-img {
  width: 20%; 
  height: auto; 
  object-fit: cover;
  border-radius: 0.5em;
}
.kids-card-content {
  height: auto; 
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center; 
}
.kids-card-title {
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-family: 'DIN Next LT Arabic';
}
.kids-card-description {
  font-size: 1.25em;
  color: #6b6b6b;
}
@media (max-width: 767px) {
  .kids-card {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .kids-card {
    width: 95%;
  }
}
@media (min-width: 1024px) {
  .kids-card {
    width: 95%; 
  }
}
</style>
