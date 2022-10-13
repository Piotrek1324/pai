<html>
<script>

let tablica = new Arry(69,34,"lekcja","papież",1312,420)

for(let i = 0; i<tablica.length; i++) {
	document.write(tablica[i] + "<br>");
}

document.write("<hr>");

for(let wartosc of tablica){
	document.write(wartosc+"br");
}