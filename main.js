// https://teachablemachine.withgoogle.com/models/Re4Zt4xfW/
dog = 0
cat = 0
lion = 0
function ButtonStart(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Re4Zt4xfW/model.json",model_ready)
}

function model_ready(){
    classifier.classify(got_result)
}

function got_result(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        random_no_r = Math.floor(Math.random()*255) + 1
        random_no_g = Math.floor(Math.random()*255) + 1
        random_no_b = Math.floor(Math.random()*255) + 1

        document.getElementById("result_label").style.color = "rgb(" + random_no_r + "," + random_no_g + "," + random_no_b + ")"
        document.getElementById("result_count").style.color = "rgb(" + random_no_r + "," + random_no_g + "," + random_no_b + ")"

        document.getElementById("result_count").innerHTML = "detected dog - " + dog + "  detected cat - " + cat + "  detected lion - " + lion 
        document.getElementById("result_label").innerHTML = "i hear voice of -" + result[0].label 

        img = document.getElementById("default_img")
        if(result[0].label == "Dog BArk" ){
            img.src = "dog.gif" 
            dog = dog + 1
        
        }
        else if(result[0].label == "Cat meow"){
            img.src = "cat.gif"
            cat = cat + 1
        }
        else if(result[0].label == "Lion roaring"){
            img.src = "lion-roar.gif"
            lion = lion + 1
        } 
        else{
            img.src = "ear.gif"
        }
    }
    
}