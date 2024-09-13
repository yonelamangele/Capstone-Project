<template>
    <div class="contact-section container">
      <section class="contact-content">
        <div class="info-header text-center">
            <h2 class="main-title mt-4 mb-4"> Reach out to us </h2>
          <p class="intro-text">
            If we can be of any assistance or if you would like to give us any feedback, please reach out to Capture Words.
          </p>
        </div>
        <div class="contact-row">
          <div class="contact-details">
            <div class="contact-box">
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="details">
                <h2 class="gang"> <u> You Can Find Our Store At </u> </h2>
                <p> 10 Imam Haron Road </p>
                <p> Capture Words </p>
                <p> 8000 </p>
              </div>
            </div>
  
            <div class="contact-box">
              <div class="icon">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="details">
                <h3> Phone Number </h3>
                <p> 067 935 6448 </p>
              </div>
            </div>
            <div class="contact-box">
              <div class="icon">
                <a class="email-link" href="mailto:admin@YteeBeautyCo.com">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
              <div class="details">
                <h3> Email Address </h3>
                <p> capturewords1700@gmail.com </p>
              </div>
            </div>
            <div class="contact-box">
              <div class="icon">
                <a class="social-link" href="https://www.instagram.com/thutznails">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
              <div class="details">
                <h3> Instagram </h3>
                <p> @CaptureWords </p>
              </div>
            </div>
          </div>
  
          <div class="form-container">
            <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST" @submit.prevent="handleSubmit">
              <h2 class="form-title"> <u> Contact Us </u> </h2>
              <div class="form-group">
                <input type="text" name="firstName" placeholder="First Name" required>
              </div>
              <div class="form-group">
                <input type="text" name="lastName" placeholder="Last Name" required>
              </div>
              <div class="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required>
              </div>
              <div class="form-group">
                <input type="email" name="email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <textarea name="message" placeholder="Your Message" required></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="submit-button">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleSubmit() {
        this.$refs.contactForm.submit();
      }
    }
  }
  </script>
  
  <style scoped>

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

  .main-title {
    animation: swing ease-in-out 5s;
    transform-origin: center;
  }
  
  .contact-section {
    /* padding: 20px; */
    font-family: "Rubik Glitch", system-ui;
  font-size: larger;
  }
  
  .info-header {
    padding: 20px;
  }
  
  .intro-text {
    font-size: 1.25rem;
  }
  /* .details {
  text-align: center;
} */
  
  .contact-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .contact-details,
  .form-container {
    background-color: #383838;
    padding: 20px;
    border-radius: 8px;
    width: 48%;
  }
  
  .contact-box {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  
  .icon {
    font-size: 30px;
    margin-right: 15px;
    /* color: #b23c5a; */
  }
  
  /* .details p {
    margin: 5px 0;
    color: #83334a;
  } */
  
  .address-link, .email-link, .social-link {
    color: white;
  }
  
  .form-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
  }
  
  .form-title {
    font-size: 2rem;
    color: #383838;;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #383838;;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
  }
  
  .contact-form textarea {
    resize: vertical;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #383838;; 
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: white;
    color: #383838;
    border: solid 2px #383838;
  }

  /* .gang {
    text-align: center;
  } */
  </style>
  