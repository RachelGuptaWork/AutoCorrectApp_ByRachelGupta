var btn = document.getElementById("search_btn");
btn.addEventListener("click", correct);

const words = ["hot", "maximize", "rachel"];


function correct(){
    var min= Number.MAX_VALUE;
    var txt = document.getElementById("text_field");
    for(var i=0; i<words.length;i++){
        var val = editDistance(txt.value, words[i], txt.value.length, words[i].length);
        if(val<min){
            var min = val;
            var final_str = words[i]
        }
        
    }
    txt.value = final_str;
}

function editDistance(s1, s2, i,j){
    if(i==0){
        return j;
    }
    
    if(j==0){
        return i;
    }

    if(s1.charAt(i-1)==s2.charAt(j-1)){
        return editDistance(s1, s2, i-1, j-1);
    }
    return 1+ min(editDistance(s1, s2, i, j-1), // Insert
    editDistance(s1, s2, i-1, j),   // Remove
    editDistance(s1, s2, i-1, j-1));  // Replace
}

function min(x,y,z){
    if (x <= y && x <= z)
        return x;
    if (y <= x && y <= z)
        return y;
    else
        return z;
}