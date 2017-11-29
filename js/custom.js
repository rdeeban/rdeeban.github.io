function notifyServer(){
	var fb = new Firebase("https://andrewliu.firebaseio.com/");
	fb.authAnonymously(sendNotification);

	root = fb.root();
	var d = new Date();
	var n = d.getMonth();
	var y = d.getFullYear();
	var day = d.getDate();
	newIP = myip.replace(/\./g, ",");
	x = root.child("Hits").child(day.toString()+"-"+n.toString()+"-"+y.toString()).child(newIP);
	x.transaction(updateData);
	localStorage.setItem("HasAccessed", "Yes")
}

function sendNotification(){

}

function updateData(prevData){
	if(prevData){
		return prevData+1;
	}
	else {
		return 1;
	}
}

$( document ).ready(function() {
	x = localStorage.getItem("HasAccessed");
	if(x){

	}
    else {
    	notifyServer();
    }
  });