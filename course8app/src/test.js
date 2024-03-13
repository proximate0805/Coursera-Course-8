var users = [1, 3, 5, 7, 8];
var sum = 0;

function sumEvenNumbers(users, sum){
for (var i = 1; i <= users; i++){
    if (i%2 == 0){
        sum = sum + i;
    }
}
}