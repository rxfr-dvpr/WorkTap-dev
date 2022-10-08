<template>

    <form action="" class="search-form" @submit.prevent="pushToSearch">
        <input
          type="text"
          class="search-inp"
          :placeholder="placeHolder"
        />

        <button class="search-btn">найти</button>
    </form>

</template>

<script>
export default {
    name: 'Search Form',
    props: {
        placeHolder: {
            type: String,
            default: 'поиск'
        }
    },
    methods: {
        pushToSearch() {
            this.$router.push("/search");
        },
    }
}
</script>

<style lang="scss" scoped>

.search-form {
    max-width: max-content;
    width: 100%;
    display: flex;
    column-gap: 10px;
    padding: 3px;
    border-radius: 50px;
    background: #f2f0fe;
    z-index: 3;

    .search-inp {
        max-width: 350px;
        width: 100%;
        min-width: 350px;
        border: 0;
        background: transparent;
        padding: 15px;
        outline: none;
        font-weight: 500;

        &::placeholder {
            font-weight: 500;
            color: #656084;
        }
    }

    .search-btn {
        background: var(--orange-color);
        border: 0;
        text-transform: capitalize;
        color: var(--white-color);
        cursor: pointer;
        padding: 0 45px;
        border-radius: 50px;
        border: 2px solid transparent;
        transition: 0.4s;
        font-weight: 700;

        &:hover {
            color: var(--orange-color);
            border-color: var(--orange-color);
            background: transparent;
        }
    }
}
</style>