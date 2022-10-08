<template>
    <nav class="nav">
        <div class="container">
            <div class="row">

                <router-link to="/" class="nav-logo">
                    <img :src="logoImg" alt="" class="logo-img">
                    <span class="logo-text">WorkTap</span>
                </router-link>

                <div class="nav__collapse">

                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in navLinks" :key="idx">
                            <router-link :to="`/${link.url}`" class="nav__list-link">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>

                    <div class="user-profile" v-if="signed">
                        <div class="user-links">
                            <router-link :to="link.url" class="profile-link" v-for="(link, idx) in userProfile.links" :key="idx" v-html="link.name"></router-link>
                        </div>

                        <div class="user-dropdown">
                        </div>
                    </div>

                    <div class="sign-btns" v-else>
                        <router-link to="/sign-up" class="sign-up-btn light-green-link">регистрация</router-link>
                        <router-link to="/sign-in" class="sign-in-btn green-link">войти</router-link>
                    </div>

                </div>

            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            navLinks: [
                {
                    name: 'биржа',
                    url: 'exchange',
                },
                {
                    name: 'ворки',
                    url: 'works',
                },
                {
                    name: 'конкурсы',
                    url: 'contests',
                },
                {
                    name: 'создать заказ',
                    url: 'create-order',
                }
            ],
            logoImg: require('@/assets/images/logo.svg'),
            userProfile: {
                links: [
                    {
                        name: '<i class="fas fa-star"></i>',
                        url: 'favourites'
                    },
                    {
                        name: '<i class="fas fa-bell"></i>',
                        url: 'notifications'
                    },
                    {
                        name: '<i class="fas fa-comment-dots"></i>',
                        url: 'chat'
                    }
                ]
            },
            signed: false
        }
    },
    created() {
        this.signed = localStorage.signed ? true : false
    }
}
</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 20px 0;
    position: sticky;
    top: 0;
    background: #F7F6FF;
    z-index: 2022;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .nav-logo {
        display: block;
        display: flex;
        align-items: center;
        column-gap: 8px;
        user-select: none;

        img {
            min-width: 40px;
            max-width: 40px;
            width: 100%;
            min-height: 40px;
            max-height: 40px;
            height: 100%;
            object-fit: cover;
        }

        .logo-text {
            color: var(--primary-color);
            font-weight: 700;
            font-size: 28px;
        }
    }

    .nav__collapse {
        max-width: 1040px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__list {
        max-width: 450px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;

        &-link {
            color: var(--primary-color);
            text-transform: capitalize;
            font-weight: 600;
            transition: .4s;

            &:hover {
                color: var(--green-color);
            }
        }
    }

    .sign-btns {
        max-width: max-content;
        width: 100%;
        display: flex;
        column-gap: 30px;
        align-items: center;
    }

    .user-profile {
        max-width: max-content;
        width: 100%;
        display: flex;
        align-items: center;
        
        .user-links {
            max-width: max-content;
            width: 100%;
            display: flex;
            gap: 20px;

            a {
                color: var(--dark-purple);
                font-size: 25px;
                transition: .4s;

                &:hover {
                    color: #656084;
                }
            }
        }
    }

}
</style>