<template>
  <!--Section One Content-->
  <div class="adults-sec1">
    <div class="text-container">
      <h3>Invest in Your Future,</h3>
      <h1>Unlock Your Potential with English from Monglish.</h1>
      <h2>Where Excellence Becomes Reality</h2>
      <p>At Monglish, our English courses are specifically designed to meet your aspirations and needs. We provide you with an exceptional learning experience that guarantees impressive results and proficiency in the language!</p>
      <button @click="sendMessage">Join Us Now
              <i class="fab fa-whatsapp"></i>
      </button>
    </div>
  </div>
</template>



<script>
export default {
  name: "MonglishSectionOne",
  methods : {
    async sendMessage() {
      try {
        const response = await fetch(`https://service.monglish.co.uk/api/get-phone-number`);
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        this.getNumber = data.phone_number;

        if (this.chatInput !== '' && this.getNumber) {
          const baseUrl = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
              ? 'whatsapp://send'
              : 'https://web.whatsapp.com/send';
          const url = `${baseUrl}?phone=${this.getNumber}&text=${this.chatInput}`;
          window.open(url, '_blank');
        }
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
  color: #FFF;
  text-align: left;
  padding: 1rem 4rem 4rem 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  margin-top: -85px;
  transform: scalex(-1);
  z-index: -1;
  position: relative;
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
  position: relative;
  z-index: 2;
  padding: 7rem 2rem 2rem 2rem;
  transform: scalex(-1);
  direction: ltr;
}

.adults-sec1 h3,
.adults-sec1 h1,
.adults-sec1 h2,
.adults-sec1 p {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  max-width: 70%;
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
    padding: 0;
    text-align: center; /* Center text for mobile */
  }

  .text-container {
    padding: 3rem 1rem; /* Adjust padding */
    margin-top: 25em; /* Add space before the text container */
  }

  .adults-sec1 h3 {
    font-size: 20px; /* Smaller font size */
    line-height: 28px; /* Adjusted line height */
        max-width: 100%; /* Use full width on mobile */

  }

  .adults-sec1 h1 {
    font-size: 30px; /* Smaller font size */
    line-height: 40px; /* Adjusted line height */
        max-width: 100%; /* Use full width on mobile */

  }

  .adults-sec1 h2 {
    font-size: 24px; /* Smaller font size */
    line-height: 32px; /* Adjusted line height */
        max-width: 100%; /* Use full width on mobile */

  }

  .adults-sec1 p {
    font-size: 16px; /* Smaller font size */
    line-height: 22px; /* Adjusted line height */
        max-width: 100%; /* Use full width on mobile */

  }

  .adults-sec1 button {
    max-width: 80%; /* Wider button on mobile */
  }
}
</style>
