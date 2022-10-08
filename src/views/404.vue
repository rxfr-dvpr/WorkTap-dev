<template>
    <Nav/>

    <main class="main">
        <section class="error__section">
            <div class="container">
                <div class="row">

                    <p class="error-num">404</p>
                    <p class="error-text">cтраница не найдена</p>
                    <router-link to="/" class="back-link green-link">вернуться в главную</router-link>

                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    name: '404',
    components: {
        Nav
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    padding: 50px 0;

    .error__section {
        width: 100%;

        .row {
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 20px;
        }

        .error-num {
            font-size: 300px;
            color: var(--green-color);
            font-weight: 700;
        }

        .error-text {
            font-size: 20px;
            font-weight: 600;
            text-transform: capitalize;
        }
    }
}

</style>