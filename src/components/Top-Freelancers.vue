<template>
    <section class="top-freelancers__section">
        <div class="container">
            <div class="row">

                <h2 class="top-freelancers-title">{{ topFreelancerTitle }}</h2>

                <div class="top-freelancers__cards">

                    <div class="top-freelancers__card" v-for="(card, idx) in data.topFreelancersCards" :key="idx">
                        <div class="top-freelancer-info">
                            
                            <div class="top__freelancer-img-box">
                                <img :src="require(`@/assets/${card.img}`)" alt="" class="top-freelancer-img">

                                <span class="online-dot" :class="card.online == 1 ? 'online' : 'offline'"></span>
                            </div>

                            <div class="top-freelancer-desc">
                                <p class="freelancer-name">{{ card.name }}</p>
                                <p class="freelancer-job">{{ card.job }}</p>
                                <p class="freelancer-projects">Выполено проектов: {{ card.doneProjects }}</p>
                            </div>
                        </div>

                        <button class="write-btn green-link">написать</button>
                    </div>

                    <router-link to="/" class="see-all-freelancers">Посмотреть всех ТОП фрилансеров</router-link>

                </div>

            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/js/data.js';

export default {
    name: 'Top Freelancers',
    data() {
        return {
            topFreelancerTitle: 'топ фрилансеров',
            data
        }
    }
}
</script>

<style lang="scss" scoped>

.top-freelancers__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 40px;
    }

    .top-freelancers__cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        justify-items: center;

        .top-freelancers__card {
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

            .top-freelancer-info {
                width: 100%;
                display: flex;
                justify-content: space-between;
                gap: 30px;
                align-items: center;

                .top__freelancer-img-box {
                    max-width: 150px;
                    width: 100%;
                    max-height: 150px;
                    height: 100%;
                    position: relative;

                    & > img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }

                    & > .online-dot {
                        max-width: 20px;
                        min-width: 20px;
                        width: 100%;
                        min-height: 20px;
                        max-height: 20px;
                        height: 100%;
                        display: block;
                        border-radius: 50%;
                        display: grid;
                        place-items: center;
                        position: absolute;
                        bottom: 0;
                        right: 20%;
                        background: red;
                        transition: .4s;

                        &.online {
                            background: var(--green-color);
                        }

                        &.offline {
                            background: #B0AAD0;
                        }
                    }
                }

                

                .top-freelancer-desc {
                    display: flex;
                    flex-direction: column;
                    row-gap: 8px;

                    .freelancer-name {
                        font-size: 16px;
                        font-weight: 500;
                    }

                    .freelancer-job {
                        color: var(--orange-color);
                        font-weight: 600;
                    }

                    .freelancer-projects {
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }

            .write-btn {
                max-width: 100%;
            }

            &:hover {
                box-shadow: 0px 16px 16px rgba(34, 34, 34, 0.2);
            }
        }
    }

    .see-all-freelancers {
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

</style>