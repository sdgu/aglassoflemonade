var len = listCookies().length;

        document.getElementById("test").innerHTML = "Number of times = " + len + " " + listCookies();


        function listCookies()
        {
            var theCookies = document.cookie.split(';');
            var aString = '';
            var times = [];
            for (var i = 1; i <= theCookies.length; i++)
            {

                var indOfEq = theCookies[i - 1].indexOf("=");
                times[i - 1] = theCookies[i - 1].substring(indOfEq + 1);


            }
            return times;
        }

        var avg = 0;
        var sum = 0;
        $(document).ready(function()
        {
            $(document).keydown(function(e)
            {


                if (e.keyCode == '69')
                {

                    //var test = $.cookie('storeTimes')
                    
                    deleteAllCookies();
                     document.getElementById("test").innerHTML = "Number of times = " + len + " " + listCookies();
                    document.getElementById("average").innerHTML = (sum / len).toFixed(2);



                    //alert(document.cookie);


                }
                if (e.keyCode == '32')
                {
                    //spaceCount++;
                    //alert(spaceCount);
                    //document.getElementById("demo").innerHTML = spaceCount.toString();

                    //alert(spaceCount);

                    if (spaceCount == 0)
                    {

                        spaceCount++;
                        start();
                    }
                    else if (spaceCount == 1)
                    {

                        prevTime = seconds + "." + tens; //might need to add minutes


                        var date = new Date();
                        //date.setTime(date.getTime() + Number(hours) * 3600 * 1000);
                        document.cookie = date + " = " + prevTime;

                        var allTimes = listCookies();
                        var len = allTimes.length;
                        sum = 0;
                        for (i = 0; i < len; i++)
                        {
                            var a = parseFloat(allTimes[i])
                            sum = sum + a;

                        }

                        avg = (sum / len).toFixed(2);


                        document.getElementById("test").innerHTML = "Number of times = " + len + " " + listCookies();
                        document.getElementById("average").innerHTML = avg;




                        spaceCount--;
                        stop();
                    }
                    // else
                    // {
                    // 	spaceCount = 0;
                    // 	reset();

                    // }
                    // if (spaceCount == 1)
                    // {
                    // 	spaceCount--;
                    // 	//stop();
                    // }


                }
            });
        });

        var allTimes = listCookies();

        sum = 0;
        for (i = 0; i < len; i++)
        {
            var a = parseFloat(allTimes[i])
            sum = sum + a;

        }

        avg = (sum / len).toFixed(2);
        document.getElementById("average").innerHTML = avg;