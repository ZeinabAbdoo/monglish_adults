<template>
  <div class="packages">
    <div class="packages-title-n">
      <h3>قائمة الأسعار</h3>
      <h1>تعليم متقن، استثمار ذكي</h1>
    </div>

    <!-- Package Duration Selection (Only for adults) -->
    <div class="packages-menu-n" v-if="selectedFilter === 'adults'">
      <ul>
        <li @click="selectMenu('two-months')" :class="{ selected: selectedMenu === 'two-months' }">شهرين</li>
        <li @click="selectMenu('four-months')" :class="{ selected: selectedMenu === 'four-months' }">4 أشهر</li>
        <li @click="selectMenu('six-months')" :class="{ selected: selectedMenu === 'six-months' }">6 أشهر</li>
      </ul>
    </div>

    <!-- Adults Packages -->
    <div class="packages-cards" v-if="selectedFilter === 'adults'">
      <div class="packages-cards"  v-if="selectedMenu === 'two-months'">
        <!-- Two Months Cards -->
        <div class="package-card">
          <div class="card-header">
             <h3>
                <span> (شهرين) </span>
                <br>
                المعايشة بلس
             </h3>
          </div>

          <div class="card-body">
            <p>“المعيشة بلس” هي باقتك المثالية، تقدم أقصى قيمة مقابل السعر بميزات فريدة وخدمة شاملة تضمن راحتك.</p>
            <h2>{{ prices[3]?.price }}</h2>
            
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى لايف كوتش:<span>جلسة مجانية</span></li>
              <li>نادى الصوتــــــــــيات:<span>بطلب من المدرب</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <a :href="'https://www.monglish.co.uk/ar/adult-courses#packages-section'" class="purchase-btn">اذهب لشرائه</a>
          </div>
        </div>
        <div class="package-card">
          <div class="card-header">
            <h3><span> (شهرين)</span>
            <br>المعايشة</h3>
          </div>
          <div class="card-body">
            <p>باقة “المعيشة” توفر العديد من الميزات وهي الخيار المعتاد لعملائنا، تضمن الراحة والخدمات المتميزة بكفاءة.</p>
            <h2>{{ prices[2]?.price }}</h2>
            
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <a :href="'https://www.monglish.co.uk/ar/adult-courses#packages-section'" class="purchase-btn">اذهب لشرائه</a>
          </div>
        </div>
        <div class="package-card">
          <div class="card-header">
            <h3><span> (شهرين)</span>
            <br>
            أساسية</h3>
          </div>
          <div class="card-body">
            <p>باقة مونجلش الأساسية هي الأقل سعراً، ولكنها تحتوي على بعض ميزات دوراتنا التي توفر تجربة تعليمية مميزة.</p>
            <h2>{{ prices[1]?.price }}</h2>
            
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة شهرياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <a :href="'https://www.monglish.co.uk/ar/adult-courses#packages-section'" class="purchase-btn">اذهب لشرائه</a>
          </div>
        </div>
      </div>

      <div class="packages-cards" v-else-if="selectedMenu === 'four-months'">
        <!-- Four Months Cards -->
        <div class="package-card">
          <div class="card-header">
            <h3>
              <span> (4 شهور)</span>
              <br>
              المعايشة بلس</h3>
          </div>
          <div class="card-body">
            <p>“المعيشة بلس” هي باقتك المثالية، تقدم أقصى قيمة مقابل السعر بميزات فريدة وخدمة شاملة تضمن راحتك.</p>
            <h2>
              {{ prices[6]?.price }}
              <span class="sloped-line">{{ prices[6]?.beforePrice }}</span> 
            </h2>
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى لايف كوتش:<span>جلسة مجانية</span></li>
              <li>نادى الصوتــــــــــيات:<span>بطلب من المدرب</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <a :href="'https://www.monglish.co.uk/ar/adult-courses#packages-section'" class="purchase-btn">اذهب لشرائه</a>
          </div>
        </div>

        <div class="package-card">
          <div class="card-header">
            <h3>
              <span> (4 شهور)</span>
              <br>
              المعايشة</h3>
          </div>
          <div class="card-body">
            <p>باقة “المعيشة” توفر العديد من الميزات وهي الخيار المعتاد لعملائنا، تضمن الراحة والخدمات المتميزة بكفاءة.</p>
            <h2>
              {{ prices[5]?.price }}
              <span class="sloped-line">{{ prices[5]?.beforePrice }}</span> 
            </h2>
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <a :href="'https://www.monglish.co.uk/ar/adult-courses#packages-section'" class="purchase-btn">اذهب لشرائه</a>
          </div>
        </div>

        <div class="package-card">
          <div class="card-header">
            <h3>
              <span> (4 شهور)</span>
              <br>
              أساسية</h3>
          </div>
          <div class="card-body">
            <p>باقة مونجلش الأساسية هي الأقل سعراً، ولكنها تحتوي على بعض ميزات دوراتنا التي توفر تجربة تعليمية مميزة.</p>
            <h2>{{ prices[4]?.price }}</h2>
          
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>إجتماع شهري لأولياء الأمور</li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <a :href="'https://www.monglish.co.uk/ar/adult-courses#packages-section'" class="purchase-btn">اذهب لشرائه</a>
          </div>
        </div>
      </div>

      <div class="packages-cards" v-else-if="selectedMenu === 'six-months'">
      <!-- Six Months Cards -->      
      <div class="package-card">
        <div class="card-header">
            <h3>
              <span> (6 اشهر)</span>
              <br>
              المعايشة بلس</h3>
             <p class="badge"><span>الأفضل <br><bold>قيمة</bold></span></p>
          </div>
        <div class="card-body">
          <p>“المعيشة بلس” هي باقتك المثالية، تقدم أقصى قيمة مقابل السعر بميزات فريدة وخدمة شاملة تضمن راحتك.</p>
          <h2>
              {{ prices[10]?.price }}
              <span class="sloped-line">{{ prices[10]?.beforePrice }}</span> 
            </h2>
          <h6>واستمتع بالاتي:</h6>
          <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى لايف كوتش:<span>جلسة مجانية</span></li>
              <li>نادى الصوتــــــــــيات:<span>بطلب من المدرب</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
          <a :href="'https://www.monglish.co.uk/ar/package/'" class="purchase-btn">
             اذهب لشرائه
            </a>
        </div>
      </div>
      <div class="package-card">
        <div class="card-header">
            <h3>
              <span> (6 اشهر)</span>
              <br>
              المعايشة</h3>
             <p class="badge"><span>الأفضل <br><bold>مبيعاً</bold></span></p>
        </div>
        <div class="card-body">
          <p>باقة “المعيشة” توفر العديد من الميزات وهي الخيار المعتاد لعملائنا، تضمن الراحة والخدمات المتميزة بكفاءة.</p>
          <h2>
              {{ prices[9]?.price }}
              <span class="sloped-line">{{ prices[9]?.beforePrice }}</span> 
            </h2>
          <h6>واستمتع بالاتي:</h6>
          <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
          <a :href="'https://www.monglish.co.uk/ar/package/'" class="purchase-btn">
             اذهب لشرائه
            </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        selectedFilter: 'adults',
        selectedMenu: 'two-months',
        prices: {},
      };
    },
    methods: {
      toggleFilter(event) {
        this.selectedFilter = event.target.checked ? 'adults' : 'kids';
        if (this.selectedFilter === 'adults') {
          this.selectedMenu = 'two-months';
        } else {
          this.selectedMenu = 'two-months';
        }
      },
      selectMenu(menu) {
        this.selectedMenu = menu;
      },
      fetchPackagePrices() {
        let url = sessionStorage.getItem('userInfo') ? '/api/user/get-course-packages' : '/api/session/get-course-packages';
        const userInfo = sessionStorage.getItem('userInfo');
        let headers = {};
        if (userInfo) {
          try {
            const parsedUserInfo = JSON.parse(userInfo);
            const token = parsedUserInfo.token;
            if (token) {
              headers['Authorization'] = `Bearer ${token}`;
            }
          } catch (error) {
            console.error('Error parsing userInfo from sessionStorage:', error);
          }
        }
        axios.get(url, { headers })
        .then(response => {
          const data = response.data;
          console.log('Full API response:', data); 
          this.prices = {};

          if (data.success) {
            const packages = data.data;
            packages.forEach((packageData) => {
              console.log('Package Data:', packageData); 

              const packageId = packageData.id;
              const packagePrice = packageData.packagePrice;
              const beforePrice = packageData.packageBeforePrice;
              const currency = packageData.currency_ar;

              console.log('beforePrice:', beforePrice); 
              this.prices[packageId] = {
                price: `${packagePrice} ${currency}`,
                beforePrice: beforePrice ? `${beforePrice} ${currency}` : null,
                packageId: packageId
              };
            });
          }
        })
        .catch(error => console.error('Error fetching package details:', error));

      },
    },
    mounted() {
      this.fetchPackagePrices();
    },
  };
</script>

<style scoped>
.packages{
  direction: rtl;
}
.packages-filter-switch {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    position: relative;
}

.label-out {
    position: absolute;
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 20px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 45px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 35px;
    width: 35px;
    left: 5px;
    bottom: 5px;
    background-color: orange;
    border-radius: 50%;
    transition: transform 0.4s;
}

input:checked + .slider:before {
    transform: translateX(75px);
}

input:checked ~ .slider .label-left {
    opacity: 1;
}

input:checked ~ .slider .label-right {
    opacity: 0;
}

input:not(:checked) ~ .slider .label-left {
    opacity: 0;
}

input:not(:checked) ~ .slider .label-right {
    opacity: 1;
}

.label {
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    color: orange;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}

.label-left {
    left: 15px;
}

.label-right {
    right: 15px;
}

.packages {
    background-image: url('@/assets/images/bg.jpg');
    background-size: cover;
    background-position: center;
    font-family: 'DIN Next LT Arabic', sans-serif;
    padding: 20px 0;
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}
.packages-title-n {
    text-align: center;
    color: white;
}
.packages-title-n h3 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 30px;
}
.packages-title-n h1 {
    font-size: 3rem;
    font-weight: 500;
    line-height: 30px;
}
.packages-menu-n {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
}
.packages-menu-n ul {
    list-style: none;
    padding: 10px;
    display: flex;
    border-bottom: 1px solid black;
}
.packages-menu-n li {
    margin: 0 20px;
    color: white;
    cursor: pointer;
    position: relative;
}
.packages-menu-n li:hover, .packages-menu li:focus, .packages-menu li:active, .packages-menu li.selected {
    color: #ffa500;
}
.packages-menu-n li.selected::after {
  content: '';
  display: inline-block;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.2793 2.82026L4.10131 7.99818L9.2793 13.1761L7.22864 15.2268L-8.29697e-05 7.99818L7.22864 0.769531L9.2793 2.82026Z" fill="white"/><path d="M13.9493 15.2268L6.72069 7.99818L13.9493 0.769531L16 2.82026L10.8221 7.99818L16 13.1761L13.9493 15.2268Z" fill="white"/></svg>');
  width: 16px;
  height: 16px;
  position: absolute;
  right: -25px; 
  top: 50%;
  transform: translateY(-50%);
}
.packages-menu-n li.selected::before {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ffa500; 
  position: absolute;
  bottom: -10px;
  left: 0;
}
.packages-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center; 
}
.package-card {
    background: #fff;
    border-radius: 30px;
    padding: 20px;
    width: 100%;
    max-width: 320px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; 
}
.card-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.card-header h3{
    color: #000000;
    font-size: 27px;
    margin-top: 50px;
    margin-bottom: -25px;
}
.card-header h3 span{
    color: #175f87;
    font-size: 24px;
}
.card-header .badge {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-right: 160px solid transparent;
    border-top: 160px solid #ff8901;
    margin-top: -0.5px;
    border-radius: 20px 0 0 0;
}
.card-header .badge span {
    position: absolute;
    left: 15px;
    top:-150px;
    transform: rotate(-45deg);
    white-space: nowrap;
    font-size: 20px;
    color: #fff;
}
.card-header .badge bold{
    font-size: 32px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}    
.card-body p {
    color: #666;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 13px;
}
.card-body h2 {
    color: #F47D21 ;
    font-weight: 600;
    font-size: 34px;
    margin-bottom: 25px;
    margin-top: -15px;
}
.card-body h6{
    font-weight: 900;
    color: #000000;
    font-size: 14px;
    margin-top: -5px;
    margin-bottom: 5px;
}
.card-body ul {
    list-style: none;
    padding: 0;
}
.card-body li {
    position: relative;
    padding-right: 20px;
    margin-bottom: 10px;
    color: #666;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 5px;
}
.card-body li span{
    color: #f47e23;
}
.card-body li::before {
    content: '✓';
    position: absolute;
    right: 0;
    color: #f48026;
    font-weight: bold;
}
.card-body li:last-child {
    border-bottom: none;
    margin-bottom: 0;
}
.purchase-btn{
    width: 100%;
    padding: 8px 0;
    background: linear-gradient(45deg, #fe9b4f, #f47e23);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: larger;
    font-family: 'DIN Next LT Arabic', sans-serif;
    text-decoration: none;
    display: block;
    text-align: center;
}

@media (max-width: 800px) {
    .packages-title-n h3 {
        font-size: 1.5rem;
    }
    .packages-title-n h1 {
        font-size: 2rem;
    }
}
.sloped-line {
  position: relative;
  display: inline-block;
  color: #165E84;
  font-size: 30px;
  margin-right: 5%;
  opacity: 0.7; 
}
.sloped-line::after {
  content: '';
  position: absolute;
  top: 80%;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #FF4646; 
  transform: rotate(-15deg); 
  transform-origin: left center;
}
</style>
