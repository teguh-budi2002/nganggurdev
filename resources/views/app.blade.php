<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @routes
        @inertiaHead
        {{-- Google Tag Manager --}}
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MG9G8NVX');</script>
        {{-- AOS --}}
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" media="print" onload="this.media='all'">
        <noscript>
            <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
        </noscript>
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "{{ config('app.name') }}",
                "url": "{{ url('/') }}",
                "description": "Website for Learning Coding with Multi Language Support"
            }
        </script>
    </head>
    <body class="antialiased h-full w-full">
        {{-- Google Tag Manager (noscript) --}}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MG9G8NVX"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        
        @inertia
    </body>
</html>
