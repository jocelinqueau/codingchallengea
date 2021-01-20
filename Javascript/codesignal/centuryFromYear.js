function centuryFromYear(year) {
    if(year > 2000){
        return 21
    }
   else if ( year > 1900 && year <= 2000){
       return 20
   }
   else if ( year > 1800 && year <= 1900){
       return 19
   }
   else if ( year > 1700 && year <= 1800){
       return 18
   }
   else if ( year > 1600 && year <= 1700){
       return 17
   }
   else if ( year > 1500 && year <= 1600){
       return 16
   }
   else if ( year > 1400 && year <= 1500){
       return 15
   }
   else if ( year > 1300 && year <= 1400){
       return 14
   }
   else if ( year > 1200 && year <= 1300){
       return 13
   }
   else if ( year > 1100 && year <= 1200){
       return 12
   }
   else if ( year > 1000 && year <= 1100){
       return 11
   }
   else if ( year > 900 && year <= 1000){
       return 10
   }
   else if ( year > 800 && year <= 900){
       return 9
   }
   else if ( year > 700 && year <= 800){
       return 8
   }
   else if ( year > 600 && year <= 700){
       return 7
   }
   else if ( year > 500 && year <= 600){
       return 6
   }
   else if ( year > 400 && year <= 500){
       return 5
   }
   else if ( year > 300 && year <= 400){
       return 4
   }
   else if ( year > 200 && year <= 300){
       return 3
   }
   else if ( year > 100 && year <= 200){
       return 2
   }
   else if ( year >= 0 && year <= 100){
       return 1
   }
   
   }

   function centuryFromYear(year) {
    return Math.ceil(year / 100)
}
