<template>
  <div class="form-section">
    <div class="content-container">
      <div class="text-container">
        <h1>سجل بياناتك</h1>
        <p>
          احجز مقعدك اليوم وانضم إلى الآلاف من الطلاب الذين حققوا نجاحات باهرة من خلال برامجنا التفاعلية والمعتمدة دوليًا. مع دعم كامل ومصادر تعليمية متقدمة، سنكون معك في كل خطوة لتحقيق أهدافك اللغوية. لا تفوت الفرصة!
        </p>
      </div>
      <form @submit.prevent="register" class="pop-form">
        <div class="inline-group">
          <div class="form-pop">
            <label for="fullName" class="pop-label">الاسم الكامل</label>
            <input type="text" class="pop-input" id="fullName" placeholder="الاسم الكامل" v-model="fullName" required />
          </div>
          <div class="form-pop">
            <label for="phoneNumber" class="pop-label">كود الدولة متبوعا برقم الواتس أب</label>
            <vue-tel-input 
                class="pop-input" 
                style="direction:ltr; color:black;"
                v-model:phoneNumber="phoneNumber" 
                v-model:country="country" 
                @input="onPhoneInput" 
                @validate="onPhoneValidate" 
                mode="international" 
                :preferred-countries="['SA', 'KW', 'AE', 'QA', 'EG', 'JO', 'OM', 'YE', 'BH', 'IQ']" 
                defaultCountry="SA" 
                :inputOptions="inputOptions" 
                :inputprops="{ name: 'phoneNumber', id: 'phoneNumber', required: true, placeholder: 'رقم الهاتف' }" 
                :disabled="loading" 
            />
          </div>
        </div>
        <div class="form-pop">
          <label for="email" class="pop-label">البريد الإلكتروني</label>
          <input type="email" class="pop-input" id="email" placeholder="example@email.com" v-model="email" required />
        </div>
        <input type="hidden" v-model="fullPhoneNumber" />
        <input type="hidden" v-model="countryCode" />
        <button type="submit" class="pop-btn">اشترك الآن</button>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VueTelInput } from 'vue3-tel-input';
import 'vue3-tel-input/dist/vue3-tel-input.css';

export default {
  components: {
    VueTelInput,
  },
  data() {
    return {
      fullName: '',
      email: '',
      phoneNumber: '',
      country: null,
      inputOptions: {
        hiddenInput: true,
      },
      isValidPhone: false,
      fullPhoneNumber: '',
      loading: false,
      successMessage: '', // New variable for success message
    };
  },
  methods: {
    onPhoneInput(formattedNumber, phoneObject) {
      if (phoneObject && phoneObject.number) {
        this.fullPhoneNumber = phoneObject.number;
      }
    },
    onPhoneValidate(isValid, phoneObject) {
      this.isValidPhone = isValid;
      if (isValid && phoneObject && phoneObject.number) {
        this.fullPhoneNumber = phoneObject.number;
      }
    },
    register() {
      if (!this.fullPhoneNumber) {
        console.error('Phone number is missing or invalid.');
        return;
      }

      // Start loading
      this.loading = true;

      const payload = {
        name: this.fullName,
        email: this.email,
        phone: this.fullPhoneNumber,
      };

      let headers = { 'Content-Type': 'application/json' };
      axios.post(`/api/free-session-forms`, payload, { headers })
        .then(response => {
          const data = response.data;
          if (response.status === 201) {
            console.log('Form submitted successfully:', data);
            this.successMessage = 'تم التسجيل بنجاح!'; // Success message
            // Clear input fields
            this.fullName = '';
            this.email = '';
            this.phoneNumber = '';
            this.fullPhoneNumber = '';
            this.country = null; // Reset the country as well
          } else {
            console.error('Error in response:', data.message || 'Unknown error');
          }
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        })
        .finally(() => {
          // Stop loading
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.form-section {
  background-image: url('@/assets/images/form.png');
  background-size: cover;
  background-position: center;
  direction: rtl;
  text-align: right;
  color: #fff;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  display: flex;
  justify-content: center; 
  padding: 40px; 
  transition: background 0.5s; /* Smooth background transition */
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  width: 100%;
  max-width: 1200px; /* Maximum width for better layout */
  margin: 0 auto; /* Center the content */
  padding: 10% 0;
  border-radius: 15px; /* Added rounded corners for a softer look */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

.text-container {
  width: 45%; /* Adjusted width */
  padding: 10px; /* Add padding around the text */
}

h1 {
  margin-bottom: 15px; /* Increased spacing below heading */
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}

p {
  color: #fff; /* Ensure the paragraph text is visible */
  margin-bottom: 25px; /* Increased spacing below paragraph */
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}

.pop-form {
  text-align: right;
  direction: rtl;
  width: 45%; /* Adjusted width */
}

.pop-input {
  width: calc(100% - 1.25em);
  padding: 0.8em;
  margin: 0;
  border-radius: 15px;
  background-color: #f3f7ff;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: border 0.3s; /* Smooth border transition */
  height: 30px; /* Set a consistent height */
}

.pop-input:focus {
  border: 2px solid #ff9442; /* Highlight on focus */
}

form .form-pop {
  margin-bottom: 20px; 
}

.pop-label {
  display: block;
  margin-right: 0.75em;
  text-align: right;
  font-weight: 500;
  color: #bababa;
  margin-bottom: 5px;
}

.inline-group {
  display: flex;
  justify-content: space-between;
}

.pop-btn {
  background: linear-gradient(45deg, #ff9442, #ff6f00);
  color: white;
  border: none;
  padding: 0.1em 0.8em 0.4em 0.8em; /* Increased padding for a better button size */
  cursor: pointer;
  border-radius: 25px;
  width: 100%; /* Adjusted button width */
  margin-top: 20px; /* Margin for better spacing */
  font-size: 1.3em; 
  transition: background 0.3s, transform 0.3s; /* Transition effects */
    font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}

.pop-btn:hover {
  background: linear-gradient(45deg, #ff6f00, #ff9442);
  transform: scale(1.05); /* Slightly enlarge on hover */
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(0, 128, 0, 0.1); /* Light green background */
  color: #008000; /* Dark green text */
  border: 1px solid #008000; /* Green border */
  border-radius: 5px;
  text-align: center; /* Center text */
}
</style>
