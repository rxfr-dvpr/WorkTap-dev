<template>
    <section class="sign-in__section">
        <div class="container">
            <div class="row">

                <div class="sign-in__content">
                    <div class="sign-in__top">
                        <router-link to="/" class="logo">
                            <img :src="logoImg" alt="" class="logo-img">
                            WorkTap
                        </router-link>
                    </div>

                    <form action="" @submit.prevent="signUser" class="sign-in__form">
                        <p class="form-title">
                            <span>Добро пожаловать!</span>
                            Войдите в свой аккаунт
                        </p>

                        <label for="emailInp">
                            E-mail
                            <input type="email" required v-model="emailValue" class="email-inp" id="emailInp" placeholder="E-mail">
                        </label>

                        <label for="passwordInp">
                            Пароль
                            <input type="password" required v-model="passwordValue" class="password-inp" id="passwordInp" placeholder="Пароль">
                        </label>

                        <div class="user-options">
                            <span class="save-me-button" @click="saveMe = !saveMe">
                                <span class="circle" :class="{'saved': saveMe}">
                                    <span></span>
                                </span>   
                                Запомнить меня
                            </span>

                            <router-link to="/forgot-password" class="forgot-password-btn">Забыли пароль?</router-link>
                        </div>

                        <button class="sign-in-button green-link">Войти</button>

                        <button class="google-sign-button"><i class="fab fa-google"></i> Или войдите с помощю Google</button>

                        <p class="no-account">
                            У Вас все еще нет аккауна? 
                            <router-link to="/sign-up" >Зарегистрируйтесь бесплатно!</router-link>
                        </p>
                    </form>

                </div>

            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Sign in',
    created() {
        localStorage.signed ? this.$router.push('/') : "" 
    },
    data() {
        return {
            emailValue: '',
            passwordValue: '',
            logoImg: require('@/assets/images/logo.svg'),
            saveMe: false
        }
    },
    methods: {
        signUser() {
            if (this.emailValue != '' && this.passwordValue != '') {
                localStorage.setItem('signed', true)
                this.$router.push('/')
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.sign-in__section {
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background: var(--white-color);

    .logo {
        display: block;
        display: flex;
        align-items: center;
        column-gap: 8px;
        user-select: none;
        color: var(--primary-color);
        font-weight: 700;
        font-size: 28px;

        img {
            min-width: 40px;
            max-width: 40px;
            width: 100%;
            min-height: 40px;
            max-height: 40px;
            height: 100%;
            object-fit: cover;
        }
    }

    .sign-in__content {
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 185px;
        padding: 20px 0;

        .sign-in__form {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 20px;

            label {
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 5px;
                font-size: 18px;
                color: #1A202C;
                font-weight: 500;
                margin: 5px 0;

                input {
                    border: 0;
                    outline: none;
                    padding: 20px;
                    font-weight: 500;
                    border-bottom: 2px solid rgba(176, 170, 208, 1);
                    font-size: 17px;

                    &::placeholder {
                        color: rgba(176, 170, 208, 1);
                        font-weight: 500;
                    }
                }
            }

            .form-title {
                font-size: 30px;
                color: #1A202C;
                font-weight: 700;
                display: flex;
                flex-direction: column;
                margin-bottom: 30px;

                span {
                    font-size: 16px;
                    font-weight: 500;
                }
            }

            .user-options {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 30px;

                span {
                    background: transparent;
                    font-weight: 500;
                    cursor: pointer;
                    font-size: 17px;
                }

                .forgot-password-btn {
                    color: var(--orange-color);                    
                }

                .save-me-button {
                    display: flex;
                    align-items: center;
                    column-gap: 5px;

                    span {
                        min-width: 25px;
                        min-height: 25px;
                        max-width: 25px;
                        max-height: 25px;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        border: solid 2px rgba(176, 170, 208, 1); 
                        display: grid;
                        place-items: center;

                        span {
                            min-width: 17px;
                            min-height: 17px;
                            max-width: 17px;
                            max-height: 17px;
                            width: 100%;
                            height: 100%;
                            display: block;
                            background: rgba(176, 170, 208, 1);
                            opacity: 0;
                            transition: .3s;
                        }

                        &.saved span {
                            opacity: 1;
                        }
                    }
                }
            }

            .sign-in-button {
                max-width: 100%;
            }

            .no-account {
                font-weight: 500;
                font-size: 15px;
                color: #616161;

                a {
                    color: var(--orange-color);
                }
            }

            .google-sign-button {
                border: 0;
                background: #2D3748;
                border-radius: 100px;
                padding: 14px 0;
                width: 100%;
                font-size: 15px;
                font-weight: 600;
                color: var(--white-color);
                cursor: pointer;
                transition: .4s;
                border: solid 2px transparent;

                &:hover {
                    color: #1A202C;
                    background: transparent;
                    border-color: #1A202C;
                }
            }
        }
    }
}

.footer {
    display: none;
}

</style>