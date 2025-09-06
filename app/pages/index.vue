<template>
  <div>
    <section class="relative">
        <div
            class="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.12),transparent_60%)] pointer-events-none">
        </div>

        <div class="container max-w-6xl py-18 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div class="max-w-xl">
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-base-line bg-base-soft px-3 py-1 text-xs text-zinc-300">
                    <span class="h-1.5 w-1.5 rounded-full bg-brand-light"></span> Boutique A/B for indie devs
                </div>

                <h1 class="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
                    Which version sells better: <span class="text-brand-light">“Launch Fast”</span> or <span
                        class="text-brand-light">“Ship Instantly”</span>?
                </h1>
                <p class="mt-4 text-lg text-zinc-300">
                    Test your headline and CTA text.<br class="hidden sm:block" />
                    <span class="font-semibold text-zinc-100">One script. One dashboard. Zero guesswork.</span>
                </p>

                <div class="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <a href="#validate"
                        class="px-5 py-3 rounded-xl bg-brand-light text-zinc-900 font-semibold hover:bg-emerald-300 shadow-glow">Join
                        Early Access</a>
                    <a href="#how"
                        class="px-5 py-3 rounded-xl border border-base-line hover:border-zinc-500 text-zinc-200">How it
                        works</a>
                </div>

                <div class="mt-8 rounded-2xl border border-base-line bg-base-card p-4">
                    <div class="text-xs uppercase tracking-wider text-zinc-400 mb-2">Expected setup</div>
                    <pre
                        class="overflow-auto text-sm leading-relaxed"><code>&lt;script src="https://cdn.ablight.dev/ab.js?id=<span class="text-brand-light">YOUR_PROJECT_ID</span>"&gt;&lt;/script&gt;</code></pre>
                    <p class="mt-2 text-sm text-zinc-400">Variants & goals load from the server — no redeploys.</p>
                </div>
            </div>

            <div class="relative">
                <div class="absolute -inset-3 rounded-3xl bg-brand-light/10 blur-2xl"></div>
                <div class="relative rounded-2xl border border-base-line bg-base-card">
                    <div class="flex items-center gap-2 px-4 py-3 border-b border-base-line">
                        <span class="h-2.5 w-2.5 rounded-full bg-zinc-600"></span>
                        <span class="h-2.5 w-2.5 rounded-full bg-zinc-600"></span>
                        <span class="h-2.5 w-2.5 rounded-full bg-zinc-600"></span>
                        <div class="ml-3 flex-1 text-xs text-zinc-400 truncate">https://yourdomain.com</div>
                    </div>

                    <div class="p-6">
                        <div class="flex items-center justify-between gap-3 flex-wrap">
                            <div class="text-xs text-zinc-400">Live preview</div>
                            <div class="flex items-center gap-2">
                                <button @click="show('A')"
                                    class="px-3 py-1.5 text-xs rounded-lg border border-base-line hover:border-zinc-500">Show
                                    A</button>
                                <button @click="show('B')"
                                    class="px-3 py-1.5 text-xs rounded-lg bg-brand-light/10 text-emerald-300 border border-brand-light/30 hover:bg-brand-light/20">Show
                                    B</button>
                            </div>
                        </div>

                        <div class="mt-4 rounded-xl border border-base-line bg-white/5 p-6">
                            <h3 ref="previewHeadline" class="text-2xl md:text-3xl font-semibold">Ship Instantly</h3>
                            <p class="mt-2 text-sm text-zinc-300 max-w-prose">
                                Minimal, selector-based A/B for headline & CTA. No HTML surgery. Real conversions.
                            </p>
                            <div class="mt-5 flex items-center gap-3">
                                <a ref="previewCTA" href="javascript:void(0)"
                                    class="px-4 py-2 rounded-lg bg-brand-light text-zinc-900 text-sm font-semibold hover:bg-emerald-300">Try
                                    it free</a>
                                <a href="javascript:void(0)"
                                    class="px-4 py-2 rounded-lg border border-base-line text-sm hover:border-zinc-500">Learn
                                    more</a>
                            </div>
                        </div>

                        <div class="mt-4 grid grid-cols-3 gap-3">
                            <div class="rounded-lg border border-base-line bg-white/5 p-3">
                                <div class="text-[10px] uppercase tracking-wider text-zinc-400">Views</div>
                                <div ref="statViews" class="text-lg font-semibold mt-1">128</div>
                            </div>
                            <div class="rounded-lg border border-base-line bg-white/5 p-3">
                                <div class="text-[10px] uppercase tracking-wider text-zinc-400">Conversions</div>
                                <div ref="statConv" class="text-lg font-semibold mt-1">11</div>
                            </div>
                            <div class="rounded-lg border border-base-line bg-white/5 p-3">
                                <div class="text-[10px] uppercase tracking-wider text-zinc-400">CR%</div>
                                <div ref="statCR" class="text-lg font-semibold mt-1 text-brand-light">8.6%</div>
                            </div>
                        </div>

                        <div class="mt-4 flex items-center gap-3 text-[11px] text-zinc-400">
                            <span class="inline-flex items-center gap-1"><span
                                    class="h-2 w-2 rounded-full bg-zinc-400"></span> Variant A</span>
                            <span class="inline-flex items-center gap-1"><span
                                    class="h-2 w-2 rounded-full bg-brand-light"></span> Variant B</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="why" class="container max-w-6xl py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-6 flex items-start gap-4">
                <div class="mt-1 h-8 w-8 flex-shrink-0 rounded-lg bg-brand-dark flex items-center justify-center">
                    <svg class="h-5 w-5 text-brand-light" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </div>
                <div>
                    <h3 class="font-semibold text-zinc-100">Impact First</h3>
                    <p class="mt-1 text-sm text-zinc-300">Headline & CTA are the highest-leverage elements. Stop
                        arguing; measure.</p>
                </div>
            </div>
            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-6 flex items-start gap-4"
                style="transition-delay: 100ms;">
                <div class="mt-1 h-8 w-8 flex-shrink-0 rounded-lg bg-brand-dark flex items-center justify-center">
                    <svg class="h-5 w-5 text-brand-light" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                </div>
                <div>
                    <h3 class="font-semibold text-zinc-100">Frictionless</h3>
                    <p class="mt-1 text-sm text-zinc-300">One script. Pick elements with CSS selectors. No HTML edits,
                        no redeploys.</p>
                </div>
            </div>
            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-6 flex items-start gap-4"
                style="transition-delay: 200ms;">
                <div class="mt-1 h-8 w-8 flex-shrink-0 rounded-lg bg-brand-dark flex items-center justify-center">
                    <svg class="h-5 w-5 text-brand-light" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.085-1.085-1.085m1.085 1.085V18.75m-7.5-3.75h7.5m-7.5 0l-1 1.085-1.085-1.085m1.085 1.085V18.75" />
                    </svg>
                </div>
                <div>
                    <h3 class="font-semibold text-zinc-100">Real Conversions</h3>
                    <p class="mt-1 text-sm text-zinc-300">Click, success URL, or JS trigger after a signup/checkout
                        event.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="validate" class="container max-w-6xl py-16">
        <div class="rounded-2xl border border-base-line bg-base-card p-6">
            <div class="flex flex-col lg:flex-row gap-8">
                
                <form 
                    action="https://api.web3forms.com/submit" 
                    method="POST" 
                    class="flex-1 space-y-5"
                >
                    <input type="hidden" name="access_key" :value="config.public.web3formsAccessKey">
                    <input type="hidden" name="redirect" :value="`${config.public.siteUrl}/thank-you`">
                    <input type="hidden" name="subject" value="New Signup for ABLight Waitlist">
                    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                    <h2 class="text-2xl md:text-3xl font-semibold">Tell us your needs</h2>
                    <p class="text-zinc-300">If this shipped next week, would you use it? Help us prioritize by answering three quick questions.</p>

                    <div>
                        <label class="text-sm text-zinc-300">What’s your primary goal?</label>
                        <div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedGoal === 'headline'}">
                                <input type="radio" name="goal" value="headline" required class="hidden" v-model="selectedGoal">
                                <span>Find the best <strong>headline</strong></span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedGoal === 'cta'}">
                                <input type="radio" name="goal" value="cta" class="hidden" v-model="selectedGoal">
                                <span>Find the best <strong>CTA</strong> copy</span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedGoal === 'both'}">
                                <input type="radio" name="goal" value="both" class="hidden" v-model="selectedGoal">
                                <span>Both headline & CTA</span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedGoal === 'other'}">
                                <input type="radio" name="goal" value="other" class="hidden" v-model="selectedGoal">
                                <span>Other (tell us below)</span>
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <label class="text-sm text-zinc-300">Monthly landing page traffic</label>
                        <div class="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedTraffic === '<1k'}">
                                <input type="radio" name="traffic" value="<1k" required class="hidden" v-model="selectedTraffic">
                                <span>&lt; 1k</span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedTraffic === '1-5k'}">
                                <input type="radio" name="traffic" value="1-5k" class="hidden" v-model="selectedTraffic">
                                <span>1–5k</span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedTraffic === '5-20k'}">
                                <input type="radio" name="traffic" value="5-20k" class="hidden" v-model="selectedTraffic">
                                <span>5–20k</span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedTraffic === '20k+'}">
                                <input type="radio" name="traffic" value="20k+" class="hidden" v-model="selectedTraffic">
                                <span>20k+</span>
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <label class="text-sm text-zinc-300">What would you pay for this?</label>
                        <div class="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedPrice === '$9/mo'}">
                                <input type="radio" name="price" value="$9/mo" required class="hidden" v-model="selectedPrice">
                                <span>$9/mo</span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedPrice === '$19/mo'}">
                                <input type="radio" name="price" value="$19/mo" class="hidden" v-model="selectedPrice">
                                <span>$19/mo</span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedPrice === '$49 lifetime'}">
                                <input type="radio" name="price" value="$49 lifetime" class="hidden" v-model="selectedPrice">
                                <span>$49 lifetime</span>
                            </label>
                            <label class="radio-option inline-flex items-center gap-2 border border-base-line rounded-lg px-3 py-2 cursor-pointer" :class="{'selected': selectedPrice === 'other'}">
                                <input type="radio" name="price" value="other" class="hidden" v-model="selectedPrice">
                                <span>Other</span>
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input class="md:col-span-2 w-full rounded-xl border border-base-line bg-base-bg px-4 py-3 text-sm" type="email" name="email" placeholder="Work email (to get early access)" required>
                        <button type="submit" class="w-full rounded-xl bg-brand-light text-zinc-900 font-semibold px-4 py-3 hover:bg-emerald-300 shadow-glow">Join early access</button>
                    </div>
                    <textarea class="w-full rounded-xl border border-base-line bg-base-bg px-4 py-3 text-sm" name="notes" rows="3" placeholder="Anything specific you want to test (optional)"></textarea>

                    <p class="text-xs text-zinc-400">We’ll only contact you about ABLight. No spam. You can opt out anytime.</p>
                </form>

                <div class="flex-1 space-y-4">
                    <h3 class="text-lg font-semibold">What we’ll build if there’s demand</h3>
                    <ul class="space-y-2 text-sm text-zinc-300">
                        <li>• One-line script. Configure tests from the dashboard (CSS selectors, A/B copy).</li>
                        <li>• Real conversion goals: Click · Success URL · JS trigger after signup/checkout.</li>
                        <li>• Fast, privacy-respecting: no heatmaps, no replays, no third-party API keys.</li>
                        <li>• Simple reporting: Views, Clicks, Conversions, CR%, clear winner.</li>
                        <li>• Zero redeploys: change variants/goals without touching your codebase.</li>
                    </ul>
                    <div class="rounded-xl border border-brand-light/30 bg-brand-light/10 p-4 text-sm text-emerald-200">
                        Help us decide: if at least <strong>100 builders</strong> want this at
                        <strong>$9–$19/mo</strong>, we’ll ship the MVP and invite you first.
                    </div>
                    <div class="rounded-xl border border-base-line bg-base-card p-4">
                        <div class="text-xs uppercase tracking-wider text-zinc-400 mb-2">Why we’re asking</div>
                        <p class="text-sm text-zinc-300">We don’t want to build yet another bloated A/B tool. If
                            founders like you want a <em>headlines & CTA-only</em> weapon, we’ll craft it. If not, we
                            won’t waste your time.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="how" class="container max-w-6xl py-16">
        <h2 class="text-2xl md:text-3xl font-semibold">How it works</h2>
        <p class="mt-2 text-zinc-300">Minimal setup. Maximum signal.</p>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="animate-on-scroll rounded-2xl border border-base-line bg-base-card p-6">
                <div class="text-xs uppercase tracking-wider text-zinc-400">Step 1</div>
                <h3 class="mt-1 font-semibold">Paste one script</h3>
                <p class="mt-2 text-zinc-300">Drop a single line on your site. That’s it.</p>
                <pre
                    class="mt-3 text-xs bg-base-bg/60 p-3 rounded-lg overflow-auto border border-base-line">&lt;script src="https://cdn.ablight.dev/ab.js?id=YOUR_PROJECT_ID"&gt;&lt;/script&gt;</pre>
            </div>
            <div class="animate-on-scroll rounded-2xl border border-base-line bg-base-card p-6"
                style="transition-delay: 100ms;">
                <div class="text-xs uppercase tracking-wider text-zinc-400">Step 2</div>
                <h3 class="mt-1 font-semibold">Create a test</h3>
                <p class="mt-2 text-zinc-300">Pick elements with CSS selectors, enter A/B copy, choose your conversion
                    goal (Click / URL / JS trigger).</p>
            </div>
            <div class="animate-on-scroll rounded-2xl border border-base-line bg-base-card p-6"
                style="transition-delay: 200ms;">
                <div class="text-xs uppercase tracking-wider text-zinc-400">Step 3</div>
                <h3 class="mt-1 font-semibold">See the winner</h3>
                <p class="mt-2 text-zinc-300">View · Click · Conversion · CR% — clean numbers, no fluff. Stop or swap in
                    one click.</p>
            </div>
        </div>
    </section>

    <section id="faq" class="container max-w-6xl py-16">
        <h2 class="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-5">
                <h3 class="font-semibold">Why not use big tools like Unbound, Growbook, etc.?</h3>
                <p class="mt-2 text-zinc-300">Those tools are powerful, but they're like a heavy-duty truck: bloated,
                    expensive, and they slow down your site. <strong>ABLight</strong> is a Formula 1 car:
                    hyper-lightweight, obsessively focused on one job (testing headlines & CTAs), and does it better
                    than anyone. Not having a heatmap or a pop-up builder is a feature.</p>
            </div>

            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-5"
                style="transition-delay: 100ms;">
                <h3 class="font-semibold">I'm a dev, why not just build this myself?</h3>
                <p class="mt-2 text-zinc-300">You absolutely could. But a robust A/B testing system isn't just
                    `Math.random()`. It needs a reliable stats engine, anti-flicker mechanisms, persistent user
                    bucketing... ABLight handles all of that. For the proposed price, you're buying back dozens of hours
                    to focus on your core product.</p>
            </div>

            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-5">
                <h3 class="font-semibold">Is this live?</h3>
                <p class="mt-2 text-zinc-300">Not yet. This is a validation page. If enough builders want it, we’ll ship
                    the MVP and invite you first.</p>
            </div>
            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-5"
                style="transition-delay: 100ms;">
                <h3 class="font-semibold">Will it track “real” conversions?</h3>
                <p class="mt-2 text-zinc-300">Yes — Click (by selector), URL (success page), or a JS trigger you call
                    after signup/checkout.</p>
            </div>
            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-5">
                <h3 class="font-semibold">Any heavy SDKs or API keys?</h3>
                <p class="mt-2 text-zinc-300">No. One tiny script. No heatmaps or replays. No third-party API keys
                    required.</p>
            </div>
            <div class="animate-on-scroll rounded-xl border border-base-line bg-base-card p-5"
                style="transition-delay: 100ms;">
                <h3 class="font-semibold">Pricing?</h3>
                <p class="mt-2 text-zinc-300">We’re exploring $9–$19/mo and a $49 lifetime. Tell us what you’d pay in
                    the form above.</p>
            </div>

        </div>
    </section>

    <section id="about-us" class="container max-w-6xl py-16 text-center">
        <h2 class="text-2xl md:text-3xl font-semibold">Meet the Creator</h2>
        <div class="mt-8 flex flex-col items-center">
            <h3 class="mt-4 text-xl font-semibold text-zinc-100 animate-on-scroll" style="transition-delay: 100ms;">Max/Wang</h3>
            <p class="text-sm text-zinc-400 animate-on-scroll" style="transition-delay: 200ms;">Founder & Indie Hacker
            </p>
            <p class="mt-4 max-w-prose text-zinc-300 animate-on-scroll" style="transition-delay: 300ms;">
                You know that moment when you realize you’re spending more time fighting with your tools than actually improving your product? I had that moment. As a solo developer, that’s a cardinal sin.
                Lost in a sea of complex dashboards, I asked myself, 'Why isn’t there a tool that just focuses on the two things that drive 80% of success: the headline and the CTA?' ABLight was born from that question. It’s not a tool for everyone. It’s a tool for us—the solo builders, the makers who need speed and ruthless efficiency. I built it for myself, and I have a feeling you need it too.
            </p>
            <div class="mt-6 flex gap-4 animate-on-scroll" style="transition-delay: 400ms;">
                <a href="https://twitter.com/maxslashwang" target="_blank" class="text-zinc-400 hover:text-white"
                    aria-label="Twitter">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.792v.058a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.188a11.644 11.644 0 006.29 1.84z" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const config = useRuntimeConfig();

// --- Refs for Live Preview elements ---
const previewHeadline = ref(null);
const previewCTA = ref(null);
const statViews = ref(null);
const statConv = ref(null);
const statCR = ref(null);

// --- Live Preview Logic ---
const A = { headline: "Launch Fast", cta: "Try it free", views: 116, conv: 7 };
const B = { headline: "Ship Instantly", cta: "Try it free", views: 128, conv: 11 };

function show(variant) {
  const d = variant === 'A' ? A : B;
  if (previewHeadline.value) previewHeadline.value.textContent = d.headline;
  if (previewCTA.value) previewCTA.value.textContent = d.cta;
  if (statViews.value) statViews.value.textContent = d.views;
  if (statConv.value) statConv.value.textContent = d.conv;
  if (statCR.value) {
    statCR.value.textContent = ((d.conv / d.views) * 100).toFixed(1) + '%';
    statCR.value.classList.toggle('text-brand-light', variant === 'B');
    statCR.value.classList.toggle('text-zinc-200', variant === 'A');
  }
}

// Create 'ref's to store the state of the selections in the form
const selectedGoal = ref('');
const selectedTraffic = ref('');
const selectedPrice = ref('');

onMounted(() => {
  // --- Scroll animation ---
  const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              scrollObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
      scrollObserver.observe(el);
  });
});
</script>
