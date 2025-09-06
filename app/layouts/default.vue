<template>
    <div class="bg-base-bg text-zinc-100 antialiased">
        <header class="sticky top-0 z-40 backdrop-blur border-b border-base-line/70">
            <div class="container max-w-6xl flex items-center justify-between py-3">
                <a href="#" class="flex items-center gap-2">
                    <Logo /> 
                    <span class="text-sm font-semibold tracking-wide">ABLight</span>
                </a>

                <nav class="hidden md:flex items-center gap-7 text-sm text-zinc-300">
                    <a href="#how" class="hover:text-white">How it works</a>
                    <a href="#why" class="hover:text-white">Why this</a>
                    <a href="#validate" class="hover:text-white">Tell us your needs</a>
                    <a href="#faq" class="hover:text-white">FAQ</a>
                    <a href="#about-us" class="hover:text-white">About</a>
                </nav>
                <a href="#validate"
                    class="px-3 py-1.5 rounded-lg bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-200">Join
                    Early
                    Access</a>
            </div>
        </header>

        <main>
            <slot />
        </main>

        <footer class="border-t border-base-line">
            <div
                class="container max-w-6xl py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>© {{ year }} ABLight. Validation in progress.</div>
                <div class="flex items-center gap-4"><a href="#validate" class="hover:text-white">Join early
                        access</a><a href="#" class="hover:text-white">Contact</a></div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;

const title = 'ABLight — Simple A/B Testing for Headlines & CTAs';
const description = 'Stop guessing, start measuring. ABLight is a lightweight A/B testing tool for indie hackers to find the perfect headline and call-to-action. One script, zero guesswork.';

// SEO and Meta tags
useHead({
    title: title,
    htmlAttrs: {
        lang: 'en'
    },
    meta: [
    // 1. Meta description cơ bản
    { name: 'description', content: description },

    // 2. Open Graph Tags (cho X, Facebook, Reddit, etc.)
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:image', content: `${siteUrl}/social-preview.png` }, // Rất quan trọng!

    // 3. Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: `${siteUrl}/social-preview.png` } // Rất quan trọng!
  ],
  link: [
    // Canonical link
    { rel: 'canonical', href: siteUrl }
  ]
})

// Get current year for footer
const year = new Date().getFullYear();
</script>
