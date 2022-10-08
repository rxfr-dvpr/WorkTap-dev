<template>
    <section class="sign-up__section">
        <div class="container">
            <div class="row">

                <div class="sign-up__content">
                    <div class="sign-up__top">
                        <router-link to="/" class="logo">
                            <img :src="logoImg" alt="" class="logo-img">
                            WorkTap
                        </router-link>
                    </div>

                    <form action="" @submit.prevent="signUser" class="sign-up__form">
                        <p class="form-title">
                            <span>Давайте создадим Вам аккаунт</span>
                            Заполните все поля
                        </p>

                        <label for="nameInp">
                            Ваше имя
                            <input type="text" required v-model="nameValue" class="name-inp" id="nameInp" placeholder="Имя">
                        </label>

                        <label for="fNameInp">
                            Ваше фамилия
                            <input type="text" required v-model="fNameValue" class="fname-inp" id="fNameInp" placeholder="Фамилия">
                        </label>

                        <label for="numberInp">
                            Телефон номер
                            <input type="number" required v-model.number="numberValue" class="email-inp" id="numberInp" placeholder="Телефон">
                        </label>

                        <label for="emailInp">
                            E-mail
                            <input type="email" required v-model="emailValue" class="email-inp" id="emailInp" placeholder="E-mail">
                        </label>

                        <label for="passwordInp">
                            Пароль
                            <input type="password" required v-model="passwordValue" class="password-inp" id="passwordInp" placeholder="Пароль">
                        </label>

                        <label for="checkPasswordInp">
                            Повтарите пароль
                            <input type="password" required v-model="checkPasswordValue" class="password-inp" id="checkPasswordInp" placeholder="Пароль">
                        </label>

                        <div class="user-options">
                            
                        </div>

                        <button class="sign-up-button green-link">зарегестрироваться</button>

                        <p class="have-account">
                            У Вас есть аккаунт? 
                            <router-link to="/sign-in" >Войдите</router-link>
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
        localStorage.signed ? this.$router.push('/') : '' 
    },
    data() {
        return {
            nameValue: '',
            fNameValue: '',
            numberValue: '',
            emailValue: '',
            passwordValue: '',
            checkPasswordValue: '',
            logoImg: require('@/assets/images/logo.svg'),
            secondPasswordError: false
        }
    },
    methods: {
        signUser() {
            if (this.emailValue != '' && this.passwordValue != '' && this.nameValue != "" && this.numberValue != "" && this.checkPasswordValue != '') {
                if (this.checkPasswordValue == this.passwordValue) {
                    localStorage.setItem('signed', true)
                    this.$router.push('/')
                } else {
                    this.secondPasswordError = true
                }
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.sign-up__section {
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

    .sign-up__content {
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 60px;
        padding: 20px 0;

        .sign-up__form {
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
            }

            .sign-up-button {
                max-width: 100%;
            }

            .have-account {
                font-weight: 500;
                font-size: 15px;
                color: #616161;
                text-align: center;

                a {
                    color: var(--orange-color);
                }
            }
        }
    }
}

.footer {
    display: none;
}

</style>