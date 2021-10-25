/*--------------1 valor absoluto-------------- */

var numero1 = prompt ("ingrese su número");
var num1 = parseInt(numero1);

if (numero1 >= 0)
       {
           alert(num1)
        }
        
else  
       {
             alert(num1 * -1) 
         };

 /*--------------2 EL MAYOR-------------- */

 var numero1 = prompt ("ingrese su número");
 var numero2 = prompt ("ingrese  su otro número");
 var num1 = parseInt(numero1);
 var num2 = parseInt(numero2);

 if (num1 > num2)
         {
             alert(num1)
             document.write(num1);
         }
 else 
     {
         alert(num2)
         document.write(num2);
     }

/*3 ETAPAS DE LA VIDA*/

var numero1 = prompt ("ingrese edad");
var num1 = parseInt(numero1);

/*bebe*/

if (num1 <= 2)
    {
        alert("Bebe")
        document.write(num1  + " Es un Bebe" + "<br>");
    }

/*niño*/

    else if (num1 >= 3 && num1 <= 10)
    {
        alert("Niño")
        document.write(num1  + " Es un niño" + "<br>");
    }
    
/*preadolescente*/

    else if (num1 >= 11 && num1 <= 14)
    {
        alert("Preadolescente")
        document.write(num1  + " Es un preadolescente" + "<br>");
    }
    
/*adolescente*/
    
    else if (num1 >= 15 && num1 <= 19)
    {
        alert("Adolescente")
        document.write(num1  + " Es un adolescente" + "<br>");
    }

/*Joven Adulto*/
    
    else if (num1 >= 20 && num1 <= 24)
    {
        alert("Joven Adulto")
        document.write(num1  + " Es un joven adulto" + "<br>");
    }

/*Adulto*/
    
else if (num1 >= 25 && num1 <= 59)
{
    alert("Adulto")
    document.write(num1  + " Es un adulto" + "<br>");
}

/*Jubilado*/
    
else if (num1 >= 60 && num1 <= 74)
{
    alert("Jubilado")
    document.write(num1  + " Es un jubilado" + "<br>");
}
/*Adulto mayor*/
else if (num1 >= 75)
    {
        alert ("Adulto mayor")
        document.write(num1 + " Es un adulto mayor" + "<br>");
    }


/*------------------4.SOCIAL CLUB--------------*/
var edad = prompt ("ingrese edad");
var edad1= parseInt(edad);
var carne = prompt ("¿Tiene el carne de socio al día?");

if (edad >= 25 && carne == "si")  
    {
        alert("Puedes votar")
        document.write(edad1  + " puedes votar");
    }
else {
    alert ("NO PUEDES VOTAR");
}

/*------------------5.MULTIPLO COMUN--------------*/

var numero1 = prompt ("ingrese número que sea multiplo de 7 y/o 3");
var num1= parseInt(numero1);

if (numero1 %3 == 0 && numero1 %7 == 0)
{
    document.write(num1  + " Es multiplo de 7 y 3");
}
else if (num1 %3 == 0)
{   
    document.write(num1 + " Es multiplo de 3");
}
else if (num1 %7 == 0)
{
    document.write(num1  + " Es multiplo de 7");
}
else {
    document.write(num1 + " NO ES MULTIPLO NI DE 7 NI DE 3 ")
}
/*---------------------6 DIA DE LA SEMANA------------------------*/

var numero1 = prompt ("ingrese numero del 1 al 7")
var num1 = parseInt (numero1)

switch (num1) {
    case 1: document.write (" Lunes")
        break
    case 2: document.write(" Martes")
        break
    case 3: document.write (" Miercoles")
        break
    case 4: document.write (" Jueves");
        break
    case 5: document.write (" Viernes");
        break
    case 6: document.write (" Sábado");
        break
    case 7: document.write (" Domingo");
}
    
/*---------------------7 BOLETO------------------------*/

var numero1 = prompt ("ingrese edad");
var num1 = parseInt(numero1);

if (num1 <= 12) 
{
    document.write(num1  + " Es domingo no paga boleto");
}

else if (num1 >=70)
{
    document.write(num1  + " Es domingo no paga boleto");
}

else 
{
    document.write(num1  + "Usted si paga boleto");
}

/*--------------8 CALCULADORA-------------------*/
var numero1 = prompt ("ingrese primer numero");
var num1 = parseInt(numero1);
var eliga = prompt ("¿ingrese que quiere hacer?");
var numero2 = prompt ("ingrese segundo numero");
var num2 = parseInt(numero2);
var suma = num1+num2;
var sustraccion = num1-num2;
var multiplicacion = num1*num2;
var division = num1/num2;

if (eliga == "+")
{
    document.write(suma);
}
else if (eliga == "-")
{
    document.write(sustraccion);
}
else if (eliga == "*")
{
    document.write(multiplicacion);
}
else if (eliga == "/")
{
    document.write(division);
}



