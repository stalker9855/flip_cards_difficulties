$(document).ready(function(){
    $('#prev').prop('disabled', true);
    class QA
    {
        constructor(word, translates) {
            this.word = word;
            this.translates = translates;
        }
    }
    let flip_flag = false;
    let i = 0;
    let correct = 0;
    let wrong = 0;
    const correct_ = document.getElementById('correct');
    const wrong_ = document.getElementById('wrong');
    const front_word = document.getElementById('front_word');
    const back_word = document.getElementById('back_word');
    const translate_word = document.getElementById('translate_word');
    const switch_ = document.getElementById('switch');
    const lWords = [
        new QA('Always', ["завжди", "вічно", "за всіх обставин", "постійно"]),
        new QA('Cat', ["кіт", "кішка", "мурлика"]),
        new QA('Car', ["машина", "автомобіль", "вагон", "вагонетка", "віз"]),
        new QA('Flower', ["квітка", "цвіт", "квіт", "цвітіння"]),
        new QA('Sun', ["сонце", "день", "рік", "світило"]),
        new QA('House', ["будинок", "дім", "хата", "житло"]),
        new QA('Dog', ["собака", "пес", "дог"]),
        new QA('Cup', ["чаша", "чашка", "чашечка", "кубок", "келих"]),
        new QA('Tree', ["дерево"]),
        new QA('Moon', ["місяць"]),
    ]; // novice
    const mWords = [
        new QA('Screen', ["екран", "образ", "рама", "рамка"]),
        new QA('Accident', ["випадковість", "аварія", "випадок", "катасрофа", "казус"]),
        new QA('Crash', ["аварія", "гуркіт", "тріск"]),
        new QA('Brave', ["хоробрий"]),
        new QA('Candle', ["свічка", "свічковий"]),
        new QA('Flour', ["мука", "борошно"]),
        new QA('Impossible', ["неможливо", "неможливий", "неймовірний", "неймовірно"]),
        new QA('Prefer', ["надавати перевагу","віддавати перевагу"])
    ]; // medium
    const hWords = [
        new QA('Pestilence', ["чума", "епідмеія"]),
        new QA('Malign', ["злоякісний", "згубний", "злісний"]),
        new QA('Hollow', ["порожнистий", "запалий", "порожній"]),
        new QA('Applaud', ["аплодувати"]),
        new QA('Temptation', ["спокуса", "принада"]),
        new QA('Cruel', ["жорстокий", "болісний", "варварський"]),
        new QA('Acquaintances', ["знайомі"]),
        new QA('Slander', ["наклепи", "лихослів'я", "лихослівя", "наговір"]),
        new QA('Endless', ["нескінченний", "незліченний"]),
    ]; // hard
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    function displayWords(words){
        front_word.innerHTML = words[i].word;
        back_word.innerHTML = words[i].word;
        translate_word.innerHTML = words[i].translates;
    }
    function reset() {
        correct = 0;
        wrong = 0;
        correct_.innerHTML = "Correct: " + correct;
        wrong_.innerHTML = "Wrong: " + wrong;
        i = 0;
    }
    shuffle(lWords);
    displayWords(lWords);
        $('#submit').click(()=>{
            let novice = document.getElementById('novice');
            let meidum = document.getElementById('medium');
            let hard = document.getElementById('hard');
            if(novice.checked == true){
                i = 0;
                $('#next').prop('disabled', false);
                $('#next').prop('disabled', false);
                switch_.innerHTML = (i + 1)  + "/" + lWords.length;   
                console.log('novie');
                shuffle(lWords);
                displayWords(lWords);
                
                reset();
            }
            else if(meidum.checked == true){
                i = 0;
                $('#next').prop('disabled', false);
                $('#next').prop('disabled', false);
                switch_.innerHTML = (i + 1)  + "/" + mWords.length;   
                console.log('meidum');
                shuffle(mWords);
                displayWords(mWords);
                reset();
            }
            else if(hard.checked == true){
                i = 0;
                $('#next').prop('disabled', false);
                $('#next').prop('disabled', false);
                switch_.innerHTML = (i + 1)  + "/" + hWords.length;   
                console.log('meidum');
                shuffle(hWords);
                displayWords(hWords);
                reset();
            }
            else console.log('none');
        })
        $('#next').click(function(words)
        {
            if(novice.checked == true)
            {
                words = lWords;
            }
            else if(medium.checked == true)
            {
                words = mWords;
            }
            else if(hard.checked == true)
            {
                words = hWords;
            }
            if(i == words.length - 1 || i > words.length - 1)
                $('#next').prop('disabled', true);
            else {
                if(flip_flag)
                {
                    $('.card__inner').toggleClass('is-flipped');
                    flip_flag = !flip_flag;
                }
                $('#prev').prop('disabled', false);
                i++;
                front_word.innerHTML = words[i].word;
                setTimeout(() => {back_word.innerHTML = words[i].word;
                    translate_word.innerHTML = words[i].translates}, 500); 
            }
            switch_.innerHTML = (i + 1)  + "/" + words.length;
            
        })
        $('#prev').click(function(words) { 
            if(novice.checked == true)
            {
                words = lWords;
            }
            else if(medium.checked == true)
            {
                words = mWords;
            }
            else if(hard.checked == true)
            {
                words = hWords;
            }
            if(i == 0 || i < 0)
            {
                $('#prev').prop('disabled',true);
            }
                else{
                    if(flip_flag)
                    {
                        $('.card__inner').toggleClass('is-flipped');
                        flip_flag = !flip_flag;
                    }
                    $('#next').prop('disabled', false);
                    i--;
                    front_word.innerHTML = words[i].word;  
                    setTimeout(() => {back_word.innerHTML = words[i].word;
                    translate_word.innerHTML = words[i].translates}, 500);      
                }
            switch_.innerHTML = (i + 1) + "/" + words.length;
        });
        $('#btn').click(function(words){
            if(novice.checked == true)
            {
                words = lWords;
            }
            else if(medium.checked == true)
            {
                words = mWords;
            }
            else if(hard.checked == true)
            {
                words = hWords;
            }
            var input = String(document.getElementById('input').value).toLocaleLowerCase();
            flip_flag = !flip_flag;
            if(flip_flag)
            {
            if(words[i].translates.includes(input)){
                correct++;
                correct_.innerHTML = "Correct: " + correct;
            }     
            else{
                wrong++;
                wrong_.innerHTML = "Wrong: " + wrong;
            }
            if((correct + wrong) == 10)
            {
                let sum = correct + wrong;
                alert("Correct answers: " + ((correct / all) * 100) + "% Wrong answers: " + ((wrong) / all) * 100 + "%");
                correct = 0;
                wrong = 0;
                correct_.innerHTML = "Correct: " + correct;
                wrong_.innerHTML = "Wrong: " + wrong;
            }
        }
        });  
    $('.card__inner').click(function(){
        $(this).toggleClass('is-flipped');
    })
})
  