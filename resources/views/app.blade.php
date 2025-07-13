<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        {{-- AOS --}}
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" media="print" onload="this.media='all'">
        <noscript>
            <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
        </noscript>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "{{ config('app.name') }}",
                "url": {{ url('/') }},
                "description": "Learn Coding Website with Multi Language Support"
            }
        </script>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @routes
        @inertiaHead
    </head>
    <body class="antialiased h-full w-full">
        @inertia
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </body>
</html>
