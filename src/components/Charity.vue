<template>
    <section class="charity__section">
        <div class="container">
            <div class="row">

                <div class="charity__content">
                    <h2 class="charity__content-title">{{ charityContent.title }}</h2>

                    <div class="charity__step" v-for="(step, idx) in charityContent.charitySteps" :key="idx">
                        <img :src="step.icon" alt="" class="charity__step-icon">
                        <p class="charity__step-name">{{ step.name }}</p>
                    </div>

                    <p class="charity__content-text">{{ charityContent.text }}</p>

                    <router-link to="/" class="charity__link">{{ charityContent.linkName }}</router-link>
                </div>

                <img :src="charityContent.img" alt="" class="charity-img">

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Charity',
    data() {
        return {
            charityContent: {
                title: 'как WorkTap помогает бизнесу?',
                img: require('@/assets/images/home/main/charity/charity-img.png'),
                linkName: 'начать!',
                charitySteps: [
                    {
                        icon: require('@/assets/images/home/main/charity/credit-card.svg'),
                        name: 'Оплачивайте с р/с или карты компании'
                    },
                    {
                        icon: require('@/assets/images/home/main/charity/money.svg'),
                        name: 'Экономьте до 87% бюджета на фрилансе'
                    },
                    {
                        icon: require('@/assets/images/home/main/charity/clock.svg'),
                        name: 'Экономьте до 75% времени на решении фриланс задач'
                    },
                ],
                text: 'workTap — быстро, просто и безопасно!',
                buttonText: 'начать!'
            },
        }
    }
}
</script>

<style lang="scss" scoped>

.charity__section {
    width: 100%;
    padding: 50px 0;
    background: linear-gradient(180deg, #E2A401 -1.38%, #E6A901 17.18%, #E3A401 28.99%, #E5A800 43.17%, #EEB301 77.27%, #EFB400 100%);

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .charity__content {
        max-width: 535px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &-title {
            font-size: 24px;
            color: var(--white-color);
            
            &::first-letter {
                text-transform: uppercase;
            }
        }

        &-text {
            font-size: 20px;
            font-weight: 600;
            color: var(--white-color);
            
            &::first-letter {
                text-transform: uppercase;
            }
        }

        .charity__step {
            width: 100%;
            background: #F6FAFD;
            box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.04);
            border-radius: 20px;
            padding: 20px;
            display: flex;
            column-gap: 25px;
            align-items: center;

            &-icon {
                max-width: 50px;
                min-width: 50px;
                width: 100%;
                max-height: 50px;
                min-height: 50px;
                height: 100%;
                object-fit: cover;
            }

            &-name {
                font-size: 14px;
                color: var(--primary-color);
                font-weight: 600;
            }
        }
    }

    .charity-img {
        max-width: 50%;
        width: 100%;
        object-fit: cover;
    }

    .charity__link {
        max-width: 220px;
        width: 100%;
        display: grid;
        place-items: center;
        padding: 15px;
        border-radius: 50px;
        background: #5E4EDB;
        font-size: 20px;
        color: var(--white-color);
        font-weight: 600;
        text-transform: capitalize;
        transition: .4s;
        border: solid 3px transparent;

        &:hover {
            background: transparent;
            color: #5E4EDB;
            border-color: #5E4EDB;
        }
    }
}

</style>