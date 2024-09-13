<template>
  <div class="middle">
    <div class="pic">
      <img :src="imgUrl" alt="" class="pic2">
    </div>
    <div class="about">
      <h1> What Are We All About? </h1>
      <p> Capture Words offers framed posters of famous anime quotes that are motivating and amusing to everyone. Capture Words also offers all different sizes of frames and this will be convenient for everyone, whether they would like a large frame to hang in wall of their homes or office, or a small frame to put by their bedside table. </p>
      <p> We also have amazing deals where you can get 2 to 3 framed posters at a very low price and these deals are only available on every public holiday, where we open from 09:00 and close very early at 13:00. We also have voucher cards that you can use to purchase someone a lovely gift and to have these cards you can buy them online or go to your nearest Capture Words store to buy them. </p>
    </div>

  </div>
  <div class="hours">
    <table border="2">
      <thead>
        <tr>
          <th colspan="8" class="col"> Trading Hours </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="space"><b> Weekdays </b></td>
          <td> <b> Mondays </b> </td>
          <td> <b> Tuesdays </b> </td>
          <td> <b> Wednesdays </b> </td>
          <td> <b> Thursdays </b> </td>
          <td> <b> Fridays </b> </td>
          <td> <b> Saturdays </b> </td>
          <td> <b> Sundays </b> </td>
        </tr>
        <tr>
          <td class="space"><b> Time </b></td>
          <td> <b> 08:00 - 18:00 </b> </td>
          <td> <b> 08:00 - 18:00 </b> </td>
          <td> <b> 08:00 - 18:00 </b> </td>
          <td> <b> 08:00 - 18:00 </b> </td>
          <td> <b> 08:00 - 18:00 </b> </td>
          <td> <b> 09:00 - 16:00 </b> </td>
          <td> Closed </td>
        </tr>
      </tbody>
    </table>
    <div class="about2">
      <h1> More About Us </h1>
      <p> <b> History: </b> Our company was founded by Yonela Mangele and his closest friend Lilitha Simangala on National Anime Day (April 15th) in 2024. Yonela was always fond of motivational quotes, especially those said in anime and he always envisioned of starting a company that offered products with captivating quotes imprinted on them.  </p>
      <p> <b> Our Mission:</b> We strive to have a respective relationship with customers, suppliers and our amazing employees. We also work on making sure that a customer's satisfaction is met, providing them with the best of products and most importantly, providing a safe and a healthy environment to our employees. </p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        imgUrl: 'https://yonelamangele.github.io/Capstone/images/woman%20hanging%20pic.jpg'
      }
    },
}
</script>

<style scoped>

.pic {
  padding: 1ch;
  height: 300px;
}

.about {
  padding: 3ch;
  background-color: #383838;
  border-radius: 2ch;
}

.about2 {
  margin: 2ch;
  margin-top: 8ch;
  padding: 3ch;
  background-color: #383838;
  border-radius: 2ch;
}

.middle {
    margin: 1ch;
    height: 318px;
    display: flex;
    justify-content: space-evenly;
}

  h1 {
    text-align: center;
    font-family: "Rubik Glitch", system-ui;
  }

  .pic2 {
    height: 300px;
    width: 450px;
    border: 5px solid white;
    border-radius: 2ch;
  }

  .about {
    align-content: center;
  }

  .hours {
    margin-top: 80px;
  }

  table {
    margin: auto;
    margin-top: 10ch;
    background-color: #484848;
  }

  th, td {
    border: 2px solid white;
    text-align: center;
  }
  

  .col {
    text-align: center;
  }

  .space {
    padding: 7px;
  }
</style>