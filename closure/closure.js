function nonsense(string){
  var blab = function(){
    alert(string);
  };
 window.setTimeout(blab , 2000);
  return blab;
}

var blabLater = nonsense('Reettik');
var blabAgainLater = nonsense('Reettik Goswami')


console.log(blabLater());
console.log(blabAgainLater());

//======================================================================

var lastNameTrier = function(firstName){
   var innerFunction = function(lastName){
       return firstName +" "+ lastName;
   };
   return innerFunction;
};


var firstNameFarmer = lastNameTrier('Farmer');

console.log(firstNameFarmer('Jane')); //"Farmer Jane"
console.log(firstNameFarmer('Brown')); //"Farmer Brown"
console.log(firstNameFarmer('lynne')); //"Farmer lynne"


//=======================================================================
function storyWriter(){ 
  var storyObject = {
     story : "" ,
     addWords : function(str){storyObject.story+=str; return storyObject.story;} , 
     erase : function(str){storyObject.story = ""; return storyObject.story; }
  } ; 
  return storyObject;
}


    var farmLoveStory = storyWriter();
    console.log(farmLoveStory.addWords('There was once a lonely cow.'));
    console.log(farmLoveStory.addWords('It saw a friendly face.'));
    console.log(farmLoveStory.erase());

	//'There was once a lonely cow. It saw a friendly face.'

  	var storyOfMyLife = storyWriter();
	  console.log(storyOfMyLife.addWords('My code broke.')); // 'My code broke.'
  	console.log(storyOfMyLife.addWords('I ate some ice cream.')); //'My code broke. I ate some ice cream.'
	  console.log(storyOfMyLife.erase()); // ''
