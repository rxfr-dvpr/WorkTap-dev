<template>
    <Nav/>

    <main class="main">

        <section class="chat__dashboard-section">
            <div class="container">
                <div class="row">

                    <div class="chat__left-dashboard">
                        <input type="text" class="chat__left-search" placeholder="Поиск" v-model="searchInp">

                        <div class="chat__members">
                            <span class="active-bg"></span>

                            <div class="chat__member" v-for="(card, idx) in searchedMembers" :key="idx" :class="{'active': card.active}" @click="openChat(idx)">
                                <img :src="require(`@/assets/${card.img}`)" alt="" class="chat__member-avatar">

                                <div class="chat__member-info">
                                    <p class="chat__member-name">{{ card.name }}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="chat__right-dashboard" v-if="activeMember.length">

                        <div class="chat__right-top">
                            <img :src="require(`@/assets/${activeMember[0].img}`)" alt="" class="chat-top-avatar">

                            <div class="chat__top-user-info">
                                <p class="chat__top-user-name">
                                    {{ activeMember[0].name }}
                                </p>

                                <p class="user-status" 
                                :class="activeMember[0].online == 1 ? 'online' : 'offline'">
                                    {{ activeMember[0].online == 1 ? 'online' : 'offline' }}
                                </p>
                            </div>
                        </div>

                        <div class="chat__right-middle">
                            <p class="date-title">сегодня</p>

                            <div class="chat-messages">
                                <span class="message" v-for="(message, id) in activeMember[0].chat" :key="id" :class="message.admin == 'member' ? 'member' : 'user'">
                                    {{ message.text }}
                                </span>
                            </div>
                        </div>

                        <div class="chat__right-bottom">
                            <div class="select-files-box">
                                <button class="open-menu-btn" 
                                @click="selectMenuOpened = !selectMenuOpened" :class="{'opened': selectMenuOpened}">
                                    <i class="fal fa-paperclip"></i>
                                </button>

                                <Transition name="bouncy-menu">
                                    <div class="select-inputs-menu" v-show="selectMenuOpened">
                                        <label for="file-inp" class="file-select-btn">
                                            <i class="fas fa-file-alt"></i>
                                            <input type="file" id="file-inp"/>
                                        </label>

                                        <label for="image-inp" class="file-select-btn">
                                            <i class="fas fa-images"></i>
                                            <input type="file" id="image-inp" accept="image/*"/>
                                        </label>

                                        <label for="folder-inp" class="file-select-btn">
                                            <i class="fas fa-briefcase"></i>
                                            <input type="file" id="folder-inp"/>
                                        </label>

                                        <label class="file-select-btn">
                                        </label>
                                    </div>
                                </Transition>
                            </div>
                            

                            <input type="text" v-model="chatInp" @keypress.enter="sendMessage" class="chat-inp" placeholder="Введите ваше сообщение">
                            
                            <button class="send-btn green-link" @click="sendMessage">отправить</button>
                        </div>

                    </div>

                    <div class="no-chat-text" v-else>
                        <p class="select-chat">выберите, кому хотели бы написать</p>
                    </div>
                    
                </div>
            </div>
        </section>

    </main>

</template>

<script>
import Nav from '@/components/Nav.vue'
import data from '@/assets/js/data'

export default {
    name: 'Chat',
    components: {
        Nav
    },
    created() {
        localStorage.signed ? '' : this.$router.push('/sign-in')
    },
    data() {
        return {
            data,
            searchInp: '',
            chatInp: '',
            members: [
                {
                    img: 'images/home/main/freelancers/freelancer-1.png',
                    name: 'марина королёва',
                    online: Math.floor(Math.random() * 2) + 1,
                    chat: [
                        {
                            text: 'Нужно сделать супер крутой дизайн для сайта',
                            admin: 'member'
                        },
                        {
                            text: 'Ну в общем так',
                            admin: 'member'
                        },
                        {
                            text: 'Ok!',
                            admin: 'user'
                        }
                    ]
                },
                {
                    img: 'images/home/main/freelancers/freelancer-5.png',
                    name: 'наталья захарова',
                    online: Math.floor(Math.random() * 2) + 1,
                    chat: [
                        {
                            text: 'Используются на телеканалах, таких, как MTV, RU.TV, Bridge-TV.',
                            admin: 'member'
                        },
                        {
                            text: 'когда встретимся!',
                            admin: 'user'
                        },
                        {
                            text: 'Ну в общем так',
                            admin: 'member'
                        },
                    ]
                },
                {
                    img: 'images/home/main/freelancers/freelancer-4.png',
                    name: 'никита зайцев',
                    online: Math.floor(Math.random() * 2) + 1,
                    chat: [
                        {
                            text: 'его родители погибли в Холокосте',
                            admin: 'user'
                        },
                        {
                            text: 'он издавался в Германии',
                            admin: 'member'
                        },
                        {
                            text: 'Целана неоднократно выдвигали',
                            admin: 'user'
                        },
                        {
                            text: 'Клэр публично обвиняла',
                            admin: 'member'
                        },
                        
                    ]
                },
                {
                    img: 'images/home/main/freelancers/freelancer-3.png',
                    name: 'ангелина сорокина',
                    online: Math.floor(Math.random() * 2) + 1,
                    chat: [
                        {
                            text: 'около 600 тысяч проданных автомобилей',
                            admin: 'member'
                        },
                        {
                            text: 'Главным минусом была отмечена эргономика',
                            admin: 'user'
                        },
                        {
                            text: 'Неудобное расположение водительского кресла.',
                            admin: 'user'
                        }
                    ]
                },
                {
                    img: 'images/home/main/freelancers/freelancer-2.png',
                    name: 'семён сергеев',
                    online: Math.floor(Math.random() * 2) + 1,
                    chat: [
                        {
                            text: 'Пауль с юности писал стихи на родном',
                            admin: 'member'
                        },
                        {
                            text: 'Германии и приезжал туда',
                            admin: 'member'
                        },
                        {
                            text: 'Ok!',
                            admin: 'user'
                        },
                        {
                            text: ' В последующие годы, живя в Париже ',
                            admin: 'user'
                        }
                    ]
                }
            ],
            activeMember: [],
            selectMenuOpened: false,
        }
    },
    methods: {
        openChat(id) {
            let activeBg = document.querySelector('.active-bg');
            activeBg.style.opacity = 1
            activeBg.style.transform = `translateY(${(activeBg.clientHeight * id) + (10 * id)}px)`

            this.activeMember = []

            let name = this.members[id].name,
            img = this.members[id].img,
            online = this.members[id].online,
            chat = this.members[id].chat

            this.activeMember.push(
                {
                    name: name,
                    img: img,
                    online: online,
                    chat: chat,
                    id: id
                }
            )
        },
        sendMessage() {
            if (this.chatInp != '') {
                this.activeMember[0].chat.push(
                    {
                        text: this.chatInp,
                        admin: 'user'
                    }
                )
            }
            this.chatInp = ''

            setTimeout(() => {
                let chat = document.querySelector('.chat__right-middle');
                chat.scrollTop = chat.clientHeight * 10000            
            }, 10);
        }
    },
    computed: {
        searchedMembers() {
            return this.members.filter(elem => {
                return elem.name.includes(this.searchInp)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.nav {
    background: var(--white-color);
}

.main {
    width: 100%;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    .chat__dashboard-section {
        width: 100%;

        .row {
            justify-content: space-between;
            gap: 30px;
        }

        .chat__left-dashboard {
            max-width: 420px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 20px;

            .chat__left-search {
                width: 100%;
                padding: 15px;
                border-radius: 50px;
                background: #F7F6FF;
                border: 0;
                outline: none;
                font-weight: 500;
                color: #656084;

                ::placeholder {
                    color: #656084;
                    font-weight: 500;
                    text-transform: capitalize;
                }
            }

            .chat__members {
                width: 100%;
                min-height: 500px;
                max-height: 500px;
                height: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                position: relative;
                overflow-y: auto;

                .chat__member {
                    width: 100%;
                    min-height: 100px;
                    height: 100%;
                    max-height: 100px;
                    border-radius: 20px;
                    cursor: pointer;
                    padding: 12px 20px;
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    transition: .3s;

                    &-avatar {
                        max-width: 70px;
                        width: 100%;
                        max-height: 70px;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }

                    &-info {
                        display: flex;
                        flex-direction: column;
                        row-gap: 14px;
                    }

                    &-name {
                        font-weight: 600;
                        color: var(--primary-color);
                        text-transform: capitalize;
                    }

                    &:hover {
                        box-shadow: 0 5px 10px rgba($color: #000000, $alpha: .1);
                    }
                }

                .active-bg {
                    width: 100%;
                    min-height: 100px;
                    max-height: 100px;
                    height: 100%;
                    border-radius: 20px;
                    padding: 20px;
                    transition: .3s;
                    background: #84ebbb;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -1;
                    opacity: 0;
                }
            }
        }

        .chat__right-dashboard {
            max-width: 840px;
            width: 100%;
            max-height: max-content;
            height: 100%;
            border: 2px solid #F2F0FE;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;

            .chat__right-top {
                width: 100%;
                padding: 15px 35px;
                border-bottom: 2px solid #F2F0FE;
                display: flex;
                gap: 20px;
                align-items: center;

                .chat-top-avatar {
                    max-width: 65px;
                    width: 100%;
                    max-height: 65px;
                    height: 100%;
                    object-fit: cover;
                }

                .chat__top-user-info {
                    display: flex;
                    flex-direction: column;
                    row-gap: 8px;

                    .chat__top-user-name {
                        font-size: 18px;
                        font-weight: 600;
                        text-transform: capitalize;
                    }

                    .user-status {
                        font-size: 14px;
                        font-weight: 500;
                        text-transform: capitalize;
                        color: red;

                        &.online {
                            color: var(--green-color);
                        }
                    }
                }
            }

            .chat__right-middle {
                width: 100%;
                min-height: 500px;
                max-height: 500px;
                height: 100%;
                overflow: auto;
                padding: 140px 40px 40px;
                display: flex;
                flex-direction: column;
                row-gap: 40px;

                .date-title {
                    text-align: center;
                    text-transform: capitalize;
                    font-size: 14px;
                    color: #656084;
                }

                .chat-messages {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 20px;
                    height: 100%;

                    .message {
                        max-width: max-content;
                        padding: 12px 24px;
                        border-radius: 20px;

                        &.member {
                            background: #FFEDDD;
                            border-radius: 0px 20px 20px 20px;
                        }

                        &.user {
                            background: #D7FFEC;
                            border-radius: 20px 0px 20px 20px;
                            align-self: flex-end;
                        }
                    }
                }
            }

            .chat__right-bottom {
                width: 100%;
                padding: 20px 30px;
                background: #F7F6FF;
                display: flex;
                column-gap: 20px;
                align-items: center;
                border-top: 2px solid #F2F0FE;
                
                .select-files-box {
                    max-width: 60px;
                    min-width: 60px;
                    width: 100%;
                    position: relative;
                    display: flex;
                    justify-content: center;
                }

                .open-menu-btn {
                    cursor: pointer;
                    min-width: 45px;
                    min-height: 45px;
                    max-width: 45px;
                    max-height: 45px;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    background: #B0AAD0;
                    color: var(--white-color);
                    font-size: 20px;
                    border: 0;
                    z-index: 3;
                    transition: .4s;

                    &.opened {
                        background-color: var(--orange-color);
                    }
                }

                .select-inputs-menu {
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 8px;
                    background: #F6FAFD;
                    box-shadow: 0px 0px 12px rgba(2, 11, 43, 0.12);
                    border-radius: 100px;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    transform: translateY(8px);
                    transition: .5s;

                    label {
                        width: 100%;
                        min-width: 100%;
                        display: block;
                        cursor: pointer;
                        min-height: 45px;
                        max-height: 45px;
                        height: 100%;
                        display: grid;
                        place-items: center;
                        font-size: 22px;
                        color: #656084;
                        background: var(--light-purple);
                        border-radius: 50%;

                        input {
                            display: none;
                        }
                    }
                }

                .chat-inp {
                    max-width: 500px;
                    width: 100%;
                    padding: 14px 20px;
                    background: #F2F0FE;
                    border-radius: 100px;
                    outline: none;
                    border: 0;
                    font-weight: 500;

                    &::placeholder {
                        font-weight: 500;
                        color: #B0AAD0;
                    }
                }
                
                .send-btn {
                    margin-left: auto;
                }
            }
        }

        .no-chat-text {
            max-width: 840px;
            width: 100%;
            border: 2px solid #F2F0FE;
            border-radius: 20px;
            display: grid;
            place-items: center;

            p {
                color: var(--green-color);
                font-weight: 600;
                font-size: 18px;

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }
    }
}

.bouncy-menu-enter-active, 
.bouncy-menu-leave-active {
    transition: all 0.3s;
}

.bouncy-menu-enter-from,
.bouncy-menu-leave-to {
    opacity: 0;
}


</style>