<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js'
import { computed, onMounted, ref } from 'vue'
import { store } from '../composables/store'
const workArray = [
    {
        id: 'arhitext',
        link: 'https://arhitext.com/',
        img: {
            src: '/logoarhitext.png',
            alt: 'Logo Arhitext',
        },
        imgDark: {
            src: '/arhitextwhite.png',
            alt: 'Logo Arhitext white',
        },
        imgPreview: {
            src: '/longpreviewarhitext.webp',
            alt: 'Preview Arhitext',
        },
    },
    {
        id: 'cda',
        link: 'https://cdarezidential.ro/',
        img: {
            src: '/cda.png',
            alt: 'Logo CDA Rezindential',
        },
        imgDark: {
            src: '/cdawhite.png',
            alt: 'Logo Cda white',
        },
        imgPreview: {
            src: '/longpreviewcda.webp',
            alt: 'Preview Cda',
        },
    },
    {
        id: 'ortodoxia',
        link: 'https://ortodoxiacatholica.com/',
        img: {
            src: '/logoortodoxia.png',
            alt: 'Logo Ortodoxia Catholica',
        },
        imgDark: {
            src: '/ortodoxiawhite.png',
            alt: 'Logo ortodoxia white',
        },
        imgPreview: {
            src: '/longpreviewortodoxia.webp',
            alt: 'Preview Ortodoxia',
        },
    },
    {
        id: 'orthodox-church',
        link: 'https://orthodoxchurchliverpool.co.uk/',
        img: {
            src: '/logoorthodoxchurch.png',
            alt: 'Logo Ortodox Church Liverpool',
        },
        imgDark: {
            src: '/logoorthodoxchurch.png',
            alt: 'Logo Ortodox Church Liverpool',
        },
        imgPreview: {
            src: '/longprevieworthodox.webp',
            alt: 'Preview Church',
        },
    },
    {
        id: 'become-orthodox',
        link: 'https://becomingorthodoxchristian.com/',
        img: {
            src: '/becomeorthodox.png',
            alt: 'Logo Becoming Orthodox Christian',
        },
        imgDark: {
            src: '/becomeorthodoxwhite.png',
            alt: 'Logo Becoming Orthodox Christian',
        },
        imgPreview: {
            src: '/longpreviewbecoming.webp',
            alt: 'Preview Becoming',
        },
    },
    {
        id: 'reper',
        link: 'https://rper.ro',
        img: {
            src: '/logo-reper.png',
            alt: 'Logo Rper',
        },
        imgDark: {
            src: '/logo-reper.png',
            alt: 'Logo Rper',
        },
        imgPreview: {
            src: '/longpreviewrper.webp',
            alt: 'Preview Rper',
        },
    },
]

function onEnter(el: any, done: () => void) {
    if (el !== undefined && el.dataset !== undefined && el.dataset.index !== undefined) {
        anime({
            targets: el,
            opacity: 1,
            translateY: [0, 50],
            easing: 'easeOutElastic',
            duration: 1000,
            delay: el.dataset.index ? Number(el.dataset.index) * 100 : 100,
            direction: 'alternate',
            complete: done,
        })
    }
}
function onLeave(el: any, done: () => void) {
    anime({
        targets: 'el',
        opacity: [1, 0],
        translateY: 0,
        duration: 500,
        easing: 'easeOutElastic',
        direction: 'alternate',
        delay: el.dataset.index ? (5 - Number(el.dataset.index)) * 50 : 50,
        complete: done,
    })
}
const showWorks = ref(false)
const computedList = computed(() => {
    return showWorks.value ? workArray : []
})
onMounted(() => {
    setTimeout(() => {
        showWorks.value = true
    }, 500)
})
const constrainedHeights = ['orthodox-church', 'become-orthodox', 'reper']
const smallHeights = ['cda']

function onMouseEnter(el: MouseEvent) {
    const element = el.target as HTMLElement
    if (element) {
        element.classList.add('item-hovered')
    }
}
function onMouseLeave(el: MouseEvent) {
    const element = el.target as HTMLElement
    if (element) {
        if (element.classList.contains('item-hovered')) element.classList.remove('item-hovered')
    }
}
</script>

<template>
    <transition-group
        class="portfolio-list"
        tag="ul"
        :css="false"
        @enter="onEnter"
        @leave="onLeave"
    >
        <li
            v-for="(work, i) in computedList"
            :key="i"
            :data-index="i"
            ref="work"
            class="list-element cursor-pointer"
            :class="{ 'light-mode': !store.isDark }"
            @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave"
        >
            <a
                :href="work.link"
                class="logo-link"
                :class="{
                    'constrain-height': constrainedHeights.includes(work.id),
                    'small-heights': smallHeights.includes(work.id),
                }"
                target="_blank"
            >
                <img
                    v-if="store.isDark"
                    :src="work.imgDark.src"
                    class="work-image"
                    :alt="work.imgDark.alt"
                />
                <img v-else :src="work.img.src" class="work-image" :alt="work.img.alt" />
            </a>
            <div class="item-image preview-link bg-scooter-50 dark:bg-casal-950">
                <img
                    :src="work.imgPreview.src"
                    class="work-image"
                    :alt="work.imgPreview.alt"
                    width="1887"
                    height="878"
                />
            </div>
        </li>
    </transition-group>
</template>
<style lang="scss">
.logo-link {
    img {
        max-width: 100%;
        height: 100%;
    }
}
.item-image {
    position: relative;
    display: inline-flex;
    overflow: hidden;
    align-self: center;
    padding: 10px;
    width: 300px;
    height: 150px;
    border: 3px solid theme('colors.casal.950');
    img {
        position: absolute;
        top: 0;
        left: 0;
        align-self: center;
        transition: top 5s;
    }
}
.list-element {
    position: relative;
    max-width: 600px;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        transform: translateX(100%);
        transition: all 0.5s;
        display: block;
        background: theme('colors.casal.950');
        z-index: -1;
    }
    &:nth-child(odd) {
        &:after {
            transform: translateX(0);
        }
    }
    &.item-hovered {
        &:after {
            transform: translateX(0);
        }

        &:nth-child(odd) {
            &:after {
                transform: translateX(100%);
            }
        }
        .preview-link img {
            top: -250px;
        }
    }
    &.light-mode {
        &:after {
            background: theme('colors.scooter.50');
        }
        .item-image {
            border: 3px solid theme('colors.scooter.50');
        }
    }
}

ul.portfolio-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
        display: flex;
        justify-content: center;
        min-height: 65px;

        a {
            width: 300px;
            display: inline-flex;
            align-self: center;
            padding: 10px;
        }
        a.constrain-height {
            align-content: center;
            align-items: center;
            justify-content: center;
            height: 110px;
        }
        a.small-heights {
            align-content: center;
            align-items: center;
            justify-content: center;
            height: 70px;
        }

        &:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }
}

@media (prefers-color-scheme: light) {
    .list-element {
        &:after {
            background: theme('colors.scooter.50');
        }
    }
    .item-image {
        border: 3px solid theme('colors.scooter.50');
    }
}
</style>
