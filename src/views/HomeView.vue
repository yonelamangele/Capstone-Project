<template>
  <div class="para" :style="{height: '20vh'}">
    <h3> Hello There! We're Capture Words, a world of powerful anime quotes <br> where you can capture words of your interest to customize your home, your office or any of your personal spaces. <br> Explore our amazing deals and have fun. </h3> 
  </div>
  <div class="main">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img :src="luffy" class="d-block w-100" alt="...">
          <h1 class="space"> <u> One Piece Poster </u> </h1>
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img :src="vegeta" class="d-block w-100" alt="...">
        <h1 class="space"> <u> Dragon Ball Poster </u> </h1>
      </div>
      <div class="carousel-item">
        <img :src="zenitsu" class="d-block w-100" alt="...">
        <h1 class="space"> <u> Demon Slayer Poster </u> </h1>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
    vegeta: 'https://yonelamangele.github.io/Capstone/images/vegeta_LE_auto_x2.jpg',
    luffy: 'https://yonelamangele.github.io/Capstone/images/luffy_LE_auto_x2.jpg',
    zenitsu: 'https://yonelamangele.github.io/Capstone/images/zenitsu_LE_auto_x2.jpg'
  }
}
}
</script>

<style scoped>
 h3 {
  text-align: center;
  font-family: "Rubik Glitch", system-ui;
  font-size: larger;
}

  @keyframes swing {
    20% {
      transform: rotate3d(0,0,1,10deg);
    }
    40% {
      transform: rotate3d(0,0,1,-10deg);
    }
    60% {
      transform: rotate3d(0,0,1,5deg);
    }
    80% {
      transform: rotate3d(0,0,1,-5deg);
    }
    to {
      transform: rotate3d(0,0,1,0deg);
    }
  }

  .para {
    animation: swing ease-in-out 8s;
    transform-origin: center -20px;
  }

  .carousel {
    width: 600px;
    height: 300px;
    justify-content: center;
  }

  img {
    width: 400px;
    height: 300px;
    border-radius: 1ch;
  }

  h1 {
    text-align: center;
    font-family: "Rubik Glitch", system-ui;
  }

  #carouselExampleInterval {
    padding: 22px;
  }

  .main {
    height: 390px;
    width: 600px;
    background-color: #383838;
    margin: auto;
    border-radius: 1ch;
  }

  .space {
    padding-top: 10px;
  }
</style>