<template>
    <nav>
        <h1 class="Logo">Transcriptions</h1>
        <div class="btn-container">
            <button @click="$emit('upload-data')">
                <img src="../../assets/upload.svg"  alt="Upload data">
                <span class="sr-only">Upload data</span>
            </button>
            <button @click="$emit('get-data')">
                <img src="../../assets/fetch-document.svg"  alt="Get data">
                <span class="sr-only">Get data</span>
            </button>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Header',
}

</script>

<style lang="scss" scoped>
    nav {
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
        transition: box-shadow 0.5s;
        box-shadow: 0 0 5px rgba(0,0,0,.1);

        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        h1 {
            font-family: 'Montserrat', sans-serif;
            font-weight: var(--medium);
            font-size: 18px;
            color: var(--title-color);
        }
    }
</style>
