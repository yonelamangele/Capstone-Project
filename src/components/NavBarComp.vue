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
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"> Products </a>
                <ul class="dropdown-menu" id="black">
                    <li><a class="dropdown-item" href="/categories"> Categories </a></li>
                    <li><hr class="dropdown-navider"></li>
                    <li><a class="dropdown-item" href="/productsView"> All Products </a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/adminView"> Admin </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contactView"> Contact Us </a>
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
    background-color: tan;
    color: black;
}
</style>