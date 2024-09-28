<template>
  <!--Section Four Content-->
  <div class="kids-sec4">
    <div class="immerse-row">
  <h3>Internationally Accredited <br> and High Quality at Every Step!</h3>
  <p>The academy is an accredited entity for providing training courses (Accredited Training Provider) in accordance with its accreditation by the International Organization for Training Quality – USA IOTQ USA. This accreditation indicates the quality of the training courses, and it encompasses all entities, locations, and activities of the Monglish Global Academy.</p>
</div>
    <div class="kids-sec4-imgs">
        <img src="@/assets/images/Logos.png"/>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'AdultsSec4',
}
</script>

<style scoped>
.kids-sec4 {
  background-image: url('@/assets/images/bg2.png');
  background-size: cover;
  background-position: center;
  direction: ltr;
  text-align: center;
  color: #fff;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  padding: 2em 2em 8em 2em;
}

.immerse-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2em;
  margin: 1em 0;
  font-family: 'DIN Next LT Arabic', sans-serif;
}

.immerse-row h3 {
  color: #fff;
  font-size: 2.5rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}

.immerse-row p {
  font-size: 1.275rem;
  color: #fff;
  font-weight: 500;
  max-width: 70%;
  margin: 0 auto;
}

.kids-sec4-imgs {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4%;
  width: 100%; /* Full width for mobile view */
}

.kids-sec4-imgs img {
  width: 80%;
}

@media (min-width: 769px) {
  .immerse-row {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
  .immerse-row h3 {
    width: 40%;
    margin: 0;
    padding-left: 30px;
  }
  .immerse-row p {
    width: 60%;
    margin: 0;
    padding-right: 25px;
  }
}

@media (max-width: 1200px) {
  .kids-sec4 h3 {
    font-size: 2.2rem;
  }
  .kids-sec4 h1 {
    font-size: 2.5rem;
  }
  .kids-sec4 p {
    font-size: 1.1rem;
    padding: 1% 15% 5% 15%;
  }
}

@media (max-width: 768px) {
  .kids-sec4 {
    background-image: url('@/assets/images/bg.jpg'); 
    padding: 2em 0 2em 0;
  }
  
  .immerse-row {
    margin: 0;
  }
  
  .kids-sec4 h3 {
    font-size: 1.8rem;
    padding: 0;
    margin: 0;
  }
  
  .kids-sec4 h1 {
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  
  .kids-sec4 p {
    font-size: 1.25rem;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .kids-sec4-imgs {
    padding: 1em 0;
    background-color: white; 
    width: 100%;
    margin-top: 1em;
  }

  .kids-sec4-imgs img {
    width: 100%; /* Ensure image takes full width of the container */
  }
}
</style>
