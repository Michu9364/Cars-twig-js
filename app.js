/*function palindromy(zdanie)
{
 
var i, j;
 
for (i = 0, j = zdanie.length-1; i < j; i++, j--)
{
// pominiecie spacji
while (zdanie[i] == ' ' && i < j) i++;
while (zdanie[j] == ' ' && i < j) j--;
// porownanie kolejnych znakow
if (zdanie[i] != zdanie[j])
{
break;
}
}
if (i < j)
{
alert("Podany wyraz/zdanie nie jest palindromem");
}
else
{
alert("Podany wyraz/zdanie jest palindromem");
}
 
return false;
}
*/