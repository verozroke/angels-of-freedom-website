<template>
    <div class="donation">
        <div class="donation__container">
            <div class="donation__progress">
                <div class="donation__progress-title">{{ $t('donations.title') }}</div>
                <div class="progress-bar">
                    <span class="bar">
                        <span class="progress"></span>
                    </span>
                </div>
                <div class="donation__progress-subtitle">
                    {{ $t('donations.cost') }}
                </div>
            </div>
            <div class="donation__header">
                <div class="donation__angel">
                    <div class="card">
                        <div class="face face1" id="fullAngel">
                            <div class="content">
                                <h3>{{ $t('donations.links.angel.title') }}</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>{{ $t('donations.links.angel.description') }}</p>
                                <RouterLink class="a" :to="{name: 'Angel'}">{{ $t('donations.links.angel.button') }}</RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1" id="angelPack">
                            <div class="content">
                                <h3>{{ $t('donations.links.angel-set.title') }}</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>{{ $t('donations.links.angel-set.description') }}</p>
                                <RouterLink class="a" :to="{name: 'Angel'}">{{ $t('donations.links.angel-set.button') }}</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="donation__charity">
                    <h1>{{ $t('donations.free-charity.title') }}</h1>
                    <p>{{ $t('donations.free-charity.description') }}</p>
                    <RouterLink class="a" :to="{name: 'FreeCharity'}">{{ $t('donations.free-charity.button') }}</RouterLink>
                </div>
                <div class="angel-box">
                    <h1>{{ $t('donations.box.title') }}</h1>
                    <p>{{ $t('donations.box.description') }}</p>
                    <a href="https://wa.me/380674407634?text=%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C%20%D0%B1%D0%BE%D0%BA%D1%81%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8%20%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D0%BE%D0%B2">{{ $t('donations.box.button') }}</a>
                </div>
                <div class="contact-us">
                    <h1>{{ $t('donations.contact.title') }}</h1>
                    <p>+7 778 583 2122</p>
                    <p>+7 701 558 8834</p>
                    <p>info@helpukraine.kz</p>
                    <p>{{ $t('donations.contact.city') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
.donation{
    margin-top: 16px;
    width: 100%;
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__progress-subtitle {
        font-weight: 700;
        margin-top: 1em;        
    }
    &__progress {
        width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    &__progress-title {
        width: 900px;
        font-weight: 700;
        font-size: 50px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
}
.donation__angel {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
}
#fullAngel{
    background-image: url("https://thumb.tildacdn.com/tild3633-3565-4238-b533-613435616434/-/resize/560x400/-/format/webp/Step-final_NSC_3145_.jpg");
    background-size: cover;
}
#angelPack{
    background-image: url("https://thumb.tildacdn.com/tild3238-6331-4866-b732-633233396336/-/resize/560x400/-/format/webp/Step-3_NSC_3201_clea.jpg");
    background-size: cover;
}
.donation__angel .card{
    position: relative;
    cursor: pointer;
}

.donation__angel .card .face{
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.donation__angel .card .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.donation__angel .card:hover .face.face1{
    background: #fbff00;
    transform: translateY(0);
}

.donation__angel .card .face.face1 .content{
    opacity: 0.6;
    transition: 0.5s;
}

.donation__angel .card:hover .face.face1 .content{
    opacity: 1;
}

.donation__angel .card .face.face1 .content img{
    max-width: 100px;
}

.donation__angel .card .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.donation__angel .card .face.face2{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

.donation__angel .card:hover .face.face2{
    transform: translateY(0);
}

.donation__angel .card .face.face2 .content p{
    margin: 0;
    padding: 0;
}

.donation__angel .card .face.face2 .content .a{
    margin: 15px 0 0;
    display:  inline-block;
    cursor: pointer;
    width: 230px;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    padding: 20px 10px;
    background-color: #005acc;
    text-align: center;
    border-radius: .4em;
    transition: .4s;
}

.donation__angel .card .face.face2 .content .a:hover{
    transition: .4s;
    color: #000;
    background-color: #ffd800;
}
.donation__charity{
    width: 100%;
    margin: 12px 0;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e6e6e6;
    border-radius: 8px;
}
.donation__charity h1{
    width: 900px;
    font-weight: 700;
    font-size: 50px;
    line-height: 1.2;
    margin-bottom: .5em;
    text-align: center;
}
.donation__charity p{
    width: 800px;
    font-weight: 300;
    line-height: 1.2;
    font-size: 34px;
    margin-bottom: 1em;
    text-align: center;
}
.donation__charity .a{
    display:  inline-block;
    cursor: pointer;
    width: 230px;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    padding: 20px 10px;
    background-color: #005acc;
    text-align: center;
    border-radius: .4em;
    transition: .4s;
}
.donation__charity .a:hover{
    transition: .4s;
    color: #000;
    background-color: #ffd800;
}
.angel-box{
    margin: 12px 0;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.angel-box h1{
    width: 900px;
    font-weight: 700;
    font-size: 50px;
    line-height: 1.2;
    margin-bottom: .5em;
    text-align: center;
}
.angel-box p{
    width: 800px;
    font-weight: 300;
    line-height: 1.2;
    font-size: 34px;
    margin-bottom: 1em;
    text-align: center;
}
.angel-box a{
    display:  inline-block;
    cursor: pointer;
    width: 230px;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    padding: 20px 10px;
    background-color: #ffd800;
    text-align: center;
    border-radius: .4em;
    transition: .4s;
}
.angel-box a:hover{
    transition: .4s;
    color: #000;
    background-color: #005acc;
}
.contact-us{
    margin: 12px 0;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact-us h1{
    width: 900px;
    font-weight: 600;
    font-size: 45px;
    line-height: 1.2;
    margin-bottom: .5em;
    text-align: center;
}
.contact-us p{
    width: 800px;
    font-weight: 200;
    line-height: 1.2;
    font-size: 24px;
    margin-bottom: 1em;
    text-align: center;
}

// Color Variables ======================================
$green: #005acc;
$gray-light: #eef1f3;

// Bar Variables ========================================
$bar-size: 5px;
$bar-radius: 60px;
$bar-bg: rgba(0,0,0,0.075);



// Bar ============================================
.progress-bar {
	border-radius: $bar-radius;
	overflow: hidden;
    width: 100%;

	span {
		display: block;
	}

}

.bar {
  background: $bar-bg;
}

.progress {
  background: $green;
  color: #fff;
  padding: $bar-size;
  width: 40%;
}

</style>