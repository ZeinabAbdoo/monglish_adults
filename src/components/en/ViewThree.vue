<template>
  <div class="faq-section-n">
<h3>Everything You Need to Know</h3>
<h2>The FAQ Section is at Your Fingertips!</h2>
    <div class="faq-items-n">
      <div class="faq-items-sub">
      <div class="faq-item-min" v-for="(item, index) in faqItems_1" :key="index">
        <button @click="toggleAnswer(index)" :class="{ active: activeIndex === index }">
          {{ item.question }}
          <span :class="{ activeSpan: activeIndex === index }">
            <span v-if="activeIndex === index">-</span>
            <span v-else>+</span>
          </span>
        </button>
        <transition name="fade">
          <div v-show="activeIndex === index" :class="['answer', { 'answer-active': activeIndex === index }]">
            {{ item.answer }}
          </div>
        </transition>
      </div>
      </div>
      <div class="faq-items-sub">
      <div class="faq-item-min" v-for="(item, index) in faqItems_2" :key="index + 3">
        <button @click="toggleAnswer(index + 3)" :class="{ active: activeIndex === index + 3 }">
          {{ item.question }}
          <span :class="{ activeSpan: activeIndex === index + 3 }">
            <span v-if="activeIndex === index + 3">-</span>
            <span v-else>+</span>
          </span>
        </button>
        <transition name="fade">
          <div v-show="activeIndex === index + 3" :class="['answer', { 'answer-active': activeIndex === index + 3 }]">
            {{ item.answer }}
          </div>
        </transition>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ViewThree',
  data() {
    return {
      activeIndex: null,
      faqItems_1: [
  {
    "question": "Why choose Monglish International Academy?",
    "answer": "Monglish International Academy is a leader in its field through teaching English using the exclusive Living Curriculum method, officially registered with the U.S. Library of Congress. This curriculum is taught 100% online and includes 11 interactive clubs filled with practical applications, enabling learners of all ages to enjoy practicing the language."
  },
  {
    "question": "What qualifications do the teachers at Monglish Academy have to teach English?",
    "answer": "The Monglish team consists of a select group of proficient teachers from various nationalities (Egyptian, American, Canadian, British, and Australian), experts in teaching English. They share their experiences and knowledge with passion to ensure mastery of all skills. Innovation distinguishes us at Monglish, as we strive to keep up with the latest trends and apply new solutions to the challenges students face while learning."
  },
  {
    "question": "What are the Living Curriculum clubs?",
    "answer": "The Living Curriculum clubs at Monglish are divided into core clubs, interactive clubs, and clubs for developing behavioral and educational skills, believing in the importance of education before learning. These clubs are part of Monglish's 2025 vision, which focuses on the educational and psychological aspects of language learning, an aspect that is as important as any element in the comprehensive educational system at Monglish Academy.\n\nCore clubs: Conversation Club, Debate Club, Cinema Club, and Reading Club.\n\nInteractive clubs: Phonics Club, Writing Club, Art Club, and Talent Club.\n\nEducational clubs: Mama Mongi, Social Club, and Life Coach."
  },
  {
    "question": "Can I get a refund?",
    "answer": "The trainee has the right to request a refund of the training fees 48 hours before the start of the course at the latest, with the trainee bearing the cost of the placement test. For more information, please refer to the terms and conditions page regarding registration."
  },
  {
    "question": "How does the Living Curriculum accelerate fluency in the language by 4 times?",
    "answer": "Through immersion and constant language practice 6 days a week via weekly classes and Monglish interactive clubs designed specifically for each child. The child enjoys experiences with 4 to 6 teachers each month, enhancing the speed of language learning. We provide a foreign environment for practicing the language through internationally certified collaborative teachers. The Living Curriculum is based on interaction and enthusiasm rather than rote learning and memorization, providing an enjoyable educational experience for children without boredom."
  },
  {
    "question": "How can I track my child's progress?",
    "answer": "Through a dedicated section to monitor the student's level during classes and send a weekly report on the child's educational status and level, including any notes that may contribute to the student's linguistic progress."
  }
]
,
      faqItems_2: [
  {
    "question": "How can I enroll, and what is the suitable age for a child to start educational courses?",
    "answer": "You can enroll through our website or contact customer service via WhatsApp. Our English language courses are suitable for children from the age of 5."
  },
  {
    "question": "How long does it take to learn English?",
    "answer": "A student needs between 6 months to 12 months to achieve fluency in speaking the language."
  },
  {
    "question": "What is the duration of the class?",
    "answer": "The class lasts for one and a half hours and takes place twice a week."
  },
  {
    "question": "How many students are in the class?",
    "answer": "The number of students ranges from 5 to 12, depending on the age group of the learners."
  },
  {
    "question": "Are the classes recorded or live?",
    "answer": "All classes are offered live through the Zoom platform, and the management can record the class with prior notification in case the child is absent for compelling reasons."
  },
  {
    "question": "Do children receive a certificate at the end of their studies?",
    "answer": "Yes, children receive an online certificate, and you can request to send a printed and certified copy from the academy to your address wherever you are."
  },
  {
    "question": "What payment methods are available?",
    "answer": "Currently, payment methods are available online only through our official website or direct payment link via Stripe using a debit card."
  }
]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    navigateToFAQ() {
      this.$router.push('/ar/faq');
    }
  },
};
</script>

<style src="@/assets/styles/en/ViewThree.css" scoped></style>

