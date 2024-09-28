<template>
  <div class="adult-levels-container">
    <div class="top-half">
      <div class="text-section">
<h2>Levels</h2>
<h1>Adult Training</h1>
<p>
  Through adult training, we aim to equip them with the necessary language skills to excel in the global job market, opening up vast opportunities for professional growth and personal development.
</p>
<button @click="sendMessage">
  Join us now
  <i class="fab fa-whatsapp"></i>
</button>
<h4>Prepare for the IELTS test and learn the most important strategies for answering different questions.</h4>
</div>
      <img src='@/assets/images/levels.png' alt="Training Background" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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

.adult-levels-container {
  margin: auto;
  background-color: #fff;
  color: #165e84;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  direction: ltr;
  padding: 20px; /* Add padding for spacing */
}

.top-half {
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Stretch to fill height */
  margin-bottom: 30px;
}

.text-section {
  width: 50%; /* Set width to 50% for desktop */
  padding: 5%;
  padding-bottom: 0;
}

.text-section h1, .text-section h2 {
  font-size: 2.5em; /* Slightly smaller size */
  margin-bottom: 20px;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  line-height: 48px;
}

.text-section h2 {
  color: black;
}

.text-section p {
  font-size: 1.1em;
  margin-bottom: 40px;
  color: #7c7c7c;
}

button {
  width: 100%;
  max-width: 200px; /* Limit button width */
  padding: 0.5rem 0.25rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}

button:hover {
  background: linear-gradient(45deg, #f47e23, #fe9b4f);
  transform: scale(1.05);
}

img {
  width: 50%; /* Set width to 50% for desktop */
  height: auto; /* Maintain aspect ratio */
}

@media (max-width: 768px) {
  .top-half {
    flex-direction: column; /* Stack elements on small screens */
  }

  .text-section {
    width: 100%; /* Make text section full width on mobile */
    text-align:center;
      padding: 0%;
  }

  h3 {
    font-size: 20px; /* Smaller font size */
    line-height: 28px; /* Adjusted line height */
  }

  h1 {
    font-size: 30px; /* Smaller font size */
    line-height: 40px; /* Adjusted line height */
  }

  h2 {
    font-size: 24px; /* Smaller font size */
    line-height: 32px; /* Adjusted line height */
  }

  p {
    font-size: 16px; /* Smaller font size */
    line-height: 22px; /* Adjusted line height */
      margin-bottom: 0;
  }

  img {
    width: 100%; /* Make image full width on mobile */
    height: auto; /* Keep aspect ratio on mobile */
  }
}
</style>
