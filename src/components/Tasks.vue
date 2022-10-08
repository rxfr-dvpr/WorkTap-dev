<template>
    <section class="tasks__section">
        <div class="container">
            <div class="row">

                <div class="tasks__desc">
                    <h2 class="tasks__desc-title">
                        {{ tasksDesc.title }}
                    </h2>
                    <p class="tasks__desc-text">
                        {{ tasksDesc.text }}
                    </p>
                </div>

                <div class="tasks__cards">

                    <div class="tasks__card" v-for="(card, idx) in data.tasksCards" :key="idx">
                        <img :src="require(`@/assets/${card.img}`)" alt="" class="tasks__card-img">

                        <div class="tasks__card-desc">
                            <p class="tasks__card-name">
                                {{ card.name }}
                            </p>

                            <p class="tasks__card-text">
                                {{ card.text }}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/js/data'

export default {
    name: 'Tasks',
    data() {
        return {
            data,
            tasksDesc: {
                title: 'как решать задачи на WorkTap?',
                text: 'идеально подходит для бизнеса и частных лиц'
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.tasks__section {
    widows: 100%;
    padding: 30px 0;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .tasks__desc {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 12px;

        &-title {
            color: var(--primary-color);
        }

        &-text {
            &::first-letter {
                text-transform: uppercase;
            }
        }

    }

    .tasks__cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 55px;
        row-gap: 40px;

        .tasks__card {
            max-width: 390px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 20px;

            &-img {
                max-width: 83px;
                min-width: 70px;
                width: 100%;
                object-fit: cover;
                max-height: 83px;
                min-height: 70px;
                height: 100%;
                object-position: top;
            }

            &-desc {
                display: flex;
                flex-direction: column;
                row-gap: 20px;   
            }

            &-name {
                font-size: 18px;
                font-weight: 600;
                color: var(--primary-color);
                
                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-text {
                font-size: 14px;
                color: var(--primary-color);
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }
    }
}
</style>