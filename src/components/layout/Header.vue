<template>
    <nav>
        <h1 class="Logo">Transcriptions</h1>
        <div class="btn-container" aria-labelledby="Button container">
            <button>
                <img src="../../assets/upload.svg" aria-hiden="true">
                <span class="sr-only">Upload data</span>
            </button>
            <button>
                <img src="../../assets/fetch-document.svg" aria-hiden="true">
                <span class="sr-only">Get data</span>
            </button>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Header'
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

    button {
        border: none;
        margin-right: 1rem;
        padding: 5px 1rem;
    }
</style>
