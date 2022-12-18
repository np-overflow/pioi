<script setup lang="ts">
</script>

<template>
	<slot />
</template>

<style>
::-webkit-scrollbar {
    @apply w-2 h-2 bg-transparent
}
::-webkit-scrollbar-track {
    background: rgba(12 12 12 0);
}
::-webkit-scrollbar-thumb {
    @apply rounded-full;
    background: rgb(24 24 27);
}

/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * darkmode-mono-off:
 *   - http://typekit.com/eulas/0000000000000000774a6a89
 *   - http://typekit.com/eulas/0000000000000000774a6a80
 *   - http://typekit.com/eulas/0000000000000000774a6a70
 *   - http://typekit.com/eulas/0000000000000000774a6a7d
 * darkmode-mono-on:
 *   - http://typekit.com/eulas/0000000000000000774a6a84
 *   - http://typekit.com/eulas/0000000000000000774a6a75
 *   - http://typekit.com/eulas/0000000000000000774a6a7f
 *   - http://typekit.com/eulas/0000000000000000774a6a88
 *
 * © 2009-2022 Adobe Systems Incorporated. All Rights Reserved.
 */
/*{"last_published":"2022-11-13 03:20:12 UTC"}*/

@import url("https://p.typekit.net/p.css?s=1&k=soy0jkj&ht=tk&f=51487.51488.51491.51496.51505.51506.51509.51514&a=74340485&app=typekit&e=css");

@font-face {
font-family:"darkmode-mono-off";
src:url("https://use.typekit.net/af/696b37/0000000000000000774a6a89/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/696b37/0000000000000000774a6a89/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/696b37/0000000000000000774a6a89/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"darkmode-mono-off";
src:url("https://use.typekit.net/af/d310c4/0000000000000000774a6a80/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/d310c4/0000000000000000774a6a80/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/d310c4/0000000000000000774a6a80/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"darkmode-mono-off";
src:url("https://use.typekit.net/af/817b1c/0000000000000000774a6a70/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/817b1c/0000000000000000774a6a70/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/817b1c/0000000000000000774a6a70/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"darkmode-mono-off";
src:url("https://use.typekit.net/af/15eb8a/0000000000000000774a6a7d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/15eb8a/0000000000000000774a6a7d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/15eb8a/0000000000000000774a6a7d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"darkmode-mono-on";
src:url("https://use.typekit.net/af/d08736/0000000000000000774a6a84/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/d08736/0000000000000000774a6a84/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/d08736/0000000000000000774a6a84/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"darkmode-mono-on";
src:url("https://use.typekit.net/af/c89900/0000000000000000774a6a75/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/c89900/0000000000000000774a6a75/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/c89900/0000000000000000774a6a75/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"darkmode-mono-on";
src:url("https://use.typekit.net/af/67a0d8/0000000000000000774a6a7f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/67a0d8/0000000000000000774a6a7f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/67a0d8/0000000000000000774a6a7f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"darkmode-mono-on";
src:url("https://use.typekit.net/af/8decca/0000000000000000774a6a88/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/8decca/0000000000000000774a6a88/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/8decca/0000000000000000774a6a88/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

.tk-darkmode-mono-off { font-family: "darkmode-mono-off",sans-serif; }
.tk-darkmode-mono-on { font-family: "darkmode-mono-on",sans-serif; }
</style>
