<script setup lang="ts">
import { store } from '../composables/store'
</script>

<template>
    <nav aria-label="Main" role="navigation">
        <ul role="menu" class="menu-list">
            <li
                key="0"
                class="menu-item text-slate-900 dark:text-white"
                role="menuitem"
                :class="{ active: store.activeTabIndex === 0 }"
                @click="store.changeActiveTab(0)"
            >
                Projects
            </li>
            <li
                key="1"
                class="menu-item text-slate-900 dark:text-white"
                role="menuitem"
                :class="{ active: store.activeTabIndex === 2 }"
                @click="store.changeActiveTab(2)"
            >
                About
            </li>
            <li role="menuitem">
                <button
                    class="theme-changer size-6 rounded-full absolute bg-black dark:bg-white"
                    aria-label="Change theme"
                    @click="store.changeTheme(store.isDark ? 'light' : 'dark')"
                ></button>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss">
nav {
    font-weight: 300;
    font-style: normal;
}
.theme-changer {
    top: -16px;
}
.menu-list {
    padding: 0;
    margin: 0;
    text-align: center;
    li {
        font-size: 18px;
        position: relative;
        display: inline-block;
        min-width: 75px;
        cursor: pointer;
        text-align: center;
        padding: 0 5px;
        transition: border ease-in 0.2s;

        &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            background-color: #36827f;
            top: 100%;
            left: 0;
            transition: all 0.2s ease-in-out;
        }
        &:hover:after,
        &.active:after {
            width: 100%;
        }
        &:last-of-type {
            display: inline-flex;
            justify-content: flex-end;
            min-width: 60px;
            align-items: center;
            &:after,
            &:hover:after,
            &.active:after {
                display: none;
            }
            & > div {
                top: -16px;
            }
        }
    }
}
@media only screen and (min-width: 768px) {
    .menu-list {
        li {
            min-width: 120px;
        }
    }
}
</style>
