<template>
    <div class="side-main">
        <router-link to="/" class="logo"><img src="@assets/img/logo.png" alt=""></router-link>
        <ul class="nav">
            <li :class="{ 'is-active': menuActive.indexOf(item.path) >= 0 }" v-for="item in menuList" :key="item.path"
                @click="selectMenu(item.path)">
                <i :class="['iconfont', `icon-${item.path}`]"></i><span>{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { reactive, computed } from 'vue'

const route = useRoute();
const router = useRouter();
const menuList = reactive([{
    name: '首页',
    path: 'index'
}, {
    name: '排行榜',
    path: 'rank'
}, {
    name: '歌单',
    path: 'playlist'
}, {
    name: 'MV',
    path: 'mvlist'
}, {
    name: '歌手',
    path: 'artist'
}, {
    name: '我的音乐',
    path: 'my'
}]);
// 当前选择菜单
const menuActive = computed(() => route.path);

// 切换导航跳转
const selectMenu = (item) => {
    router.push({
        path: '/' + item
    })
};

</script>
<style lang="less" scoped>
.side-main {
    // opacity: .1;
    padding: 0 35px;
    text-align: center;
}

.logo {
    width: 150px;
    display: inline-block;
    margin: 25px auto 10px;
}

.logo img {
    width: 75px;
    height: auto;
}

.nav {
    padding-top: 30px;
    border-top: 1px solid #f5f5f5;

    li {
        display: block;
        padding: 10px 16px;
        color: var(--color-text-main);
        border-radius: 8px;
        text-align: left;
        font-weight: 300;
        cursor: pointer;

        &.is-active {
            font-weight: 400;
            background-color: #fff;
            box-shadow: 0 20px 27px rgb(0 0 0 / 5%);

            .iconfont {
                color: #fff;
                background-color: var(--color-text-height);
            }
        }

        span {
            display: inline-block;
            line-height: 32px;
        }
    }

    .iconfont {
        display: inline-flex;
        width: 32px;
        height: 32px;
        background-color: #fff;
        box-shadow: 0 4px 6px rgb(0 0 0 / 12%);
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        font-size: 18px;
        color: var(--color-text);
        vertical-align: top;
    }
}

.info {
    padding: 30px 0;
    font-weight: bold;
    text-align: left;

    p {
        padding-top: 20px;
    }

    a {
        display: block;
        line-height: 24px;
        color: var(--color-text-height);
    }
}
</style>
