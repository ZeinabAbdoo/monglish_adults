<template>
  <!--Section Three Content-->
  <div class="kids-sec3">
    <h1>The philosophy of the Mongi - immers</h1>
    <div class="kids-iframe-container">
      <iframe 
        src="https://player.vimeo.com/video/822494136" 
        frameborder="0" 
        allow="autoplay; fullscreen" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.kids-sec3 {
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  position: relative;
  align-items: center;
  overflow: hidden;
  font-family: 'DIN Next LT Arabic', sans-serif;
  padding: 1em;
}
.kids-sec3 h1 {
  font-size: 2.8em;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}
.kids-iframe-container {
  position: relative;
  width: 80%;
  height: 0;
  padding-bottom: 45%;
  margin-bottom: 1em;
  border-radius: 2em;
}
.kids-iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2em;
}
@media (max-width: 1200px) {
  .kids-sec3 h1 {
    font-size: 2.2em;
  }
  .kids-iframe-container {
    width: 90%;
    padding-bottom: 50%;
  }
}
@media (max-width: 768px) {
  .kids-sec3 h1 {
    font-size: 1.8em;
  }
  .corner-img {
    width: 20%;
  }
  .kids-iframe-container {
    width: 95%;
    padding-bottom: 56.25%; 
  }
}
@media (max-width: 480px) {
  .kids-sec3 h1 {
    font-size: 1.5em;
  }
  .corner-img {
    width: 25%;
  }
  .kids-iframe-container {
    width: 100%;
    padding-bottom: 60%;
  }
}
</style>