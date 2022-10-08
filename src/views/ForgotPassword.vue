<template>
    <section class="forgot-password__section">
        <div class="container">
            <div class="row">

                <div class="forgot-password__content">
                    <div class="forgot-password__top">
                        <router-link to="/" class="logo">
                            <img :src="logoImg" alt="" class="logo-img">
                            WorkTap
                        </router-link>
                    </div>

                    <Transition name="fade-form">
                        <form action="" v-if="newPasswordShowen" @submit.prevent="signUser" class="new-password__form">
                            <p class="form-title">
                                <span>Давайте восстановим Вам пароль</span>
                                Придумайте новый пароль
                            </p>

                            <label for="newPasswordInp">
                                Пароль
                                <input type="password" required v-model="newPasswordValue" class="new-password-inp" id="newPasswordInp" placeholder="Пароль">
                            </label>

                            <label for="sndPasswordInp">
                                Повтарите пароль
                                <input type="password" required v-model="secondPasswordValue" class="second-password-inp" id="sndPasswordInp" placeholder="Пароль">
                            </label>


                            <button class="change-password-button green-link">
                                Изменить пароль
                            </button>
                        </form>

                        <form action="" v-else @submit.prevent="newPassword" class="forgot-password__form">
                            <p class="form-title">
                                <span>Мы отправим Вам код для восстановления пароля</span>
                                Заполните поле ниже
                            </p>

                            <label for="emailInp">
                                E-mail
                                <input type="email" required v-model="emailValue" class="email-inp" id="emailInp" placeholder="E-mail">
                            </label>

                            <label for="codeInp">
                                Код 
                                <input type="text" required v-model="codeValue" class="code-inp" id="codeInp" placeholder="Код из почты">
                            </label>


                            <button class="send-code-button green-link">Отправить код</button>

                            <p class="remember-account">
                                Вспомнили пароль? 
                                <router-link to="/sign-in" >Войдите</router-link>
                            </p>
                        </form>
                    </Transition>

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
            codeValue: '',
            logoImg: require('@/assets/images/logo.svg'),
            newPasswordShowen: false,
            newPasswordValue: '',
            secondPasswordValue: ''
        }
    },
    methods: {
        newPassword() {
            if (this.emailValue != '' && this.passwordValue != '') {
                this.newPasswordShowen = true                
            }
        },
        signUser() {
            if (this.newPasswordValue != '' && this.secondPasswordValue != '' && this.newPasswordValue == this.secondPasswordValue) {
                localStorage.setItem('signed', true)

                setTimeout(() => {
                    this.$router.push('/')
                }, 100);
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.forgot-password__section {
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

    .forgot-password__content {
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 185px;
        padding: 20px 0;

        .forgot-password__form {
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

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .send-code-button {
                max-width: 100%;
            }

            .remember-account {
                font-weight: 500;
                font-size: 15px;
                color: #616161;
                text-align: center;

                a {
                    color: var(--orange-color);
                }
            }
        }

        .new-password__form {
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

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .change-password-button {
                max-width: 100%;
            }
        }
    }

}

.footer {
    display: none;
}

.fade-form-enter-active,
.fade-form-leave-active {
  transition: all 0.3s;
}

.fade-form-enter-from, 
.fade-form-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.fade-form-enter-to, 
.fade-form-leave-from {
  transition-delay: .5s;
}

</style>