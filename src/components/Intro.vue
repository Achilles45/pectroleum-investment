<template>
  <div class="intro">
     <div class="container">
          <div class="row">
          <div class="col-md-6 image__holder">
              <img src="../assets/images/slider3.jpg" class="img-fluid image" alt=""><br><br>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
              <h2>About Pectroleum Investment</h2>
              <hr>
              <p>Pectroleum Investment is your company of choice that allows you make high interest yielding and secured investments into oil and gas related opportunities that would otherwise not be available to the general public. Our expert team of fund managers and traders will trade pectroleum related products for good returns. <br>You too can start earning our 50% in 7 days for initial investment, or 50% in 44 hours when you select our promo plans <br>PLEASE NOTE THAT INITIAL INVESTMENT FOR ALL MEMBERS IS COMPULSORY</p>
               <router-link to="/signup" class="intro-btn animated zoomIn animate3d">Get Started <i class="fas fa-long-arrow-alt-right"></i> </router-link>
          </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.intro{
    padding: 5rem 0;
    background: $primary-color;
    color: #fff;
    // .image__holder::after{
    //     content: "";
    //     width: 200px;
    //     position: absolute;
    //     margin: 0 auto;
    //     height: 100%;
    //     width: 95%;
    //     background: transparent;
    //     border: 5px solid $primary-color;
    //     left: 50px;
    //     right: 0;
    //     bottom: 30px;
    //     z-index: -10;
    // }
    .image{
        border-radius: 4px;
    }
    h2{
        font-weight: bolder;
        color: #fff;
        font-size: 2.5rem;
    }
//       h2::after {
// 	content: "";
// 	width: 200px;
// 	position: absolute;
// 	margin: 0 15px;
// 	height: 5px;
// 	background: $secondary-color;
// 	left: 0;
// 	right: 0;
//     top: 150px;
// }
    p{
        line-height: 2;
        padding-top: 1.3rem;
        color: #fff;
        opacity: .5;
        font-size: .82rem;
        padding-bottom: 1.5rem;
    }
    hr{
        background: #fff;
        opacity: .7;
    }
    .intro-btn {
      color: #fff;
      background: $secondary-color;
      padding: 1.2rem 2rem;
      text-align: center;
      font-size: .9rem;
      font-weight: normal;
      text-decoration: none;
      border-radius: 50px;
      border: 1px solid $primary-color;
      text-transform: capitalize;
    }
}

//Media Queries
@media only screen and (max-width: 600px){
    h2{
        font-size: 1.8rem !important;
        line-height: 1.5 !important;
    }
}
</style>