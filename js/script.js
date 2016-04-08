
$(document).ready(function() {
    
    $(document).mySliderPlugin();
    
    
    
    
    var html = $('#my_tmpl').html();
    var data = {
        name: "Халецкий Игорь Валерьевич", 
        photo: "img/photo.png",
        course: "Студент курса Frontend Developer GoForIt online",
        reason1: "Мне это интересно",
        reason2: "Можно хорошо заработать",
        reason3: "Можно работать дистанционно",
        mobile: "+380503472683",
        sn_reference: "https://www.facebook.com/profile.php?id=1094040908",
        feedback: "Могу построить хороший сайт :)"
        
      
    };
    
    var content = tmpl(html, data);
    $('body').append(content);
    
    
  var tmpl_loDash = _.template(document.getElementById('list-template').innerHTML);


  var result = tmpl_loDash({
        name: "Халецкий Игорь Валерьевич", 
        photo: "img/photo.png",
        course: "Студент курса Frontend Developer GoForIt online",
        reason1: "Мне это интересно",
        reason2: "Можно хорошо заработать",
        reason3: "Можно работать дистанционно",
        mobile: "+380503472683",
        sn_reference: "https://www.facebook.com/profile.php?id=1094040908",
        feedback: "Могу построить хороший сайт :)"
});
  $('body').append(result);;
    
});// end ready
