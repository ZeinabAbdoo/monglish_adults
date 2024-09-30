<template>
  <!-- Section One Content -->
  <div class="adults-sec1">
    <div class="text-container">
      <h3>استثمر في مستقبلك، </h3>
      <h1>اطلق العنان لقدراتك مع اللغة الإنجليزية من مونجلش.</h1>
      <h2>حيث يصبح الامتياز واقعًا</h2>
      <p>دورات اللغة الإنجليزية في مونجلش مصممة خصيصًا لك لتلبية طموحاتك واحتياجاتك. نوفر لك تجربة تعليمية متميزة تضمن نتائج مذهلة وعملية في إتقان اللغة!</p>
      <button @click="sendMessage">إشترك معنا الأن
        <i class="fab fa-whatsapp"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonglishSectionOne",
  methods: {
    async sendMessage() {
      try {
        const response = await fetch(`https://service.monglish.co.uk/api/get-phone-number`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const url = `https://wa.me/${data.phone_number}`; 
        window.open(url, '_blank');
      } catch (error) {
        console.error('Error fetching phone number:', error);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Lato');

.adults-sec1 {
  background-image: url('@/assets/images/adults/bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  color: #FFF;
  text-align: right;
  padding: 1rem 4rem 4rem 4rem;
  height: 100vh;
  direction: rtl;
  margin-top: -85px;
  z-index: -1;
}

.adults-sec1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.text-container {
  max-width: 50%;
  position: relative;
  z-index: 2;
  padding: 7rem 2rem 2rem 2rem;
}

.adults-sec1 h3,
.adults-sec1 h1,
.adults-sec1 h2,
.adults-sec1 p {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.adults-sec1 h3 {
  font-size: 32px;
  line-height: 47.04px;
}

.adults-sec1 h1 {
  font-size: 64px;
  line-height: 97.31px;
}

.adults-sec1 h2 {
  font-size: 48px;
  line-height: 63.12px;
}

.adults-sec1 p {
  font-size: 20px;
  line-height: 29.4px;
}

.adults-sec1 button {
  width: 100%;
  max-width: 35%;
  padding: 0.5rem 0.25rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}

.adults-sec1 button:hover {
  background: linear-gradient(45deg, #f47e23, #fe9b4f);
  transform: scale(1.05);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .adults-sec1 {
    background-image: url('@/assets/images/adults/bg2.jpg');
    padding: 2rem 1rem;
    text-align: center; /* Center text for mobile */
  }

  .text-container {
    max-width: 100%; /* Use full width on mobile */
    padding: 3rem 1rem; /* Adjust padding */
    margin-top: 20em; /* Add space before the text container */
  }

  .adults-sec1 h3 {
    font-size: 20px; /* Smaller font size */
    line-height: 28px; /* Adjusted line height */
  }

  .adults-sec1 h1 {
    font-size: 30px; /* Smaller font size */
    line-height: 40px; /* Adjusted line height */
  }

  .adults-sec1 h2 {
    font-size: 24px; /* Smaller font size */
    line-height: 32px; /* Adjusted line height */
  }

  .adults-sec1 p {
    font-size: 16px; /* Smaller font size */
    line-height: 22px; /* Adjusted line height */
  }

  .adults-sec1 button {
    max-width: 80%; /* Wider button on mobile */
  }
}
</style>
