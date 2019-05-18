<template>
    <div class="footer flex-column items-center w-100">
        <div class="flex item-center w-100 contact-person">
            <div class="pa4 w-25">
                <ul class="list tl ml6 pl0 lh-copy">
                    <li><a class="link dim white-70" href="">Cetak.id</a></li>
                    <li><a class="link dim white-70" href="">Tentang Kami</a></li>
                    <li><a class="link dim white-70" href="">Cara Kerja</a></li>
                </ul>
            </div>
            <ul class="list tl lh-copy pa4 w-25">
                <li class="white-70">Social</li>
                <li><a class="link dim white-70" href="">Facebook</a></li>
                <li><a class="link dim white-70" href="">LinkedIn</a></li>
                <li><a class="link dim white-70" href="">Instagram</a></li>
            </ul>
            <ul class="list tl pl0 lh-copy pa4 w-25">
                <li class="white-70">Contact Info</li>
                <li><a class="link dim white-70" href=""><img src="../assets/img/call.png" alt="call-icon"> +62 896 2219 1758</a></li>
                <li><a class="link dim white-70" href="">+62 896 2219 1759</a></li>
                <li><a class="link dim white-70" href=""><img src="../assets/img/mail.png" alt="mail-icon"> support@cetak.id</a></li>
            </ul>
        </div>
        <div class="flex item-center w-100 tl pl6 copyright">
            <a href="#" class="link dim white-50 w-25 pa4">Privacy Policy</a>
            <a href="#" class="link dim white-50 w-25 pa4">Terms & Condition</a>
            <a href="" class="white-50 w-50 pa4 link fr">Copyright &copy;
             getCopyright() ; Cetak.id
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        getCopyright: function() {
            document.write("2006 - "+ new Date().getFullYear())
        }
    }
}
</script>
