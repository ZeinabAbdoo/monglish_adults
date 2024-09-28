<template>
  <!--Section One Content-->
  <div class="adults-sec1">
    <div class="text-container">
      <h3>تعليم البالغين</h3>
      <h1>اطلق العنان لمستقبل افضل
        مع مونجلش</h1>
      <h2>حيث يصبح الامتياز واقعًا</h2>
      <p>دوراتنا في مونجلش، مصممة بعناية فائقة لتتناسب
        مع طموحات ومتطلبات الكبار والمهنيين،
        مما يضمن لهم تجربة تعليمية متميزة
        ونتائج مذهلة وعملية!</p>
      <button onclick="window.location.href='https://www.monglish.co.uk/ar/package'">إشترك معنا الأن
        <svg width="23" height="11" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5046 5.75121C22.5046 5.41969 22.3729 5.10174 22.1385 4.86732C21.904 4.6329 21.5861 4.50121 21.2546 4.50121L4.26707 4.50121L5.89207 2.88871C6.12745 2.65333 6.25968 2.33408 6.25968 2.00121C6.25968 1.66833 6.12745 1.34909 5.89207 1.11371C5.65669 0.878328 5.33745 0.746094 5.00457 0.746094C4.67169 0.746094 4.35245 0.878328 4.11707 1.11371L0.367069 4.86371C0.193622 5.03949 0.0761268 5.2627 0.0294092 5.50519C-0.0173085 5.74768 0.00884456 5.99857 0.104569 6.22621C0.198344 6.45448 0.357591 6.64989 0.562241 6.78781C0.766892 6.92572 1.00779 6.99998 1.25457 7.00121L21.2546 7.00121C21.5861 7.00121 21.904 6.86951 22.1385 6.63509C22.3729 6.40067 22.5046 6.08273 22.5046 5.75121Z" fill="white"/>
            <path d="M6.25511 9.50121C6.25607 9.3367 6.22453 9.17362 6.16233 9.02132C6.10012 8.86903 6.00847 8.73051 5.89262 8.61371L2.14261 4.86371C1.90724 4.62833 1.58799 4.49609 1.25511 4.49609C1.09029 4.49609 0.927081 4.52856 0.774803 4.59163C0.622526 4.65471 0.484163 4.74716 0.367615 4.86371C0.251066 4.98026 0.158616 5.11862 0.0955403 5.2709C0.0324649 5.42317 4.76581e-08 5.58638 5.48628e-08 5.75121C6.94133e-08 6.08408 0.132235 6.40333 0.367615 6.63871L4.11762 10.3887C4.23382 10.5059 4.37207 10.5989 4.52439 10.6623C4.67672 10.7258 4.8401 10.7585 5.00511 10.7585C5.17013 10.7585 5.33351 10.7258 5.48584 10.6623C5.63816 10.5989 5.77641 10.5059 5.89262 10.3887C6.00847 10.2719 6.10012 10.1334 6.16233 9.98109C6.22453 9.82879 6.25607 9.66572 6.25511 9.50121Z" fill="white"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonglishSectionOne",
};
</script>

<style scoped>
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
.logo {
    margin-top: 10px;
    margin-inline-start: 20px;
    direction: rtl;
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

.adults-sec1 h3 {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.adults-sec1 h1 {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  font-size: 4rem;
  margin: 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.adults-sec1 h2 {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  font-size: 3rem;
  margin: 1rem 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.adults-sec1 p {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8;
  margin: 1rem 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
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

@media screen and (max-width: 1024px) {
  .text-container {
    max-width: 60%;
  }

  .adults-sec1 h1 {
    font-size: 2.5rem;
  }

  .adults-sec1 h2 {
    font-size: 1.8rem;
  }

  .adults-sec1 p {
    font-size: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .adults-sec1 {
    flex-direction: column;
    height: auto;
    padding: 3rem 1rem;
  }

  .text-container {
    max-width: 80%;
    padding-top: 2rem;
  }

  .adults-sec1 h1 {
    font-size: 2rem;
  }

  .adults-sec1 h2 {
    font-size: 1.5rem;
  }

  .adults-sec1 p {
    font-size: 0.95rem;
  }

  .adults-sec1 button {
    width: 70%;
    margin: 1rem auto 0;
  }
}

@media screen and (max-width: 480px) {
  .text-container {
    max-width: 100%;
  }

  .adults-sec1 h1 {
    font-size: 1.8rem;
  }

  .adults-sec1 h2 {
    font-size: 1.2rem;
  }

  .adults-sec1 p {
    font-size: 0.85rem;
  }

  .adults-sec1 button {
    width: 90%;
  }
}
</style>
