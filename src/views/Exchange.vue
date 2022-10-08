<template>
    <Nav/>

    <header class="header">
        <div class="container">
            <div class="row">
                
                <h1 class="header__title" v-html="header.title"></h1>

                <SearchForm placeHolder="Какую работу ищете?"/>

                <span class="left-circle"></span>
                <span class="left-botom-circle"></span>

                <Tags :tagsList="tagsList"/>
                
            </div>
        </div>
    </header>
</template>

<script>
import Nav from '@/components/Nav.vue'
import SearchForm from '@/components/Search-Form.vue'
import Tags from '@/components/Tags.vue'

export default {
    name: 'Exchange',
    components: {
        Nav,
        SearchForm,
        Tags
    },
    data() {
        return {
            header: {
                title: 'ищите и находите подходящую работу среди <span>10,000+</span> проектов и покажите на что Вы способны!',
            },
            tagsList: [
                {   
                    name: 'Все категории',
                    category: 'text',
                    active: true
                },
                {   
                    name: 'Тексты и переводы',
                    category: 'text',
                    active: false
                },                
                {   
                    name: 'Разработка',
                    category: 'text',
                    active: false
                },                
                {   
                    name: 'Дизайн',
                    category: 'text',
                    active: false
                },                
                {   
                    name: 'Аудио, видео монтаж',
                    category: 'text',
                    active: false
                },                
                {   
                    name: 'SEO и оптимизация',
                    category: 'text',
                    active: false
                },                
                {   
                    name: 'Бизнес и жизнь',
                    category: 'text',
                    active: false
                },                
                {   
                    name: 'Соцсети и реклама',
                    category: 'text',
                    active: false
                }    
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 160px 0;
    background: #F7F6FF;
    position: relative;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 45px;
        position: relative;

        &::before {
            content: '';
            min-width: 100px;
            max-width: 100px;
            width: 100%;
            min-height: 100px;
            max-height: 100px;
            height: 100%;
            display: block;
            background: #D7FFEC;
            border-radius: 50%;
            position: absolute;
            top: -50%;
            right: 0;
        }

        &::after {
            content: '';
            min-width: 55px;
            max-width: 55px;
            width: 100%;
            min-height: 55px;
            max-height: 55px;
            height: 100%;
            display: block;
            background: #FFEDDD;
            border-radius: 50%;
            position: absolute;
            bottom: -10%;
            right: -1%;
        }
    }

    &::before {
        content: '';
        min-width: 75px;
        max-width: 75px;
        width: 100%;
        min-height: 75px;
        max-height: 75px;
        height: 100%;
        display: block;
        background: #FFEDDD;
        border-radius: 50%;
        position: absolute;
        top: 2%;
        right: 45%;
    }

    .left-circle {
        min-width: 190px;
        max-width: 190px;
        width: 100%;
        min-height: 190px;
        max-height: 190px;
        height: 100%;
        display: block;
        background: #FFEDDD;
        border-radius: 50%;
        position: absolute;
        top: 2%;
        left: -10%;
    }

    .left-botom-circle {
        min-width: 55px;
        max-width: 55px;
        width: 100%;
        min-height: 55px;
        max-height: 55px;
        height: 100%;
        display: block;
        background: #D7FFEC;
        border-radius: 50%;
        position: absolute;
        bottom: -25%;
        left: 20%;
    }

    &__title {
        max-width: 1050px;
        width: 100%;
        text-align: center;
        z-index: 3;

        &::first-letter {
            text-transform: uppercase;
        }
    }
}

.tags__box {
    justify-content: center;
}
</style>