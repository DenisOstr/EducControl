<template>
    <aside class="sidebar">
        <inertia-link :href="route('home')">
            <img class="w-24 h-24" src="../../images/EducControlLogo.svg" alt="Educ Control Logo">
        </inertia-link>

        <ul class="mt-14">
            <inertia-link :href="route('home')" class="item">
                <icon :class="isActive('')" name="overview" class="item-icon"></icon>
                <div :class="isActive('')" class="item-text">Overview</div>
            </inertia-link>

            <inertia-link :href="route('groups')" class="item">
                <icon :class="isActive('groups')" name="groups" class="item-icon"></icon>
                <div :class="isActive('groups')" class="item-text">Groups</div>
            </inertia-link>

            <inertia-link :href="route('students')" class="item">
                <icon :class="isActive('students')" name="students" class="item-icon"></icon>
                <div :class="isActive('students')" class="item-text">Students</div>
            </inertia-link>

            <div>
                <p class="category-header mt-10 mb-2">Actions</p>

                <inertia-link :href="route('students.add')" class="item">
                    <icon :class="isActive('students.add')" name="add" class="item-icon"></icon>
                    <div :class="isActive('students.add')" class="item-text">Add student</div>
                </inertia-link>

                <inertia-link :href="route('students.change')" class="item">
                    <icon :class="isActive('students.change')" name="change" class="item-icon"></icon>
                    <div :class="isActive('students.change')" class="item-text">Change</div>
                </inertia-link>

                <inertia-link :href="route('students.remove')" class="item">
                    <icon :class="isActive('students.remove')" name="delete" class="item-icon"></icon>
                    <div :class="isActive('students.remove')" class="item-text">Delete</div>
                </inertia-link>
            </div>
        </ul>
    </aside>
</template>

<script>
    import Icon from './Icon'

    export default {
        components: {
            Icon,
        },
        mounted() {
            
        },
        props: {
            url: String,
        },
        methods: {
            isUrl(...urls) {
                // Silly logic that follows from a silly menu solution
                // The main menu should not lead to second-level pages
                // However, the design suggests a similar menu.
                if (urls[0] === '') {
                    return this.url === ''
                } else if (urls[0] === 'students.add') {
                    return this.url === 'students/add'
                } else if (urls[0] === 'students.change') {
                    return this.url === 'students/change'
                } else if (urls[0] === 'students.remove') {
                    return this.url === 'students/remove'
                }
                
                return urls.filter(url => this.url.includes('/') ? this.url.includes('.') : (this.url.startsWith(url) && !this.url.includes('/'))).length
            },

            isActive(name) {
                return this.isUrl(name) ? 'active' : 'inactive'
            }
        }
    }
</script>