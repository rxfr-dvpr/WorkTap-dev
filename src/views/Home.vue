<template>
  <Nav/>

  <header class="header">
    <div class="container">
      <div class="row">

        <div class="header__content">

          <div class="header__desc">
            <h1 class="header__desc-title" v-html="headerDesc.title"></h1>
            <p class="header__desc-text">{{ headerDesc.text }}</p>
          </div>
          
          <SearchForm placeHolder="Что нужно сделать?"/>

          <Tags :tagsList="tags"/>
        </div>

        <img :src="headerImg" alt="" class="header-img"/>
      </div>

    </div>
  </header>

  <main class="main">
    <ActualWorks />

    <TopFreelancers />

    <Tasks />

    <Charity />
  </main>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import ActualWorks from "@/components/Actual-Works.vue";
import Charity from "@/components/Charity.vue";
import TopFreelancers from "@/components/Top-Freelancers.vue";
import Tasks from "@/components/Tasks.vue";
import SearchForm from '@/components/Search-Form.vue';
import Tags from '@/components/Tags.vue';

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
    ActualWorks,
    Charity,
    TopFreelancers,
    Tasks,
    SearchForm,
    Tags
  },
  data() {
    return {
      headerImg: require("@/assets/images/home/header/header-img.png"),
      headerDesc: {
        title: "покупайте фриланс-услуги <span>в два клика</span>",
        text: "ворк — единица работы продавца, которую можно купить как товар в магазине ",
      },
      tags: [
        {
          name: "Все подкатегории",
          category: "texts",
          active: true
        },
        {
          name: "Дизайн",
          category: "texts",
          active: false
        },
        {
          name: "Дизайн сайтов",
          category: "texts",
          active: false
        },
        {
          name: "Дизайн логотипа",
          category: "texts",
          active: false
        },
        {
          name: "Дизайн визиток",
          category: "texts",
          active: false
        },
        {
          name: "Арт и иллюстрации",
          category: "texts",
          active: false
        },
        {
          name: "Флаера и брошюры",
          category: "texts",
          active: false
        },
        {
          name: "Баннеры и стенды",
          category: "texts",
          active: false
        },
        {
          name: "Дизайн презентации",
          category: "texts",
          active: false
        },
      ],
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 30px 0 60px;
  background: #f7f6ff;

  .row {
    justify-content: space-between;
    align-items: center;
  }

  .header__content {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }

  .header__desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    &-title {
      font-size: 36px;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    &-text {
      font-size: 17px;
      font-weight: 500;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .header-img {
    max-width: 600px;
    width: 100%;
    object-fit: cover;
  }
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  padding: 30px 0 0;
}

</style>