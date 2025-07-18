{{-- resources/views/filament/pages/custom-dashboard.blade.php --}}
<x-filament-panels::page>
    <style>
      .content {
        margin-top: 45px;
      }
      .content h1 {
          font-size: 1.5rem;
          line-height: 2rem;
          color: white;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 0;
          letter-spacing: -0.025em;
      }

      .content h2 {
          font-size: 1.25rem;
          line-height: 1.75rem;
          color: white;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 0;
      }

      .content p {
          font-size: 1.125rem;
          line-height: 1.75rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.625;
      }

      .content pre {
          position: relative;
          padding: 1rem;
          border-radius: 0.375rem;
          overflow: auto;
          margin: 0;
          color: rgb(229 231 235);
      }

      .content a {
          color: rgb(37 99 235);
          text-decoration: none;
          transition: color 0.15s ease-in-out;
      }

      .content a:hover {
          color: rgb(59 130 246);
      }

      .content .blocktext {
          background-color: rgb(249 250 251);
          padding: 0.25rem 0.5rem;
          border-radius: 0.3rem;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          width: fit-content;
          color: rgb(225 29 72);
          font-weight: 400;
      }

      .content strong {
          font-weight: 700;
          color: white;
      }

      .content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
      }

      code.blocktext::before,
      code.blocktext::after,
      code.text-red::before,
      code.text-red::after,
      code.text-blue::before,
      code.text-blue::after {
          content: none !important;
      }

      .text-red {
          color: rgb(225 29 72);
      }

      .text-blue {
          color: rgb(37 99 235);
      }
    </style>
    <div class="w-full">
        <div class="p-6">
            <p class="text-3xl font-bold text-blue-600">{{ $this->getData()['stats']['article']['title_en'] }}</p>
            <img src="{{ asset('/storage/' . $this->getData()['stats']['article']['image']) }}" class="mt-3 rounded-lg" alt="image article">
            <article class="content prose prose-neutral max-w-none content font-light text-white tracking-tight">{!! $this->getData()['stats']['article']['content_en_html'] !!}</article>
        </div>
    </div>
</x-filament-panels::page>