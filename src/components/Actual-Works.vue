<template>
    <section class="actual-works__section">
        <div class="container">
            <div class="row">

                <h2 class="actual-works-title">{{ actualWorksTitle }}</h2>

                <div class="actual-works__cards">

                    <div class="actual-works__card" v-for="(card, idx) in data.actualWorksCards" :key="idx">
                        <div class="card-top">
                            <img :src="require(`@/assets/${card.img}`)" alt="" class="user-avatar">

                            <p class="user-job">{{ card.job }}</p>
                        </div>

                        <p class="job-info">{{ card.info }}</p>

                        <router-link to="/" class="look-link green-link">посмотреть</router-link>

                    </div>

                    <router-link to="/" class="see-all-works">Смотреть все ворки</router-link>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/js/data.js';
export default {
    name: 'Actual Works',
    data() {
        return {
            actualWorksTitle: 'актуальные ворки',
            data   
        }
    }
}
</script>

<style lang="scss" scoped>
.actual-works__section {
    width: 100%;
    padding: 30px 0;

    .row {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 50px;
    }

    .actual-works__cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        justify-items: center;

        .actual-works__card {
            max-width: 420px;
            width: 100%;
            padding: 20px;
            border-radius: 20px;
            border: 1px solid #F2F0FE;
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            cursor: pointer;
            transition: .4s;

            .card-top {
                width: 100%;
                display: flex;
                column-gap: 20px;
                align-items: center;

                img {
                    min-width: 42px;
                    max-width: 42px;
                    width: 100%;
                    min-height: 42px;
                    max-height: 42px;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                    user-select: none;
                }

                .user-job {
                    font-size: 18px;
                    font-weight: 600;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            }

            .job-info {
                font-size: 14px;
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .look-link {
                max-width: 100%;
            }
            
            &:hover {
                box-shadow: 0px 16px 16px rgba(34, 34, 34, 0.2);
            }
        }

        .see-all-works {
            max-width: 420px;
            width: 100%;
            background: var(--light-purple);
            border-radius: 20px;
            display: grid;
            place-items: center;
            color: var(--green-color);
            font-weight: 800;
            padding: 25px 15px;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

}
</style>