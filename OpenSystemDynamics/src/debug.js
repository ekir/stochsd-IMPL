/*

This file may distributed and/or modified under the
terms of the Affero General Public License (http://www.gnu.org/licenses/agpl-3.0.html).

*/

// Are reference used for debuggning
// We set objects we need to study to temppublic, from inside functions we are debuggning, and then we can see information about them in the javascript debugger
var debugPublic={};
// Example of how to use debugPublic
//~ debugPublic["testvalue"]=1;
//~ debugPublic["testvalue"]=referencetoObject;

// Debug popup
dpopup_mode=false;
function dpopup(message) {
	if(dpopup_mode) {
		alert(messsage);
	}
}

function errorPopUp(message) {
	alert("Error: "+message);
}
