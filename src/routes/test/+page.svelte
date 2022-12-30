<script lang="ts">
    import type { PageData } from '../$types';
    
    export let data: PageData;
</script>

<h1>{data.status}</h1>
<body>{data.text}</body>