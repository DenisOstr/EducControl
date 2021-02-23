<template>
    <div class="header">
        <h1 class="title">{{ title }}</h1>

        <div class="button-container">
            <button class="add-button">
                <svg class="add-button-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
        }
    }
</script>