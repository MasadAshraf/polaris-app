@extends('shopify-app::layouts.default')

@section('styles')
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection

@section('content')
    <!-- React root DOM -->
    <script>
        @auth
            window.auth_key = `{{\Illuminate\Support\Facades\Auth::user()->auth_key}}`;
        @endauth
        @guest
            window.auth_key = ''
        @endguest
    </script>
    <div id="root">
    </div>
@endsection


@section('scripts')
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>

@endsection
