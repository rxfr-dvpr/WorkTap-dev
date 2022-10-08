<template>
    <footer class="footer">
        <div class="container">
            <div class="row">

                <div class="footer__lists">

                    <ul class="footer__list" v-for="(list, idx) in footerLinks" :key="idx" :class="{'weblinks': list.title == 'follow'}">
                        <p class="footer__list-title">{{ list.title }}</p>

                        <li class="footer__list-item" v-for="(link, id) in list.links" :key="id">
                            <a :href="link.url" v-html="link.name" class="footer__list-link"></a>
                        </li>
                    </ul>

                </div>

                <p class="footer__copyright">{{ `Copyright @REDFOX ${new Date().getFullYear()} | All Rights Reserved` }}</p>

            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
    data() {
        return {
            footerLinks: [
                {
                    title: 'топ категории',
                    links: [
                        {
                            name: 'тексты и переводы',
                            url: 'тексты и переводы'
                        },
                        {
                            name: 'разработка',
                            url: 'тексты и переводы'
                        },
                        {
                            name: 'дизайн',
                            url: 'тексты и переводы'
                        },
                        {
                            name: 'аудио, видео монтаж',
                            url: 'Тексты и переводы'
                        },
                        {
                            name: 'соцсети и реклама',
                            url: 'Тексты и переводы'
                        },
                        {
                            name: 'бизнес и жизнь',
                            url: 'Тексты и переводы'
                        },
                        {
                            name: 'SEO и оптимизация',
                            url: 'Тексты и переводы'
                        }
                    ]
                },
                {
                    title: 'о проекте',
                    links: [
                        {
                            name: 'о нас',
                            url: 'о нас'
                        },
                        {
                            name: 'как это работает',
                            url: 'о нас'
                        },
                        {
                            name: 'политика приватности',
                            url: 'о нас'
                        },
                        {
                            name: 'правила пользования ',
                            url: 'о нас'
                        },
                        {
                            name: 'пресса о нас',
                            url: 'о нас'
                        }
                    ]
                },
                {
                    title: 'поддержка',
                    links: [
                        {
                            name: 'контакты',
                            url: 'контакты'
                        },
                        {
                            name: 'политика безопасности',
                            url: 'контакты'
                        },
                        {
                            name: 'FAQ',
                            url: 'контакты'
                        }
                    ]
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    background: #F2F0FE;
    padding: 50px 0 70px;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    &__lists {
        max-width: 1024px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 50px;
        column-gap: 25px;

        .footer__list {
            display: flex;
            flex-direction: column;
            row-gap: 10px;

            &-title {
                font-size: 24px;
                font-weight: 700;
                text-transform: capitalize;
                margin-bottom: 10px;
                color: var(--primary-color);
            }

            &-link {
                font-size: 14px;
                color: var(--primary-color);
                text-transform: capitalize;
                font-weight: 500;
                transition: .4s;

                &:hover {
                    color: var(--green-color);
                }
            }
        }
    }

    &__copyright {
        font-weight: 500;
        font-size: 16px;
        text-align: center;
    }
}

</style>