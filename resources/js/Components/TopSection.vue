<template>
    <div class="header">
        <h1 class="title">{{ title }}</h1>

        <div class="button-container">
            <div v-if="isVisible" class="search-container">
                <form action="/search" method="GET">
                    <input class="search-input" type="search" name="search" placeholder="Search">
                    <button type="submit" class="focus:outline-none">
                        <svg class="text-lightTextColor" style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                    </button>
                </form>
            </div>
            
            <button v-if="searchExist === true" @click="visible()" class="button ml-3">
                <svg class="text-darkTextColor" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
            </button>

            <inertia-link v-if="searchExist === true" :href="route('students')" class="button mx-5">
                <svg class="text-darkTextColor" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
            </inertia-link>

            <button class="button add-button">
                <inertia-link :href="setUrl()">
                    <svg class="add-button-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                </inertia-link>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            searchExist: false,
            routeUrl: String,
        },
        data() {
            return {
                isVisible: false,
            }
        },
        methods: {
            setUrl: function() {
                return route(this.routeUrl);
            },
            visible: function() {
                this.isVisible = (this.isVisible == false) ? !this.isVisible : false;
            }
        }
    }
</script>