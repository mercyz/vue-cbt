<template>
    <div class="w-full px-3 py-5 flex justify-between bg-white wg-nav">
        <div>
            <a href="#">Brainicas</a>
        </div>
        <div>
            <Timer/>
        </div>
    </div>
</template>
<script>
import Timer from "./Timer";
export default {
    name: "NavigationBar",
    components:{Timer},
}
</script>