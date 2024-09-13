<template>
    <nav>
        <ul class="nav nav-pills" id="inav">
            <img :src="logoUrl" alt="" class="gang"/>
            <li class="nav-item">
                <a class="nav-link" href="/" id="gang"> Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about"> About Us </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/productsView"> Products </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/adminView"> Admin </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contactView"> Contact Us </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/signupView"> Sign Up </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            logoUrl: 'https://yonelamangele.github.io/Capstone/images/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo-removebg-preview.png'
        }
    },
}
</script>
<style scoped>
a {
    font-size: 30px;
    color: white;
}

.gang {
    height: 200px;
}

#inav {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        font-family: "Rubik Glitch", system-ui;
}
#black{
    background-color: #383838;
    color: black;
}
</style>