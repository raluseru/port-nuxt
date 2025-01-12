<script setup lang="ts">
import Rellax from 'rellax'

import { store } from './composables/store'
import anime from 'animejs/lib/anime.es.js'

const bgElement = ref(null)
const bgElement2 = ref(null)
const textElement = ref(null)
function startMotion() {
    const el = bgElement.value
    anime({
        targets: el,
        translateX: function () {
            return anime.random(0, 470)
        },
        easing: 'easeInOutQuad',
        duration: 5750,
        complete: startMotion,
    })
}
function startMotion2() {
    const el = bgElement2.value
    anime({
        targets: el,
        translateX: function () {
            return anime.random(0, 170)
        },
        easing: 'easeInOutQuad',
        duration: 8750,
        complete: startMotion2,
    })
}

function startText() {
    const el = textElement.value
    anime({
        targets: el,
        skew:function () {
            return anime.random(-5, 1)
        },
       
        duration: 450
    })
}
function endTextAnimation() {
    console.log('here')
    const el = textElement.value
    anime({
        targets: el,
        skew:function () {
            return anime.random(0, 0)
        },
        duration: 0,
    })
}
onMounted(() => {
   
    setTimeout(() => {
        startMotion()
        startMotion2()
    }, 500)
    const rellax = new Rellax('.rellax')
})
const colorMode = useColorMode()

if (colorMode.value ==='dark') store.changeTheme(colorMode.value)
const route = useRoute()
</script>
<template>

 <div class="wrapper relative px-8">
        <div class="top-nav fixed justify-between left-0 top-0 flex w-full p-8">
            <header role="banner" class="flex">
                <a
                    href="https://raluseru.com/"
                    class="logo text-2xl text-slate-900 dark:text-white"
                >
                    <span>R</span>
                    <span class="text-slate-300">/</span>
                    <span>S</span></a
                >
            </header>
            <nav-menu></nav-menu>
        </div>
        <div
            class="fixed bg-element size-60 rounded-full blur-sm bg-gradient-to-r from-scooter-100 dark:from-casal-800"
            ref="bgElement"
        ></div>
        <div class="left-wrapper floating-elements pt-16">
            <div class="relative md:fixed pt-16 md:pt-0 top-1/2 md:left-8">
                <h1 v-if="route.path==='/about'" class="text-dark dark:text-white text-6xl">About</h1>
                <h1 v-else 
                ref="textElement"
                 class="text-dark dark:text-white text-5xl md:text-6xl"
                  @mouseenter="startText"
                  @mouseleave="endTextAnimation"
                  >
                    PORTFOLIO
                </h1>
            </div>
            <div class="fixed rectangle second-rectangle rounded-full" ref="bgElement2"></div>
        </div>
        <div class="rellax middle-wrapper">
            <main role="main">
                <NuxtPage />
              
            </main>
        </div>
        <div class="right-wrapper relative">
            <div class="relative md:fixed pt-16 hidden md:pt-0 md:block md:top-1/2 md:right-8">
                <h1 class="text-dark dark:text-white text-6xl">Raluca</h1>
            </div>
        </div>
</div>

    <footer role="contentinfo">
        <div class="social-wrapper">
            <a href="https://wa.me/447586485912" class="text-dark dark:text-white">
                <span class="sr-only">Link to whatsapp</span>
                <Icon class="fill-casal-950 dark:fill-scooter-50" icon-id="whatsapp" view-box="0 0 16 16"></Icon>
            </a>
            <a href="https://github.com/raluseru" class="text-dark dark:text-white">
                <span class="sr-only">Link to github</span>
                <Icon class="fill-casal-950 dark:fill-scooter-50" icon-id="github" view-box="0 0 16 16"></Icon>
            </a>
        </div>

        <p class="text-slate-900 dark:text-white">
            &copy; 2024 Design & Code Raluca-Mihaela Serdaru
        </p>
    </footer>

</template>
<style>

#__nuxt{
    margin: 0 auto;
}
main {
    margin-top: 100px;
    min-height: 375px;
    p {
        max-width: 500px;
    }
}
.wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.middle-wrapper {
    min-height: 1200px;
}

.floating-elements {
    position: relative;
}
.rectangle {
    width: 160px;
    height: 160px;
}
.first-rectangle {
    background-color: #4ecac2;
    p {
        writing-mode: vertical-rl;
        text-orientation: upright;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding-left: 20px;
    }
}
.second-rectangle {
    background: 2px 2px/10px 10px transparent radial-gradient(#d7e0ea 18.75%, transparent 0);
    position: absolute;
    top: 30%;
    left: 20%;
}
.bg-style {
    display: none;
}
h1 {
    font-family: 'Newsreader', serif;
    transition: all 1.3s;
    &:hover {
        transform: skew(1deg, -2deg) scaleY(0.9);
    }
}
@media only screen and (min-width: 768px) {
    .left-wrapper {
        display: flex;
        align-items: center;
    }
    .right-wrapper {
        display: flex;
        align-items: center;
    }
    .wrapper {
        flex-direction: row;
        min-width: 720px;
        max-width: 720px;
        margin: 0 auto;
        justify-content: center;
    }
    .rectangle {
        width: 220px;
        height: 220px;
    }
    .bg-style {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    .second-rectangle {
        margin-top: 25%;
    }
    main {
        p {
            max-width: 500px;
        }
    }
}

header {
    max-height: 60px;
    z-index: 9;
    top: 6px;
    left: 0;
    right: 0;
}
.top-nav {
    max-height: 60px;
    z-index: 99;
    svg {
        height: 100%;
    }
}
.logo {
    display: block;
    padding: 5px;
    min-width: 60px;
    min-height: 30px;
    span {
        margin-right: 7px;
        transition: all 0.3s;

        &:last-of-type {
            margin-right: 0;
        }
    }
    &:hover {
        .text-slate-300 {
            visibility: hidden;
            opacity: 0;
            margin-right: 0;
        }
        span:last-of-type {
            transform: translateX(-100%);
            display: inline-block;
        }
    }
}

footer {
    p {
        text-align: center;
    }
}
.social-wrapper {
    text-align: center;
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    justify-content: center;
    margin-bottom: 24px;
    cursor: pointer;
    svg {
        width: 32px;
        height: 32px;
    }
    a {
        &:hover {
            svg {
                fill: #b24c63;
            }
        }
        &:focus {
            outline: 2px solid #b24c63;
        }
    }
}
</style>
