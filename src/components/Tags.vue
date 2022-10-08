<template>
    <div class="tags__box">
        <span class="tag" v-for="(tag, idx) in tagsList" :key="idx" :class="{'active': tag.active}" @click="addActive(idx)">
            {{ tag.name }}
        </span>
    </div>
</template>

<script>
export default {
    name: "Tags",
    props: {
        tagsList: {
            type: Array,
            default: []
        }
    },
    methods: {
        addActive(id) {
            this.tagsList.map(elem => {
                elem.active = false
            })

            this.tagsList[id].active = true
        }
    }
}
</script>

<style lang="scss" scoped>
.tags__box {
    max-width: 730px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;

    .tag {
        padding: 10px 20px;
        cursor: pointer;
        border: 2px solid #F2F0FE;
        border-radius: 50px;
        color: var(--primary-color);
        font-size: 14px;
        font-weight: 500;
        transition: .4s;

        &.active {
            border-color: var(--orange-color);
            color: var(--orange-color);

            &:hover {
                border-color: var(--orange-color);
                color: var(--orange-color);
            }
        }

        &:hover {
            border-color: var(--orange-color);
            color: var(--orange-color);
        }
    }
}

</style>