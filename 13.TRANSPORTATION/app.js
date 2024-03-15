// exercise 13
//let transportation: string[] = [`civic`,`porsche`,`bugatti`,`supra`,`thar`]
//for(let i=0; i<transportation.length; i++){
//console.log(`I would like to own a ` + transportation[i]);
//}
var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam' + guest_list[i] + ',\n We invited you on dinner tomorrow. \n\nThank You')
//}
var not_present = 'Farhan';
var new_guest = 'Babar Azam';
guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam' + guest_list[i] + ',\n We invited you on dinner tomorrow. \n\nThank You')
//}
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
//for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam' + guest_list[i] +',\n We invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\n\nThank You')
//}
console.log('\nUnfortunately we can not arrange big table , Only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam,".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ', \nYes you are still invited on tomorrow dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
