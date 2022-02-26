/*
Kindly Solve $ this Array: c
onst ourVision = ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"] 
to be "BUILD THE NEXT ERA OF SOFTWARE DEVELOPMENT" in simplest Javascript way.
*/

const ourVision = ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"]
console.log(ourVision.join(" ").replace(/[$]/g, '').toUpperCase())
/*
1.The array is first converted into a string seperated by spaces.
2.All '$' characters in the  string are removed.
3.The entire string is converted to upper case so as mimic the required output.
4.The generated string is displayed.
*/