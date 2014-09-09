var checkForClass = function(classList, targetClass){
    var result = classList.toString().indexOf(targetClass);
    if (result > -1){
        return true;
    }else{
        return false;
    }
}

var navAction = function(targetTab){
    // we pass this as the argument. which will be the list element.
    //so we extract the title

    var target;
    var contentHolder; //the article goes here
    var images;  // the article's pictures go here
    var titleHolder; // the article's title goes here
    function init(){
        targetTab = targetTab == null? "aboutUs_tab":targetTab;  //We will use this for the default
        contentHolder = document.getElementById('riminiMain');
        images = document.getElementById("images");
        titleHolder = document.getElementById('titleHolder');
        var newTitle = targetTab.innerText;
        contentHolder.innerHTML = document.getElementById('gelato').innerHTML;
    };
    var getTarget = function(targetTab){
     target = targetTab.split("_")[0];
            return target;
        };
    var fadeOut = function(target){
       var targetEl =  document.getElementById(target);
        targetEl.style.className("fadeOut")
    }

    var showArticle = function(targetTab){
        if(!images){
            images = document.getElementById('images');
        }
        console.log(targetTab);
        //set the class for the nav link
        if(document.getElementsByClassName('selected')[0]){
            document.getElementsByClassName('selected')[0].classList.toggle('selected');
        }

        document.getElementById(targetTab).classList.add('selected');
        getTarget(targetTab);
        console.log(target);

       // fade out the current article content, do we want to slide it down too?
        contentHolder.classList.toggle('fadeMeOut');
       //fade out the current articles pictures
        images.classList.toggle('fadeMeOut');
       //fade out the current articles title
        titleHolder.classList.toggle("fadeMeOut")
     //okay, get the article you want to show
        var targetArticle = document.getElementById(target);
        var targetTitle = targetArticle.getElementsByClassName('articleHeader')[0].innerText;
        //now show the Title
        titleHolder.innerText = targetTitle;
        titleHolder.classList.toggle("fadeMeIn")
        titleHolder.classList.toggle("fadeMeOut");
       // set the content Holder to the new article
        contentHolder.innerHTML = targetArticle.innerHTML;
        contentHolder.classList.toggle('fadeMeIn');
        contentHolder.classList.toggle('fadeMeOut');
       //set the content to the to images
        if (target == 'gallery'){
            var images = document.getElementById('images');
            if (images) {
                if (!checkForClass(images.classList,'hidden')){
                    images.classList.toggle('hidden');
                }
            console.log(contentHolder.classList)
            contentHolder.classList.toggle('expanded')
            }
        }else {

            var image_upper = document.getElementById('side_image_upper');
            image_upper.src = "images/" + target + "_image_upper.png"

            var image_upper = document.getElementById('side_image_lower');
            image_upper.src = "images/" + target + "_image_lower.png"

            if (checkForClass(images.classList,'hidden')){
                images.classList.toggle('hidden');
            }
            images.classList.toggle('fadeMeIn');
            if (checkForClass(images.classList,'fadeMeOut')){
                images.classList.toggle('fadeMeOut');
            }

        }



       //set the new title


       //fade in the new content


    }

    return{
        init:init,
        showArticle:showArticle
    }

}();



