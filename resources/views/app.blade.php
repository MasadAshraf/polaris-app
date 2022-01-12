@extends('shopify-app::layouts.default')

@section('styles')
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
@endsection

@section('content')
    <!-- React root DOM -->
    <script>
        window.react_api_base_url = '{{env('APP_URL','https/localhost/api')}}' + 'api/';
    </script>
    <div id="root">
    </div>
@endsection


@section('scripts')
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>

@endsection
