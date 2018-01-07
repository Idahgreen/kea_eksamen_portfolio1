    $(window).on("load", pageload);

    window.onscroll = function () {
        scrollFunction();
    }

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("topbutton").style.display = "block";
        } else {
            document.getElementById("topbutton").style.display = "none";
        }
    }

    function buttonPress() {
        $("topbutton").on("click", topFunction);
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function pageload() {
        console.log("01 script has loaded");
        buttons();
    }

    function buttons() {
        $(".01").on("click", boxAppear1);
        $(".02").on("click", boxAppear2);
        $(".03").on("click", boxAppear3);
        $(".04").on("click", boxAppear4);
        $(".05").on("click", boxAppear5);
        $(".06").on("click", boxAppear6);
        $(".07").on("click", boxAppear7);
    }

    function boxAppear1() {
        console.log("person has clicked image");
        $(".001").removeClass("display");
        $(".001").on("click", boxDisappear1);
    }

    function boxAppear2() {
        console.log("person has clicked image");
        $(".002").removeClass("display");
        $(".002").on("click", boxDisappear2);
    }

    function boxAppear3() {
        console.log("person has clicked image");
        $(".003").removeClass("display");
        $(".003").on("click", boxDisappear3);
    }

    function boxAppear4() {
        console.log("person has clicked image");
        $(".004").removeClass("display");
        $(".004").on("click", boxDisappear4);
    }

    function boxAppear5() {
        console.log("person has clicked image");
        $(".005").removeClass("display");
        $(".005").on("click", boxDisappear5);
    }

    function boxAppear6() {
        console.log("person has clicked image");
        $(".006").removeClass("display");
        $(".006").on("click", boxDisappear6);

    }

    function boxAppear7() {
        console.log("person has clicked image");
        $(".007").removeClass("display");
        $(".007").on("click", boxDisappear7);
    }



    function boxDisappear1() {
        console.log("03 back at it with that shit yo")
        $(".001").addClass("display");
    }

    function boxDisappear2() {
        console.log("03 back at it with that shit yo")

        $(".002").addClass("display");

    }

    function boxDisappear3() {
        console.log("03 back at it with that shit yo")

        $(".003").addClass("display");

    }

    function boxDisappear4() {
        console.log("03 back at it with that shit yo")

        $(".004").addClass("display");

    }

    function boxDisappear5() {
        console.log("03 back at it with that shit yo")

        $(".005").addClass("display");


    }

    function boxDisappear6() {
        console.log("03 back at it with that shit yo")

        $(".006").addClass("display");

    }

    function boxDisappear7() {
        console.log("03 back at it with that shit yo")

        $(".007").addClass("display");
    }
